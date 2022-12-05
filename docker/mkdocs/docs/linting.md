# How to configure linting

## For VSCode

To automatically format your document with the **eslint/prettier** configuration add the following values inside of your **User Settings (JSON)**.

```json
"eslint.validate": ["javascript"],
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"editor.formatOnSave": true,
```

And you have to install [VSCode ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier Formatter for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Not all of the linting error can be fixing automatically and need to fix manual.

## Where is the official documentation of all of this?

- Eslint: <https://eslint.org/docs/latest/user-guide/getting-started>
- Prettier: <https://prettier.io/docs/en/index.html>
