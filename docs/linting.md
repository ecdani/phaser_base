# How to configure linting

## For VSCode

To automatically format your document with the **eslint/prettier** configuration add the following values inside of your **User Settings (JSON)**.

```json
"eslint.validate": ["javascript"],
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
```

Not all of the linting error can be fixing automatically and need to fix manual.
