# shopping-pwa

Create Multi-Root Mono-Repo in VSCode: https://medium.com/rewrite-tech/visual-studio-code-tips-for-monorepo-development-with-multi-root-workspaces-and-extension-6b69420ecd12

## Authentication

https://www.sitepoint.com/angular-2-authentication-protecting-private-content/

https://www.sitepoint.com/user-authentication-mean-stack/

## _(Optional)_ Create Multi-Root Mono-repo VSCode Workspace

Create your main project directory `my-project` and open the directory on VSCode.

Then, create the folder `.vscode` in the root of your project. Now, save your workspace as `.vscode/myproject.code-workspace`.

Create the folder `packages` at the root of your project. We will store both our server-side code and client-side code in this directory, so create the folders `packages/myproject-app` and `myproject-server`.

We will then create the two other `.vscode` folders `packages/myproject.app/.vscode` and `packages/myproject.server/.vscode` and add a `settings.json` file in each. Later on, we will use these files to define project-specific settings.

Now copy the following code into `myproject.code-workspace` file.

*_myproject.code-workspace*_:
```
{
  "folders": [
    {
      "name": "ROOT",
      "path": "../"
    },
    {
      "name": "packages/server",
      "path": "../packages/server"
    },
    {
      "name": "packages/myproject.app",
      "path": "../packages/myproject.app"
    },
    {
      "name": "packages/myproject.server",
      "path": "../packages/myproject.server"
    }
  ],
  "settings": {
    "files.exclude": {
      "packages": true,
      "packages/": true
    },
    "editor.formatOnSave": true,
    "git.autofetch": true,
    "[json]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

We also need Angular-specific settings for our client-side project so let us copy and paste the following code into `packages/myproject.app/.vscode/settings.json` file.

*_myproject.app/.vscode/settings.json*_:
```
{
  "css.validate": false,
  "html.format.endWithNewline": true,
  "html.format.indentInnerHtml": true,
  "html.format.wrapAttributes": "force-expand-multiline",
  "less.validate": false,
  "scss.validate": false,
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
}
```

We will also create the three files `.prettierrc.js`, `packages/myproject.app/.prettierrc.js` and `packages/myproject.server/.prettierrc.js`. Copy and paste the following code into the root `.prettierrc.js` file.

*_prettierrc.js_*:
```
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'avoid',
  jsxBracketSameLine: true
};
```

Then similarly, copy and paste the following code into `packages/myproject.app/.prettierrc.js` as we also want Angular-specific configuration:

*_myproject.app/prettierrc.js_*:
```
module.exports = {
    overrides: [
    {
      files: '*.component.html',
      options: {
        parser: 'angular'
      }
    },
    {
      files: '*.html',
      options: {
        parser: 'html'
      }
    }
  ]
};
```

Notice how we left out the portion included in the root configuration. Since the server and app configurations inherit the workspace configurations from the root, we do not need them.

We will leave `packages/myproject.server/prettierrc.js` empty for now, but you may add server-side-specific prettier configuration if you wish.

Your initial project stucture should look like this:
```
v MYPROJECT
|--v .vscode
|  |-- myproject.code-workspace
|
|--v packages
   |--v myproject.app
   |  |--v .vscode
   |     |-- settings.json
   |  
   |--v myproject.server
      |--v .vscode
         |-- settings.json
```

Let us publish our new project to github. This also initializes our git repository.

Your final project stucture should look like this:

```
v MYPROJECT
|--> .git (hidden)
|
|--v .vscode
|  |--> myproject.code-workspace
|
|--v packages
   |--v myproject.app
   |  |--v .vscode
   |     |--> settings.json
   |  
   |--v myproject.server
      |--v .vscode
         |--> settings.json
```




```
v MYPROJECT
|--> .git (hidden)
|
|--v .vscode
|  |-- myproject.code-workspace
|
|--v packages
   |--v myproject.app
   |  |--v .vscode
   |  |  |-- settings.json
   |  |
   |  |--v src
   |     |--v app
   |        |--v common
   |        |  |--v constants
   |        |  |  |-- index.ts
   |        |  |
   |        |  |--v interfaces
   |        |  |  |-- index.ts
   |        |  |
   |        |  |--v modules
   |        |  |  |-- index.ts
   |        |  |
   |        |  |--v types
   |        |  |  |-- index.ts
   |        |  |
   |        |  |--v utils
   |        |  |  |-- index.ts
   |        |
   |        |--v core
   |        |  |--> guards
   |        |  |--> interceptors
   |        |  |--> services
   |        |  |-- core.module.ts
   |        | 
   |        |--v pages
   |        |  |--v home
   |        |  |  |-- home-routing.module.ts
   |        |  |  |-- home.module.ts
   |        |  |  |-- home.page.html
   |        |  |  |-- home.page.spec
   |        |  |  |-- home.page.scss
   |        |  |  |-- home.page.ts
   |        |  | 
   |        |  |-- pages-routing.module.ts
   |        |  |-- pages.component.html
   |        |  |-- pages.component.spec
   |        |  |-- pages.component.scss
   |        |  |-- pages.component.ts
   |        |  |-- pages.module.ts
   |        |
   |        |--v shared
   |           |--v components
   |           |  |--v atoms
   |           |  |  |-- index.ts
   |           |  |
   |           |  |--v molecules
   |           |  |  |-- index.ts
   |           |  |
   |           |  |-- index.ts
   |           |
   |           |--v directives
   |           |  |-- index.ts
   |           |
   |           |--v modules
   |           |  |-- index.ts
   |           |
   |           |--v pipes
   |              |-- index.ts
   |
   |--v myproject.server
      |--v .vscode
         |-- settings.json
```
