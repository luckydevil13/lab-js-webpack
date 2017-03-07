const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

console.log('Environment: ' + process.argv[3]);

const commonConfig = {
    // start point to resolve dependencies 
    context: path.resolve(__dirname, 'src'),

    // MUST: start point to resolve
    entry: {
        app: './app/app.ts',
    },

    // MUST: result of work
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'build')
    },

    // extensions to work with
    resolve: {
        extensions: ['.ts', '.scss', '.js']
    },

    // Watch the filesystem for changes
    watch: true,

    module: {
        rules: [
            // webpack only works with javascript, so to support ts - we use loader
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                loader: 'awesome-typescript-loader'
            },

            // for sass use ExtractTextPlugin - combine all style files in one, css-loader - use to load styles to DOM
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ],

    },

    // Output of ExtractTextPlugin to styles.css
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
}

if (process.argv[3] === 'prod') {
    const config = webpackMerge.smart(commonConfig, {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({})
        ],
        watch: false
    });
    module.exports = config;
} else if (process.argv[3] === 'dev') {
    module.exports = commonConfig;
}
