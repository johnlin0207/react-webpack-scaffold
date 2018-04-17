//const webpack = require('webpack');
const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /^node_modules$/,
                loader: 'babel-loader'
            },
            {
                test: [/\.sass?$/, /\.css?$/],
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: [/\.(png|jpg|svg)$/],
                exclude: /^node_modules$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.scss']
    },
    plugins: [
        /*new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),*/
        new HtmlwebpackPlugin({template: './src/index.html'})
    ]
};