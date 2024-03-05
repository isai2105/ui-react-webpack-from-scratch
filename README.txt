Setup steps:

- Added Webpack dependencies to the repo:
  yarn add webpack webpack-cli
- Created the file: webpack.config.js and its contents
- Added babel dependencies to the repo:
  yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader

If you ever wonder why when you write a JSX file you can write it as .js or .jsx ... it is because of the babel-loader
configured within Webpack.
