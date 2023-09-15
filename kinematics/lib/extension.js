'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const roslib = require("roslib");
const THREE = require("three");
const vscode = require("vscode");
const node_1 = require("vscode-languageclient/node");
const child_process_1 = require("child_process");
const yaml_1 = require("yaml");
// import { getModel } from './js/viewer';
function activate(context) {
    var client;
    var serverInfo = function () {
        // Connect to the language server via a io channel
        var jar = context.asAbsolutePath(path.join('resources', 'de.fraunhofer.ipa.kinematics.xtext.ide-1.0.0-SNAPSHOT-ls.jar'));
        var child = (0, child_process_1.spawn)('java', ['-Xdebug', '-Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n,quiet=y', '-jar', jar, '-log debug']);
        console.log(child.stdout.toString());
        child.stdout.on('data', function (chunk) {
            console.log(chunk.toString());
        });
        child.stderr.on('data', function (chunk) {
            console.error(chunk.toString());
        });
        return Promise.resolve(child);
    };
    var clientOptions = {
        documentSelector: ['kinematics']
    };
    // Create the language client and start the client.
    client = new node_1.LanguageClient('MYDSL1', serverInfo, clientOptions);
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
    const disposableMCPGeneration = vscode.commands.registerCommand('kinematics.generateMCP', () => __awaiter(this, void 0, void 0, function* () {
        generateMoveitConfigPackage(context);
    }));
    context.subscriptions.push(disposableMCPGeneration);
    function initKinematicsPreview(context) {
        // Create and show a new webview
        const panel = vscode.window.createWebviewPanel(
        // Webview id
        'kinematics.preview', 
        // Webview title
        'Kinematics Preview', 
        // This will open the second column for preview inside editor
        vscode.ViewColumn.Beside, {
            // Enable scripts in the webview
            enableScripts: true
        });
        panel.webview.html = getWebviewContent(context, panel);
        setActiveEditorContent(panel);
    }
    function setActiveEditorContent(panel) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const document = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document;
            if (document) {
                panel.webview.postMessage(yield loadModel(document));
            }
        });
    }
    function loadModel(document) {
        return __awaiter(this, void 0, void 0, function* () {
            var [model, robots] = yield (0, viewer_1.getModel)(document, client);
            return JSON.stringify([model, robots]);
        });
    }
    function getWSFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield vscode.workspace.findFiles('*.kin');
            return files;
        });
    }
    function createChain(model) {
        return __awaiter(this, void 0, void 0, function* () {
            var components = {};
            const ws_files = yield getWSFiles();
            for (var configComponent of model['component']) {
                for (var file of ws_files) {
                    let document = yield vscode.workspace.openTextDocument(file);
                    let text = document.getText();
                    let component = (0, yaml_1.parse)(text)['component'];
                    if (configComponent.type === component['name']) {
                        let name = configComponent.type;
                        components[name] = file;
                        if (component['joint'] !== undefined) {
                            if (model.joint !== undefined) {
                                model.joint = model.joint.concat(component['joint']);
                            }
                            else {
                                model.joint = component['joint'];
                            }
                        }
                        if (component['link'] !== undefined) {
                            if (model.link !== undefined) {
                                model.link = model.link.concat(component['link']);
                            }
                            else {
                                model.link = component['link'];
                            }
                        }
                    }
    function getWebviewContent(context, panel) {
        const threejs = vscode.Uri.file(context.extensionPath + "/js/three.js");
        const threejsUri = panel.webview.asWebviewUri(threejs);
        const ros3d = vscode.Uri.file(context.extensionPath + "/js/ros3d.js");
        const ros3dUri = panel.webview.asWebviewUri(ros3d);
        const roslib = vscode.Uri.file(context.extensionPath + "/node_modules/roslib/build/roslib.js");
        const roslibUri = panel.webview.asWebviewUri(roslib);
        const urdf = vscode.Uri.file(context.extensionPath + "/lib/urdf.js");
        const urdfUri = panel.webview.asWebviewUri(urdf);
        return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>My first three.js app</title>
          <style>
            body { margin: 0; }
          </style>
          <script src=${threejsUri}></script>
          <script src=${roslibUri}></script>
          <script src=${ros3dUri}></script>
          <script src=${urdfUri}></script>
          <script>
            window.onload = init;

            var global = this;
            var viewer = undefined;

            window.addEventListener('message', (event) => {
              let [model, robots] = JSON.parse(event.data);

              let parent = undefined;
              if (model.joints[0].parent.visual !== undefined) {
                var origin = new ROSLIB.Pose({
                  position : new ROSLIB.Vector3(0, 0, 0),
                  orientation : new ROSLIB.Quaternion(0, 0, 0, 1)
                });

                parent = addMesh(model.joints[0].parent.visual.geometry.filename, origin);
                let axes = new ROS3D.Axes({});
                parent.add(axes);
                this.viewer.addObject(parent);
              }
              for(joint of model.joints) {
                let axes = new ROS3D.Axes({});
                if (joint.child.visual !== undefined) {
                  let filename = joint.child.visual.geometry.filename;
                  mesh = addMesh(filename, joint.origin);
                  mesh.add(axes);
                  parent.add(mesh);
                  parent = mesh;
                } else {
                  updatePose(axes, joint.origin);
                  parent.add(axes);
                  parent = axes;    // TODO: this is mostly not right
                }
              }
            });

            function addMesh(filename, origin) {
              console.log(filename);
              const colorMaterial = ROS3D.makeColorMaterial(255, 0, 0, 1);
              var mesh = new ROS3D.MeshResource({
                path : 'https://raw.githubusercontent.com/ros-industrial/universal_robot/kinetic-devel',
                resource : filename,   // needs to be checked what type of geometry this is
                material : colorMaterial
              });
              updatePose(mesh, origin);
              return mesh;
            }
            for (var connection of model['connection']) {
                let baseName = connection.baseAttachment.split('.')[0];
                let baseAttachmentName = connection.baseAttachment.split('.')[1];
                let document = yield vscode.workspace.openTextDocument(components[baseName]);
                let text = document.getText();
                let baseComponent = (0, yaml_1.parse)(text)['component'];
                let baseAttachment = null;
                for (var attachment of baseComponent['baseAttachment']) {
                    if (baseAttachmentName === attachment.name) {
                        baseAttachment = attachment;
                    }
                }
                let flangeName = connection.flangeAttachment.split('.')[0];
                let flangeAttachmentName = connection.flangeAttachment.split('.')[1];
                document = yield vscode.workspace.openTextDocument(components[flangeName]);
                text = document.getText();
                let flangeComponent = (0, yaml_1.parse)(text)['component'];
                let flangeAttachment = null;
                for (var attachment of flangeComponent['flangeAttachment']) {
                    if (flangeAttachmentName === attachment.name) {
                        flangeAttachment = attachment;
                    }
                }
                let joint = { name: connection['name'],
                    type: 'fixed',
                    parent: { link: '' },
                    child: { link: '' },
                    origin: { xyz: '', rpy: '' } };
                joint.parent.link = flangeAttachment.parent;
                joint.child.link = baseAttachment.parent;
                joint.origin = doTransform(flangeAttachment.origin, baseAttachment.origin);
                model.joint.push(joint);
            }
        });
    }
    function rpyToQuaternion(roll, pitch, yaw) {
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
        return quat;
    }
    function getThreePose(origin) {
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
    function doTransform(origin1, origin2) {
        let pose1 = getThreePose(origin1);
        let pose2 = getThreePose(origin2);
        pose2.orientation.invert();
        pose1.orientation.multiply(pose2.orientation);
        pose1.position.subtract(pose2.position);
        let euler = new THREE.Euler();
        let quat = new THREE.Quaternion(pose1.orientation.x, pose1.orientation.y, pose1.orientation.z, pose1.orientation.w);
        euler.setFromQuaternion(quat);
        let origin = { xyz: pose1.position.x + ' ' +
                pose1.position.y + ' ' +
                pose1.position.z,
            rpy: euler.x + ' ' +
                euler.y + ' ' +
                euler.z };
        return origin;
    }
    // gets groups from current component as well as included components
    // if included components have prefixes assigned, adds them to respective link names
    function getGroups(model) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const groups = [];
            const prefix_dict = {};
            // Helper function to add a prefix to a link
            function addPrefixToLink(link, prefix) {
                return prefix + link;
            }
            if ((_a = model === null || model === void 0 ? void 0 : model.component) === null || _a === void 0 ? void 0 : _a.component) {
                const ws_files = yield getWSFiles();
                for (const configComponent of model.component.component) {
                    for (const file of ws_files) {
                        const document = yield vscode.workspace.openTextDocument(file);
                        const text = document.getText();
                        const component = (0, yaml_1.parse)(text).component;
                        if (configComponent.type === component.name) {
                            const group = component.group;
                            if (group) {
                                group.forEach((value, i) => {
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
            if ((_b = model === null || model === void 0 ? void 0 : model.component) === null || _b === void 0 ? void 0 : _b.group) {
                const composed_groups = model.component.group;
                composed_groups.forEach((group) => {
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
                    groups.push(group);
                });

            function updatePose(obj, pose) {
              obj.position.set( pose.position.x, pose.position.y, pose.position.z );
              obj.quaternion.set(pose.orientation.x, pose.orientation.y,
                  pose.orientation.z, pose.orientation.w);
              obj.updateMatrixWorld(true);
            };

            function init() {
              this.viewer = new ROS3D.Viewer({
                divID : 'urdf',
                width : 800,
                height : 600,
                antialias : true
              });

              // Add a grid.
              this.viewer.addObject(new ROS3D.Grid({color: '#303030'}));
            }
            return groups;
        });
          </script>
        </head>
        <body>
          <h2>URDF Renderer</h2>
        </body>
        <div id="urdf"></div>
      </html>
      `;
    }
    // test trigger MCP generation
    function generateMoveitConfigPackage(context) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            console.log('generating MCP');
            client.onReady().then(() => {
                client.sendRequest("kinematics/accept", { "message": "foo" }).then(data => console.log(data)).catch(function () {
                    console.log("Promise Rejected");
                });
            });
            const document = (_a = vscode.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document;
            if (document) {
                let modelStr = document.getText();
                let modelYAML = (0, yaml_1.parse)(modelStr);
                let name = modelYAML['component']['name'];
                let pkg_name = modelYAML['component']['gitRepo']['package'];
                var groups = yield getGroups(modelYAML);
                if (groups.length === 0) {
                    vscode.window.showErrorMessage('No planning groups defined. ' +
                        'At least one group needs to be defined to generate a MoveIt! configuration package');
                    return;
                }
                console.log(groups);
                let group_name = '';
                let base_link = '';
                let end_link = '';
                let ros2_control = '';
                for (const group of groups) {
                    group_name += group['name'] + ' ';
                    base_link += group['baseLink'] + ' ';
                    end_link += group['endLink'] + ' ';
                    if (group['ros2_control'] !== undefined) {
                        ros2_control = group['ros2_control'];
                    }
                }
                // console.log(group_name);
                // console.log(base_link);
                // console.log(end_link);
                //TODO: extract the root link of the chain
                let vLink = groups[0]['baseLink'];
                let urdf_path = `/app/kinematic_components_web_app/static/moveit2_ws/install/${pkg_name}/share/${pkg_name}/urdf/${name}.urdf`;
                let dockerCmd = 'docker exec urdf-toolchain /bin/bash -c ';
                let rosCmd = `. /app/kinematic_components_web_app/static/moveit2_ws/install/setup.bash; \
          ros2 run kinematics_model_generator mcp_generator \
          --urdf ${urdf_path} \
          --base_link ${base_link} \
          --end_link ${end_link} \
          --group_name ${group_name} \
          --virtual_child_link ${vLink} \
          --output /app/kinematic_components_web_app/static/moveit2_ws/src/${name}_moveit_config`;
                let cmd = dockerCmd + '"' + rosCmd + '"';
                console.log(rosCmd);
                (0, child_process_1.exec)(cmd, (error, stdout, stderr) => {
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
                            let pyCmd = `python3 /app/kinematic_components_web_app/static/moveit2_ws/src/urdf-model/kinematics-model-parser/kinematics_model_generator/scripts/update_mcp.py \
              /app/kinematic_components_web_app/static/moveit2_ws/src/${name}_moveit_config/config/${name}.urdf.xacro \
              ${ros2_control}`;
                            cmd = dockerCmd + '"' + pyCmd + '"';
                            console.log(cmd);
                            (0, child_process_1.exec)(cmd, (error, stdout, stderr) => {
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
        });
    }
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map