const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
      publicPath: "https://localhost:4321/dist/"
    },
    mode: "development",
    devtool: "source-map"
});
