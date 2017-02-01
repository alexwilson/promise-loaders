# promise-image-loader #
## Simple promise-based image loader. ##

Promise-image-loader is a tool designed to allow for easy image-loading, for cases where one must wait for an image to load.

```javascript
  import promiseImageLoader from 'promise-image-loader';
  promiseImageLoader('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
    .then(() => console.log('successfully preloaded!'))
    .catch(console.error)
```

or

```html
<!DOCTYPE html>
<html lang="en">
  <head><meta charset="utf-8"></head>
  <body>
    <script type="text/javascript">
      // ... bundled JS, or <script type="module"> if supported
      promiseImageLoader(document.querySelector('img'))
        .then(() => alert('image loaded!'))
        .catch(console.error)
    </script>
    <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png">
  </body>
</html>
```



## Installation ##

### npm ###
`$ npm install --save promise-image-loader`


## Polyfilling ##
This depends on Promises, which are not supported by older browsers.  To get around this, I recommend using [Polyfill.io](https://polyfill.io/v2/docs/features/#Promise) which will target only the browsers that need polyfilling.
