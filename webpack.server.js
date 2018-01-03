const path = require('path');
const config = require('./webpack.config.js');
const merge = require('webpack-merge');
const buildFolder = path.resolve(__dirname, 'dist');

module.exports = merge(config, {
    watch: true,
    devServer: {
        contentBase: buildFolder,
        compress: true,
        port: 9100
    }
})