# shopping-pwa

Create Multi-Root Mono-Repo in VSCode: https://medium.com/rewrite-tech/visual-studio-code-tips-for-monorepo-development-with-multi-root-workspaces-and-extension-6b69420ecd12


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
