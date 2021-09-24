const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const SetPublicPathPlugin = require("@rushstack/set-webpack-public-path-plugin").SetPublicPathPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new ESLintPlugin({
            files: './src/**/*.{ts,tsx}'
        }),
        new SetPublicPathPlugin({
            scriptName: {
                name: '[name]_?[a-zA-Z0-9-_]*\.js',
                isTokenized: true
            }
        })]
});