/**
 * @param {vscode.ExtensionContext} context
 */
const vscode = require("vscode");

function activate(context) {
  console.log('Congratulations, your extension "helloworld" is now active!');

  let disposable = vscode.commands.registerCommand(
    "helloworld.helloWorld",
    function () {
      vscode.window.showInformationMessage("Hello VSCode");
    }
  );

  context.subscriptions.push(disposable);
}
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
