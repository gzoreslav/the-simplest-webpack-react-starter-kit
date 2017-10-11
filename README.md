# The simplest webpack starter kit for React

* ES6, SASS
* build with official recommendations from [webpack](https://webpack.js.org) and [babel](http://babeljs.io/)
* no flux included - use one that you prefer
* no build-in-js styles and other resources, separate files used

and also...

* clear package.json - just react libs in dependencies and no unused libs in devDependencies
* no mess with npm scripts - just `npm start` for development and `npm run build` for building production content
* script just copy additional resources from static folder - no pain with adding fonts, images, etc.
* default HMR in development mode for js and styles as well
* no production node server included - use one that you prefer
* webpack builder does not use *NODE_ENV* variables - do not worry about this
* no test included - you may add them later

## How to use?

```shell
> git clone https://github.com/gzoreslav/the-simplest-webpack-react-starter-kit.git
> cd the-simplest-webpack-react-starter-kit
> npm install
```


### Run in development mode

```shell
> npm start
```

_It compiles the code in development mode (source-map files, HMR) and opens browser tab.
You do not need to re-run start script when you make a changes - code will be re-compiled automatically._

### Build for production</h3>

```shell
> npm run build
```

_It compiles the code in production mode (no source-map files, minify and uglify js files) and put all
files in **dist** folder. Just copy the folder content to the server._

## License

This software is distributed under an MIT licence.

Copyright 2017 © Zoreslav Goral