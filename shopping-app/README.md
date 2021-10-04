# Shopping App

## Project Setup (Angular & Ionic & Capacitor) (+ Tailwind CSS & Material Design)

Follow the below steps or [this](https://ionicframework.com/docs/angular/your-first-app) tutorial to create your project.

### Deploying to Mobile

`ionic build`

`ionic cap add android` `ionic cap add ios`

`ionic cap copy`

`ionic cap sync`
 
#### iOS Deployment

`ionic cap open ios`

#### Android Deployment

If your Android Studio path is not 'C:\Program Files\Android\Android Studio' which is the default path used by capacitor, modify/add the environment variable CAPACITOR_ANDROID_STUDIO_PATH and assign our Android Studio path via following [these](https://support.shotgunsoftware.com/hc/en-us/articles/114094235653-Setting-global-environment-variables-on-Windows) steps. You may need to reboot your computer after adding/changing the environment variable.

`ionic cap open android`

If you get any error messages suggesting the project cannot be opened with your current Android Studio version, make sure to update Android Studio to the lastest version.

#### Live Reload

`ionic cap run android -l --external` `ionic cap run ios -l --external`

## External Libraries

### Tailwind CSS

Follow the below steps, or alternatively these two ([Tutorial 1](https://www.angularjswiki.com/angular/angular-tailwind-css/#step-2-install-tailwindcss-via-npm-or-yarn) & [Tutorial 2](https://dev.to/angular/setup-tailwindcss-in-angular-the-easy-way-1i5l)) tutorials to configure Tailwind CSS to your project.

## Useful Resources

* To better understand the difference between (or in better words 'coexistance of') Angular and Ionic, [this](https://forum.ionicframework.com/t/which-to-use-angular-or-ionic/196891/2) response might be helpful.
* [This](https://ionicframework.com/docs/angular/your-first-app) written tutorial is a very good guide in creating your first Angular-Ionic project, including deployment and understanding the platform specific requirements.
* For Tailwind CSS configuration follow these two ([Tutorial 1](https://www.angularjswiki.com/angular/angular-tailwind-css/#step-2-install-tailwindcss-via-npm-or-yarn) & [Tutorial 2](https://dev.to/angular/setup-tailwindcss-in-angular-the-easy-way-1i5l)) tutorials. Above, in Tailwind CSS section, information obtained from both resources is used.




