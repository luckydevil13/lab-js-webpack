const commonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const config = webpackMerge.smart(commonConfig, {
    plugins: [
        new webpack.optimize.UglifyJsPlugin({})
    ],
    watch: false
});

module.exports = config;