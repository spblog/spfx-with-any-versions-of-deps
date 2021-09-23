const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require("webpack");

module.exports = merge(common, {
  output: {
    publicPath: "https://localhost:4321/dist/",
    devtoolModuleFilenameTemplate: 'webpack:///../[resource-path]',
    devtoolFallbackModuleFilenameTemplate: 'webpack:///../[resource-path]?[hash]'
  },
  mode: "development",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'DEBUG': JSON.stringify(true)
    })
  ]
});
