const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        inline: true,
        hot: true
    },
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'] },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/public/index.html'
        }), 
        new CleanWebpackPlugin(['dist']),
    ]
}