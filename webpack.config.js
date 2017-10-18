const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

const cssDev = ['style-loader','css-loader','sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader','sass-loader'],
    publicPath: '/dist'
});
const cssConfig = isProd ? cssProd : cssDev;


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
            { test: /\.sass$/,
                use: cssConfig
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/public/index.html'
        }), 
        new ExtractTextPlugin({
            filename: 'main.css',
            disable: !isProd,
            allChunks: true
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}