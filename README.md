# promise-script-loader #
## Simple promise-based script loader. ##

Promise-script-loader is a tool designed to allow for easy asynchronous script-loading, for cases where one must ensure the execution order of scripts without allowing them to be blocking.

```
  import promiseScriptLoader from 'promise-script-loader';
  promiseScriptLoader('/my-script.js')
    .then(() => promiseScriptLoader('https://example.org/dependent-script.js'))
    .then(() => console.log('success!'))
    .catch(console.error);
```



## Installation ##

### npm ###
`$ npm install --save promise-script-loader`
