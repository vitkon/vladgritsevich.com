var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var title = 'Vlad Gritsevich | Upholstery in New Jersey | Creative Furniture Solutions &amp; Upholstery in New Jersey';
var partTitle = 'Vlad Gritsevich | Upholstery in New Jersey';

module.exports = {
    entry: [
        './app/app.js',
        './app/scss/main.scss'
    ],
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],

        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                loader: 'file?name=/[folder]/[name].[ext]',
                test: /\.png($|\?)|\.jpg($|\?)|\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin('css/styles.css', {
            allChunks: true
        }),

        new CopyWebpackPlugin([
            { from: 'app/img', to: 'img' },
            { from: 'app/portfolio-assets', to: 'portfolio-assets' }
        ]),

        new HtmlWebpackPlugin({
            title: title,
            template: './app/index.html'
        }),

        new HtmlWebpackPlugin({
            filename: 'what-i-do.html',
            template: './app/what-i-do.html',
            title: 'What I Do | ' + partTitle
        }),

        new HtmlWebpackPlugin({
            filename: 'portfolio.html',
            template: './app/portfolio.html',
            title: 'Portfolio'
        }),

        new HtmlWebpackPlugin({
            filename: 'testimonials.html',
            template: './app/testimonials.html',
            title: 'Testimonials | ' + partTitle
        })
    ]
};
