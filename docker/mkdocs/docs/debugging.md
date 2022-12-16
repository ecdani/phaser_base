# About debugging

There are debugging for server-side and for client-side code, which work independently.

# How to configure debugging

## For VSCode

To be able to debugging add the following values inside of your **Workspace Settings (JSON)**:
!!! warning

    Don't copy and paste literally! Adapt it.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Server debug",
      "remoteRoot": "${workspaceFolder}",
      "localRoot": "${workspaceFolder}"
    },
    {
      "name": "Client debug",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    }
  ]
}
```

And for client-side debugging you need to have installed [Google Chrome browser](https://www.google.com/chrome/).

### Client-side debugging for Firefox

Unfortunately there are a bug which prevents from using Firefox for debugging:
"[Unable to set breakpoints for nextjs app](https://github.com/firefox-devtools/vscode-firefox-debug/issues/208)"
