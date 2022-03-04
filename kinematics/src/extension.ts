'use strict';

import * as path from 'path';
import * as vscode from 'vscode';
import { LanguageClient } from 'vscode-languageclient/node';
import { spawn } from 'child_process';


function activate(context: vscode.ExtensionContext) {
    var serverInfo = function () {
        // Connect to the language server via a io channel
        var jar = context.asAbsolutePath(path.join('resources', 'de.fraunhofer.ipa.kinematics.xtext.ide-1.0.0-SNAPSHOT-ls.jar'));
        var child = spawn('java', ['-Xdebug', '-Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n,quiet=y', '-jar', jar, '-log debug']);
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
    var disposable = new LanguageClient('MYDSL1', serverInfo, clientOptions).start();
    // Push the disposable to the context's subscriptions so that the
    // client can be deactivated on extension deactivation
    context.subscriptions.push(disposable);

    // related to URDF preview
    const disposableSidePreview = vscode.commands.registerCommand('kinematics.openPreview', () => {
        initKinematicsPreview(context);
    });

    context.subscriptions.push(disposableSidePreview);

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
      panel.webview.html = getWebviewContent(context, panel);
      setActiveEditorContent(panel);
    }

    function setActiveEditorContent(panel: vscode.WebviewPanel) {
      const document = vscode.window.activeTextEditor?.document;
      if (document) {
        panel.webview.postMessage(loadModel(document));
      }
    }

    async function loadModel(document: vscode.TextDocument) {
      return {message: 'loadModel'};
    }

    function getWebviewContent(context: vscode.ExtensionContext, panel: vscode.WebviewPanel) {
      const threejs =  vscode.Uri.file(context.extensionPath+"/js/three.js");
      const threejsUri = panel.webview.asWebviewUri(threejs);
      const ros3d =  vscode.Uri.file(context.extensionPath+"/src/ros3djs/build/ros3d.js");
      const ros3dUri = panel.webview.asWebviewUri(ros3d);
      const roslib =  vscode.Uri.file(context.extensionPath+"/node_modules/roslib/build/roslib.js");
      const roslibUri = panel.webview.asWebviewUri(roslib);

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
          <script>
            window.onload = init;

            var global = this;
            var viewer = undefined;

            function init() {
              this.viewer = new ROS3D.Viewer({
                divID : 'urdf',
                width : 800,
                height : 600,
                antialias : true
              });

              // Add a grid.
              this.viewer.addObject(new ROS3D.Grid());
            }
          </script>
        </head>
        <body>
          <h2>URDF Renderer</h2>
        </body>
        <div id="urdf"></div>
      </html>
      `
    }
}

exports.activate = activate;
