const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css',
    disable: true,
    allChunks: true
});

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    devServer: {
        inline: true,
        hotOnly: true
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.sass$/,
                use: ['style-loader','css-loader','sass-loader',]
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/public/index.html'
        }), 
        extractPlugin,
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}