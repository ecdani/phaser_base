# About debugging

There are debugging for server-side and for client-side code, which work independently.

# How to configure debugging

## For VSCode

You need to copy `launch.json.default` located in `.vscode` folder as `launch.json` in same folder.

And for client-side debugging you need to have installed [Google Chrome browser](https://www.google.com/chrome/).

### Client-side debugging for Firefox

Unfortunately there are a bug which prevents from using Firefox for debugging:
"[Unable to set breakpoints for nextjs app](https://github.com/firefox-devtools/vscode-firefox-debug/issues/208)"