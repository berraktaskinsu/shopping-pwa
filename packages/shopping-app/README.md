# Shopping App

# Project Setup (Angular & Ionic & Capacitor) (+ Tailwind CSS & Material Design)

Follow the below steps or [this](https://ionicframework.com/docs/angular/your-first-app) tutorial to create your project.

## Pre-requisites:
1. NodeJS
2. Visual Studio Code
3. Command Prompt

## Create Your Ionic-Angular Project

### Installing global dependencies:
```
npm install -g @ionic/cli native-run cordova-res
```

### Initialize the Ionic-Angular Project:
Let us start by creating our ionic project. Navigate to the target folder and run the following command to create an empty Ionic-Angular project:
```
ionic start my-first-app blank --type=angular --capacitor
```

Change into the newly created project folder by typing:
```
cd my-first-app
```

### Installing project-specific dependencies:
```
npm install @capacitor/camera @capacitor/storage @capacitor/filesystem
npm install @ionic/pwa-elements
```

Modify src/main.ts by importing `@ionic/pwa-elements` as follows:
```
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
defineCustomElements(window);
```

That's it, now you can run your project by typing the following command.
```
ionic serve
```
Open the web-browser and go to `localhost:4200` to see your project.

## Creating a Good Project Structure

```
ng generate module core
ng generate module shared
ng generate module pages
ng generate component pages
mkdir src/app/common
mkdir src/app/common/constants
mkdir src/app/common/interfaces
mkdir src/app/common/types
mkdir src/app/common/utils
mkdir src/app/common/models
mkdir src/app/core/guards
mkdir src/app/core/services
mkdir src/app/core/interceptors
mkdir src/app/shared/components
mkdir src/app/shared/modules
mkdir src/app/shared/directives
mkdir src/app/shared/pipes
mkdir src/app/shared/components/atoms
mkdir src/app/shared/components/molecules
```

Your final project structure should be as follows:
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
   |        |  |--> constants
   |        |  |--> interfaces
   |        |  |--> modules
   |        |  |--> types
   |        |  |--> utils
   |        |
   |        |--v core
   |        |  |--> guards
   |        |  |--> interceptors
   |        |  |--> services
   |        |  |-- core.module.ts
   |        | 
   |        |--v pages
   |        |  |--> home
   |        |  |-- pages-routing.module.ts
   |        |  |-- pages.component.html
   |        |  |-- pages.component.spec
   |        |  |-- pages.component.scss
   |        |  |-- pages.component.ts
   |        |  |-- pages.module.ts
   |        |
   |        |--v shared
   |           |--v components
   |           |  |--> atoms
   |           |  |--> molecules
   |           |--> directives
   |           |--> modules
   |           |--> pipes
   |
   |--v myproject.server
      |--v .vscode
         |-- settings.json
```

A detailed project structure:
```
v myproject.app
|--v .vscode
|  |-- settings.json
|  |
|--v src
   |--v app
      |--v common
      |  |--v constants
      |  |  |-- index.ts
      |  |
      |  |--v interfaces
      |  |  |-- index.ts
      |  |
      |  |--v modules
      |  |  |-- index.ts
      |  |
      |  |--v types
      |  |  |-- index.ts
      |  |
      |  |--v utils
      |  |  |-- index.ts
      |
      |--v core
      |  |--> guards
      |  |--> interceptors
      |  |--> services
      |  |-- core.module.ts
      | 
      |--v pages
      |  |--v home
      |  |  |-- home-routing.module.ts
      |  |  |-- home.module.ts
      |  |  |-- home.page.html
      |  |  |-- home.page.spec
      |  |  |-- home.page.scss
      |  |  |-- home.page.ts
      |  | 
      |  |-- pages-routing.module.ts
      |  |-- pages.component.html
      |  |-- pages.component.spec
      |  |-- pages.component.scss
      |  |-- pages.component.ts
      |  |-- pages.module.ts
      |
      |--v shared
         |--v components
         |  |--v atoms
         |  |  |-- index.ts
         |  |
         |  |--v molecules
         |  |  |-- index.ts
         |  |
         |  |-- index.ts
         |
         |--v directives
         |  |-- index.ts
         |
         |--v modules
         |  |-- index.ts
         |
         |--v pipes
            |-- index.ts
```

## Mac OS Environment Setup

In order to build and run our code on Mac OS, we will need XCode, XCode Command Line Tools, and Node.js istalled on our computer. We will also need Homebrew, which is a package manager for Mac OS, and will help us install necessary packages.

### 1) XCode & XCode Command Line Tools

You may download XCode and XCode Command Line Developer Tools from Mac App Store, if the latest XCode version supports your OS. If not, you can download the previous versions [here](https://developer.apple.com/download/all/?q=xcode). The latest supported XCode version for Mac OS 10.13 - High Sierra is XCode 10.1.

### 2) Homebrew - The missing package manager for Mac OS

If you haven't already installed Homebrew, you may do so by following [this](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-homebrew-on-macos) tutorial. You can check weather or not you have Homebrew on your Mac OS by typing the command `brew -v`. This will give you the Homebrew version currently installed, if it is installed.

**_Note_**: Do NOT install using the command `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)`. See [here](https://stackoverflow.com/questions/20381128/installing-homebrew-on-os-x) the reason why

- If you wish to update Homebrew, you may type `brew update`.

- Similarly, if you wish to update the packages maintained by Homebrew, you may do so by typing `brew upgrade package-name` or you may update all packages by typing `brew upgrade`.

### 3) Node.js

You may use either your browser or your terminal to install Node. If you wish to proceed with the former, [here](https://nodejs.org/en/download/) is a link to the official website of Node. In this tutorial, I will install Node using the Mac OS terminal.

Type the following command to your terminal: `brew install node`.

> **_A Problem You May Face if You Are Using an Unsupported Mac OS Version._**
>
> If your Mac OS version is not supported (<= 10.13 - High Sierra) by Apple/Homebrew, and if gcc is not installed already, then the above node installation command may fail while brew automatically tries to install gcc, which is a node dependency. This happens because 'gcc' in turn, depends on the 'isl' library, whose site has been down for a while. If this is the case for you, then you will get the error message "" while trying to download 'isl' via `brew install isl`. The message simply states that your Mac could not connect to the isl download page, and therefore, you need an isl mirror instead. [This] webpage is a good source for 'isl' mirrors.
>
> In order to intall the mirror, we will need the mirror url, which in my case was 'http://ftp.linux.org.tr/slackware/slackware64-current/source/l/isl/isl-0.24.tar.xz'. After obtaining the mirror source, we will need to modify the existing isl formula of homebrew, by typing `brew edit isl` on the terminal. This command will open the isl formula file on vim by default (or whatever text editor you have configured your EDITOR environment variable path to point to). Then, we simply change the existing url with the valid one, which is the mirror url we obtained previously. Then we simply save and close the file. If you use vim, to save and exit the file, you can enter `esc` and type in `:wq` (Note that 'w' is to save the changes to the file and 'q' is to exit vim, so you may drop the changes by typing `:q` if you change your mind.).
>
> Voilla! We now, have configured our 'isl' formula to point to the mirror source we found. Now, `brew install node` will no longer give errors, and neither will `brew install gcc` or `brew install isl`, if you want to proceed step-by-step. Just to be clear, 'node' depends on 'gcc' which in turn depends on 'isl'.

> **_You may get the following error when installing packages with node:_**
>
> npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules  
> npm ERR! path /usr/local/lib/node_modules  
> npm ERR! code EACCES  
> npm ERR! errno -13  
> npm ERR! syscall access  
> npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'  
> npm ERR! { [Error: EACCES: permission denied, access '/usr/local/lib/node_modules']  
> npm ERR! stack:  
> npm ERR! 'Error: EACCES: permission denied, access \'/usr/local/lib/node_modules\'',  
> npm ERR! errno: -13,  
> npm ERR! code: 'EACCES',  
> npm ERR! syscall: 'access',  
> npm ERR! path: '/usr/local/lib/node_modules' }  
> npm ERR!  
> npm ERR! The operation was rejected by your operating system.  
> npm ERR! It is likely you do not have the permissions to access this file as the current user  
> npm ERR!  
> npm ERR! If you believe this might be a permissions issue, please double-check the  
> npm ERR! permissions of the file and its containing directories, or try running  
> npm ERR! the command again as root/Administrator (though this is not recommended).
>
> If so, type the following commands on your terminal:
>
> ```lang-js
> sudo chown -R $USER ~/.npm
> sudo chown -R $USER /usr/lib/node_modules
> sudo chown -R $USER /usr/local/lib/node_modules
> ```

We will need to install cocoapods to be able to run `ionic cap sync`: CocoaPods is not installed.

Type `brew install cocoapods` to install cocoapods.

We will need to install ruby if we get the below error while installing cocoapods.

```
ERROR:  Error installing rails:
    zeitwerk requires Ruby version >= 2.4.4.
```

Install via https://gorails.com/setup/osx/10.13-high-sierra.

> When installing ruby, ...
> https://stackoverflow.com/questions/68957915/macos-10-12-brew-install-openssl-issue

## Deploying to Mobile

`ionic build`

`ionic cap add android` `ionic cap add ios`

`ionic cap copy`

`ionic cap sync`

### iOS Deployment

`ionic cap open ios`

### Android Deployment

If your Android Studio path is not 'C:\Program Files\Android\Android Studio' which is the default path used by capacitor, modify/add the environment variable CAPACITOR_ANDROID_STUDIO_PATH and assign our Android Studio path via following [these](https://support.shotgunsoftware.com/hc/en-us/articles/114094235653-Setting-global-environment-variables-on-Windows) steps. You may need to reboot your computer after adding/changing the environment variable.

`ionic cap open android`

If you get any error messages suggesting the project cannot be opened with your current Android Studio version, make sure to update Android Studio to the lastest version.

If your gradle sync fails with the error message 'android/capacitor-cordova-android-plugins/cordova.variables.gradle' as it does not exist.', it is because the 'capacitor-cordova-android-plugins' folder was not generated. You will get this error message if you clone the git repository and try to open the android project without typing the command `ionic cap sync`. This will re-generate the required folder and the gradle sync error will be fixed.

### Live Reload

`ionic cap run android -l --external` `ionic cap run ios -l --external`

# External Libraries

## Tailwind CSS

Follow the below steps, or alternatively these two ([Tutorial 1](https://www.angularjswiki.com/angular/angular-tailwind-css/#step-2-install-tailwindcss-via-npm-or-yarn) & [Tutorial 2](https://dev.to/angular/setup-tailwindcss-in-angular-the-easy-way-1i5l)) tutorials to configure Tailwind CSS to your project.

# Useful Resources

## Tutorials

Angular Crash Course: https://www.youtube.com/watch?v=3dHNOWTI7H8

Angular Tutorial: https://www.youtube.com/watch?v=0eWrpsCLMJQ&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ

## Links

- To better understand the difference between (or in better words 'coexistance of') Angular and Ionic, [this](https://forum.ionicframework.com/t/which-to-use-angular-or-ionic/196891/2) response might be helpful.
- [This](https://ionicframework.com/docs/angular/your-first-app) written tutorial is a very good guide in creating your first Angular-Ionic project, including deployment and understanding the platform specific requirements.
- For Tailwind CSS configuration follow these two ([Tutorial 1](https://www.angularjswiki.com/angular/angular-tailwind-css/#step-2-install-tailwindcss-via-npm-or-yarn) & [Tutorial 2](https://dev.to/angular/setup-tailwindcss-in-angular-the-easy-way-1i5l)) tutorials. Above, in Tailwind CSS section, information obtained from both resources is used.
