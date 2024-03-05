This project is about manually setting Webpack + Babel in a very basic React project

Setup steps:

- Added Webpack dependencies to the repo:
  yarn add webpack webpack-cli
- Created the file: webpack.config.js and its contents
- Added babel dependencies to the repo:
  yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader

If you ever wonder why when you write a JSX file you can write it as .js or .jsx ... it is because of the babel-loader
configured within Webpack.

We needed to add two more loaders:

yarn add style-loader css-loader;


yarn add html-loader html-webpack-plugin;


After running "yarn build", we can go to the newly generated "dist" folder and open the index.html file.
Check it is working on the browser.

Note: We could include other loaders such as "scss" loader ("sass" loader) and work with such files.

