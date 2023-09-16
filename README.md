# KW-App-Repo-Example-Public
An example public repo for a Kitchen Windows App

## Publishing App
Files that are required get copied to ./dist as part of the workflow

## Consuming App
```
npm i https://github.com/Kitchen-JS/KW-App-Repo-Example-Public
```
Contents of ./dist gets copied to /content/ when consumed

## package.json
```
"name": "kwapprepoexamplepublic",
"version": "1.0.0",
"description": "An example public repo for a Kitchen Windows App",
"kitchen-windows": {
    "type": "app",
    "app": {
      "classFile": "kwapprepoexamplepublic.js"
    },
    "payload": {
      "css": ["dist/css/kwapprepoexamplepublic.css"],
      "js": ["dist/js/kwapprepoexamplepublic.js"]
    }
},
"repository": "https://github.com/Kitchen-JS/KW-App-Repo-Example-Public",
"keywords": [
    "kitchenjs",
    "kitchen-windows",
    "app",
    "example"
  ],
"scripts": {
    "postinstall": "node ./../../kitchenwindowsapps.js"
  },
```