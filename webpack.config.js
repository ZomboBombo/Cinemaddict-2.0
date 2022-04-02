const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve('public'),
  },

  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve('public'),
    },
    compress: true,
    port: 9000,
  },
};
