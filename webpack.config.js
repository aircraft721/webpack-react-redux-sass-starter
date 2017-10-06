const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.sass$/, use: extractPlugin.extract({
                use: ['css-loader','sass-loader',]
            }) },
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'app/public/index.html'
    }), extractPlugin]
}