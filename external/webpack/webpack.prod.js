const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const SetPublicPathPlugin = require("@rushstack/set-webpack-public-path-plugin").SetPublicPathPlugin;

module.exports = merge(common, {
    mode: 'production',
    plugins: [
    new SetPublicPathPlugin({
        scriptName: {
            name: '[name]_?[a-zA-Z0-9-_]*\.js',
            isTokenized: true
        }
    })]
});