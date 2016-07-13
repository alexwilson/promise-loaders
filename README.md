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


## Polyfilling ##
This depends on Promises, which are not supported by older browsers.  To get around this, I recommend using [Polyfill.io](https://polyfill.io/v2/docs/features/#Promise) which will target only the browsers that need polyfilling.
