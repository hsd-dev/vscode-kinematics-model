'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const vscode = require("vscode");
const node_1 = require("vscode-languageclient/node");
const child_process_1 = require("child_process");
function activate(context) {
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
    var disposable = new node_1.LanguageClient('MYDSL1', serverInfo, clientOptions).start();
    // Push the disposable to the context's subscriptions so that the
    // client can be deactivated on extension deactivation
    context.subscriptions.push(disposable);
    // related to URDF preview
    const disposableSidePreview = vscode.commands.registerCommand('kinematics.openPreview', () => {
        initKinematicsPreview(context);
    });
    context.subscriptions.push(disposableSidePreview);
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
    }
}
function getWebviewContent(context, panel) {
    return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>My first three.js app</title>
      <style>
        body { margin: 0; }
      </style>
    </head>
    <body>
      <p>Hi</p>
    </body>
  </html>
  `;
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map