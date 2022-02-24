'use strict';

import * as path from 'path';
import * as vscode from 'vscode';
import { LanguageClient } from 'vscode-languageclient/node';
import { spawn } from 'child_process';
import * as antlr4ts from 'antlr4ts';
import { DebugInternalKinematicsLexer } from './parser/DebugInternalKinematicsLexer';
import { DebugInternalKinematicsParser } from './parser/DebugInternalKinematicsParser';


function activate(context: vscode.ExtensionContext) {
    var serverInfo = function () {
        // Connect to the language server via a io channel
        var jar = context.asAbsolutePath(path.join('resources', 'de.fraunhofer.ipa.kinematics.xtext.ide-1.0.0-SNAPSHOT-ls.jar'));
        var child = spawn('java', ['-Xdebug', '-Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n,quiet=y', '-jar', jar, '-log debug']);
        console.log(child.stdout.toString());
        child.stdout.on('data', function (chunk: any) {
            console.log(chunk.toString());
        });
        child.stderr.on('data', function (chunk: any) {
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
      getModel();
    }
}

function getWebviewContent(context: vscode.ExtensionContext, panel: vscode.WebviewPanel) {
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
  `
}

async function getModel() {
  const document = vscode.window.activeTextEditor?.document;
  if (document) {
    console.log(document.getText())

    // Create the lexer and parser
    let inputStream = antlr4ts.CharStreams.fromString(document.getText());
    console.log(inputStream)
    let lexer = new DebugInternalKinematicsLexer(inputStream);
    let tokenStream = new antlr4ts.CommonTokenStream(lexer);
    let parser = new DebugInternalKinematicsParser(tokenStream);
    let parse_tree = parser.ruleRobot()
    console.log(parse_tree.getChild)
  }
}

exports.activate = activate;
