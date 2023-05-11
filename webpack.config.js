const path = require('path');
const webpack = require('webpack');

function createConfig (target) {
  let name = 'index.js';

  if (target !== 'commonjs2') {
    name = 'v-animate-css.js';
  }

  let output = {
    library: 'VAnimateCss',
    libraryTarget: target,
    path: path.resolve(__dirname, 'dist'),
    filename: name,
  };

  if (typeof target === 'undefined') {
    name = 'vue-animate-css.js';
    output = {
      path: path.resolve(__dirname, 'dist'),
      filename: name,
    };
  }

  return {
    name: target,
    entry: './src',
    output,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
        },
      ],
    },
  };
}

module.exports = [
  createConfig('var'),
  createConfig('commonjs2'),
];
