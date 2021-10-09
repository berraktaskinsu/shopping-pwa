# Server-Side Programming - Backend API + Database

Server-Side Programming: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction

Mongoose: https://github.com/Automattic/mongoose

MEAN Stack Deployment on Ubuntu Server on AWS EC2: https://jasonwatmore.com/post/2019/12/02/angular-nodejs-on-aws-how-to-deploy-a-mean-stack-app-to-amazon-ec2

AWS EC2 Linux: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/putty.html?icmpid=docs_ec2_console

## Typescript

Follow [this](https://www.pullrequest.com/blog/intro-to-using-typescript-in-a-nodejs-express-project/) tutorial or the steps below to configure typescript in your Express-Node project.

**STEP 1**: We will install dev dependencies to use typescript by typing the command:

```
npm install typescript ts-node @types/node @types/express --save-dev
```

**STEP 2**: Next, let us type the following command to create the `tsconfig.js` file.

```
npx tsc --init
```

You may change the typescript setup via modifying this file. The mentioned tutorial is a helpful guide for doing so.

**_USAGE_**: TypeScript is compiled to JavaScript. That is why we only installed the required dependencies for development-use only. In order to compile TypeScript code, we need to run the following command before everytime we build the project.

```
npx tsc --project ./
```

**_OPTIONAL_**: To avoid typing this command everytime we build the project, we may simply create and add a build script as follows:

```
{
  ...
  "scripts": {
    ...
    "build": "npx tsc --project ./", // ADD THIS LINE
    ...
  },
  ...
}
```

Now you may run the following command instead, before you build your project.

```
npm build
```

## ESLint

Follow [this](https://www.section.io/engineering-education/node-eslint/) tutorial or the steps below to configure ESLint in your Express-Node project.

**STEP 1**: We will install eslint as a dev-dependency by typing the command:

```
npm i --save-dev eslint
```

**STEP 2**: Next, we will run eslint to initialize the `eslintrc.json` file. This will guide us to configure ur eslint settings. It will also install some preffered dependencies.

```
npx eslint --init
```