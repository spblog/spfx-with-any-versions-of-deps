const path = require('path');
const merge = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const SetPublicPathPlugin = require("@rushstack/set-webpack-public-path-plugin").SetPublicPathPlugin;

module.exports = merge({
    target: "web",
    entry: {
        'hello-world-web-part': path.join(__dirname, '../src/webparts/helloWorld/HelloWorldWebPart.ts'),
        'my-new-web-part-web-part': path.join(__dirname, '../src/webparts/myNewWebPart/MyNewWebPartWebPart.ts')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        libraryTarget: "umd",
        library: "[name]"
    },
    performance: {
        hints: false
    },
    stats: {
        errors: true,
        colors: true,
        chunks: false,
        modules: false,
        assets: false
    },
    externals: [
        /^@microsoft\//,
        'HelloWorldWebPartStrings',
        'MyNewWebPartWebPartStrings',
        'ControlStrings'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|woff|eot|ttf|svg|gif|dds)$/,
                use: [{
                    loader: "@microsoft/loader-cased-file",
                    options: {
                        name: "[name:lower]_[hash].[ext]"
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "@microsoft/loader-load-themed-styles",
                        options: {
                            async: true
                        }
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: function (fileName) {
                    return fileName.endsWith(".module.scss");   // scss modules support
                },
                use: [
                    {
                        loader: "@microsoft/loader-load-themed-styles",
                        options: {
                            async: true
                        }
                    },
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }, // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: function (fileName) {
                    return !fileName.endsWith(".module.scss") && fileName.endsWith(".scss");  // just regular .scss
                },
                use: [
                    {
                        loader: "@microsoft/loader-load-themed-styles",
                        options: {
                            async: true
                        }
                    },
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [new ForkTsCheckerWebpackPlugin({
        tslint: true
    }),
    new SetPublicPathPlugin({
        scriptName: {
            name: '[name]_?[a-zA-Z0-9-_]*\.js',
            isTokenized: true
        }
    })]
});
