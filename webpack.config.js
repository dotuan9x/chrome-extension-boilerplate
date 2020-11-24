const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    mode: 'development',
    entry: ['@babel/polyfill', path.join(__dirname, 'content_scripts.ts')],
    output: {
        filename: 'js/content_scripts.js',
        path: path.join(__dirname, '/build'),
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.tsx', '.ts', '.scss'],
        mainFields: ['module', 'browser', 'main'],
        alias: {

        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },  // to inject the result into the DOM as a style block
                    {
                        loader: 'css-loader', options: {modules: {localIdentName: 'powerup-[local]-[hash:base64:5]'}}
                    },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
                    {
                        loader: 'sass-loader'
                    }  // to convert SASS to CSS
                ]},
            {
                test: /\.less$/,
                exclude: /\.module.(less)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
            {
                type: 'javascript/auto',
                test: /\.json$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: './json/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    }
};
