const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(common, {
    output: {
      publicPath: "https://localhost:4321/dist/"
    },
    mode: "development",
    devtool: "source-map",
    plugins: [
      new ESLintPlugin({
        files: './src/**/*.{ts,tsx}',
        lintDirtyModulesOnly: true
      })
    ]
});
