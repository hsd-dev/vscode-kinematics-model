'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var vscode = require("vscode");
var node_1 = require("vscode-languageclient/node");
var child_process_1 = require("child_process");
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
    var disposableSidePreview = vscode.commands.registerCommand('kinematics.openPreview', function () {
        initKinematicsPreview(context);
    });
    context.subscriptions.push(disposableSidePreview);
    function initKinematicsPreview(context) {
        // Create and show a new webview
        var panel = vscode.window.createWebviewPanel(
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
    return "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset=\"utf-8\">\n      <title>My first three.js app</title>\n      <style>\n        body { margin: 0; }\n      </style>\n    </head>\n    <body>\n      <p>Hi</p>\n    </body>\n  </html>\n  ";
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map