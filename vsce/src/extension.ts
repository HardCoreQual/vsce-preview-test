import * as vscode from 'vscode';
import * as path from "path";
import * as fs from "fs";


function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`;
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('catCoding.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'catCoding', // Identifies the type of the webview. Used internally
        'Cat Coding', // Title of the panel displayed to the user
        vscode.ViewColumn.One, // Editor column to show the new webview panel in.
        {
        } // Webview options. More on these later.
      );


      const htmlPathOnDisk = vscode.Uri.file(path.join('/home/hardcorequal/Desktop/examples/next/out/index.html'));
      var html = fs.readFileSync(htmlPathOnDisk.path).toString();

      panel.webview.html = html;
    })
  );
}

export function deactivate() {}
