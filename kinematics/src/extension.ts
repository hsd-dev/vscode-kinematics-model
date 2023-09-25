'use strict';

import * as net from 'net';
import * as roslib from 'roslib';
import THREE = require('three');
import * as vscode from 'vscode';
import { LanguageClient, StreamInfo } from 'vscode-languageclient/node';
import { exec } from 'child_process';
import { parse } from 'yaml';
import * as http from 'http';


function activate(context: vscode.ExtensionContext) {
  var client: LanguageClient;

  let connectionInfo = {
    port: 5008,
    host: "0.0.0.0"
  };

  let serverInfo = () => {
    // Connect to language server via socket
    let socket = net.connect(connectionInfo);
    let result: StreamInfo = {
      writer: socket,
      reader: socket
    };
    return Promise.resolve(result);
  };

  var clientOptions = {
    documentSelector: ['kinematics']
  };
  // Create the language client and start the client.
  client = new LanguageClient('MYDSL1', serverInfo, clientOptions);
  var disposable = client.start();
  // Push the disposable to the context's subscriptions so that the
  // client can be deactivated on extension deactivation
  context.subscriptions.push(disposable);

  // related to URDF preview
  const disposableSidePreview = vscode.commands.registerCommand('kinematics.openPreview', () => {
    initKinematicsPreview(context);
  });
  context.subscriptions.push(disposableSidePreview);

  // trigger MCP generation
  const disposableMCPGeneration = vscode.commands.registerCommand('kinematics.generateMCP', async () => {
    generateMoveitConfigPackage(context);
  });
  context.subscriptions.push(disposableMCPGeneration);

  function initKinematicsPreview(context: vscode.ExtensionContext) {
    // Create and show a new webview
    const panel = vscode.window.createWebviewPanel(
      // Webview id
      'kinematics.preview',
      // Webview title
      'Kinematics Preview',
      // This will open the second column for preview inside editor
      vscode.ViewColumn.Beside,
      {
        // Enable scripts in the webview
        enableScripts: true
      }
    );

    http.get('http://127.0.0.1:5000/', (response) => {
      var data = '';

      response.on('data', (chunk) => {
        // console.log(`BODY: ${chunk}`);
        data += `${chunk}`
      });
      response.on('end', () => {
        // console.log(data);
        panel.webview.html = data;
        setActiveEditorContent(panel);
      });
    }).on("error", (error) => {
      console.error('Error during request:', error);
    });
  }

  async function setActiveEditorContent(panel: vscode.WebviewPanel) {
    const document = vscode.window.activeTextEditor?.document;
    if (document) {
      panel.webview.postMessage(await loadModel(document));
    }
  }

  async function loadModel(document: vscode.TextDocument) {
    var [model, robots] = await getModel(document, client);
    return JSON.stringify([model, robots]);
  }

  async function getWSFiles() {
    const files = await vscode.workspace.findFiles('*.kin');
    return files;
  }

  async function createChain(model: any) {
    var components: Record<string, vscode.Uri> = {}
    const ws_files = await getWSFiles();
    for (var configComponent of model['component']) {
      for (var file of ws_files) {
        let document = await vscode.workspace.openTextDocument(file)
        let text = document.getText();
        let component = parse(text)['component'];

        if (configComponent.type === component['name']) {
          let name = configComponent.type;
          components[name] = file;

          if (component['joint'] !== undefined) {
            if (model.joint !== undefined) {
              model.joint = model.joint.concat(component['joint']);
            } else {
              model.joint = component['joint'];
            }
          }

          if (component['link'] !== undefined) {
            if (model.link !== undefined) {
              model.link = model.link.concat(component['link']);
            } else {
              model.link = component['link'];
            }
          }
        }
      }
    }

    for (var connection of model['connection']) {
      let baseName = connection.baseAttachment.split('.')[0];
      let baseAttachmentName = connection.baseAttachment.split('.')[1];
      let document = await vscode.workspace.openTextDocument(components[baseName]);
      let text = document.getText();
      let baseComponent = parse(text)['component'];
      let baseAttachment = null;
      for (var attachment of baseComponent['baseAttachment']) {
        if (baseAttachmentName === attachment.name) {
          baseAttachment = attachment;
        }
      }

      let flangeName = connection.flangeAttachment.split('.')[0];
      let flangeAttachmentName = connection.flangeAttachment.split('.')[1];
      document = await vscode.workspace.openTextDocument(components[flangeName]);
      text = document.getText();
      let flangeComponent = parse(text)['component'];
      let flangeAttachment = null;
      for (var attachment of flangeComponent['flangeAttachment']) {
        if (flangeAttachmentName === attachment.name) {
          flangeAttachment = attachment;
        }
      }

      let joint = {name: connection['name'],
                   type: 'fixed',
                   parent: {link: ''},
                   child: {link: ''},
                   origin: {xyz: '', rpy: ''}};
      joint.parent.link = flangeAttachment.parent;
      joint.child.link = baseAttachment.parent;
      joint.origin = doTransform(flangeAttachment.origin, baseAttachment.origin);
      model.joint.push(joint);
    }
  }

  function rpyToQuaternion(roll: number, pitch: number, yaw: number) {
    var phi = roll / 2.0;
    var the = pitch / 2.0;
    var psi = yaw / 2.0;
    var x = Math.sin(phi) * Math.cos(the) * Math.cos(psi) - Math.cos(phi) * Math.sin(the)
      * Math.sin(psi);
    var y = Math.cos(phi) * Math.sin(the) * Math.cos(psi) + Math.sin(phi) * Math.cos(the)
      * Math.sin(psi);
    var z = Math.cos(phi) * Math.cos(the) * Math.sin(psi) - Math.sin(phi) * Math.sin(the)
      * Math.cos(psi);
    var w = Math.cos(phi) * Math.cos(the) * Math.cos(psi) + Math.sin(phi) * Math.sin(the)
      * Math.sin(psi);

    let quat = new roslib.Quaternion({
      x: x,
      y: y,
      z: z,
      w: w
    });
    quat.normalize();
    return quat
  }


  function getThreePose(origin: any) {
    var pose = new roslib.Pose({
      position: new roslib.Vector3({
        x: origin.xyz[0],
        y: origin.xyz[1],
        z: origin.xyz[2]
      }),
      orientation: rpyToQuaternion(origin.rpy[0], origin.rpy[1], origin.rpy[2])
    });
    return pose;
  }


  function doTransform(origin1: any, origin2: any) {
    let pose1 = getThreePose(origin1);
    let pose2 = getThreePose(origin2);

    pose2.orientation.invert();
    pose1.orientation.multiply(pose2.orientation);
    pose1.position.subtract(pose2.position);

    let euler = new THREE.Euler();
    let quat = new THREE.Quaternion(pose1.orientation.x,
                                     pose1.orientation.y,
                                     pose1.orientation.z,
                                     pose1.orientation.w);
    euler.setFromQuaternion(quat);

    let origin = {xyz: pose1.position.x + ' ' +
                       pose1.position.y + ' ' +
                       pose1.position.z,
                  rpy: euler.x  + ' ' +
                       euler.y  + ' ' +
                       euler.z};
    return origin;
  }


  // gets groups from current component as well as included components
  // if included components have prefixes assigned, adds them to respective link names
  async function getGroups(model: any) {
    const groups: any[] = [];
    const prefix_dict: any = {};

    // Helper function to add a prefix to a link
    function addPrefixToLink(link: string, prefix: string): string {
      return prefix + link;
    }

    if (model?.component?.component) {
      const ws_files = await getWSFiles();

      for (const configComponent of model.component.component) {
        for (const file of ws_files) {
          const document = await vscode.workspace.openTextDocument(file);
          const text = document.getText();
          const component = parse(text).component;

          if (configComponent.type === component.name) {
            const group = component.group;

            if (group) {
              group.forEach((value: any, i: number) => {
                if (configComponent.prefix) {
                  group[i].baseLink = addPrefixToLink(group[i].baseLink, configComponent.prefix);
                  group[i].endLink = addPrefixToLink(group[i].endLink, configComponent.prefix);
                  prefix_dict[component.name] = configComponent.prefix;
                }
              });
              groups.push(...group);
            }
          }
        }
      }
    }

    if (model?.component?.group) {
      const composed_groups = model.component.group;

      composed_groups.forEach((group: any) => {
        const base_component_name = group.baseLink.split('.')[0];
        const base_link = group.baseLink.split('.')[1];
        let prefix = '';

        if (base_component_name in prefix_dict) {
          prefix = prefix_dict[base_component_name];
        }
        group.baseLink = addPrefixToLink(base_link, prefix);

        const end_component_name = group.endLink.split('.')[0];
        const end_link = group.endLink.split('.')[1];
        prefix = '';

        if (end_component_name in prefix_dict) {
          prefix = prefix_dict[end_component_name];
        }
        group.endLink = addPrefixToLink(end_link, prefix);
        group['prefix'] = prefix;

        groups.push(group);
      });
    }
    return groups;
  }


  // test trigger MCP generation
  async function generateMoveitConfigPackage(context: vscode.ExtensionContext) {
    console.log('generating MCP')

    const document = vscode.window.activeTextEditor?.document;
    if (document) {
      let modelStr = document.getText();
      let modelYAML = parse(modelStr);
      let name = modelYAML['component']['name'];
      let pkg_name = modelYAML['component']['gitRepo']['package'];

      var groups = await getGroups(modelYAML);
      if (groups.length === 0) {
        vscode.window.showErrorMessage('No planning groups defined. ' +
          'At least one group needs to be defined to generate a MoveIt! configuration package');
        return;
      }
      console.log(groups)

      let group_name = '';
      let base_link = '';
      let end_link = '';
      let ros2_control = '';
      let prefix = '';
      for (const group of groups)
      {
        group_name += group['name'] + ' ';
        base_link += group['baseLink'] + ' ';
        end_link +=group['endLink'] + ' ';
        if (group['ros2_control'] !== undefined) {
          ros2_control = group['ros2_control'];
        }
        if (group['prefix'] !== undefined && group['prefix'] !== '') {
          prefix = group['prefix'];
        }
      }

      //TODO: extract the root link of the chain
      let vLink = groups[0]['baseLink'];

      let urdf_path = `/app/kinematic_components_web_app/static/moveit2_ws/install/${pkg_name}/share/${pkg_name}/urdf/${name}.urdf`

      let dockerCmd = 'docker exec urdf-toolchain /bin/bash -c '
      let rosCmd = `. /app/kinematic_components_web_app/static/moveit2_ws/install/setup.bash; \
          ros2 run kinematics_model_generator mcp_generator \
          --urdf ${urdf_path} \
          --base_link ${base_link} \
          --end_link ${end_link} \
          --group_name ${group_name} \
          --virtual_child_link ${vLink} \
          --output /app/kinematic_components_web_app/static/moveit2_ws/src/${name}_moveit_config`

      let cmd = dockerCmd + '"' + rosCmd + '"';

      console.log(rosCmd);

      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);

          // TODO: not sure why is it returning as an error-- fix later
          // TODO: build the workspace once the package is generated

          // hack to replace include of generated ros2_control.xacro with specified one
          if (ros2_control !== '') {
            // prbt_moveit_config/config/prbt.urdf.xacro prbt_support urdf/prbt.ros2_control.xacro
            let pyCmd = `. /app/kinematic_components_web_app/static/moveit2_ws/install/setup.bash; \
              python3 /app/kinematic_components_web_app/static/moveit2_ws/src/urdf-model/kinematics-model-parser/kinematics_model_generator/scripts/update_mcp.py \
              /app/kinematic_components_web_app/static/moveit2_ws/src/${name}_moveit_config/config/${name}.urdf.xacro \
              ${ros2_control} \
              ${prefix}`

            cmd = dockerCmd + '"' + pyCmd + '"';
            console.log(cmd);

            exec(cmd, (error, stdout, stderr) => {
              if (error) {
                console.log(`error: ${error.message}`);
                return;
              }
              if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
              }
              console.log(`stdout: ${stdout}`);
            });
          }
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    }
  }
}

exports.activate = activate;
