const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')

module.exports = merge(common, {
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'] },
            { test: /\.sass$/,
                use: ['style-loader','css-loader','sass-loader']
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'main.css',
            disable: true,
            allChunks: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})