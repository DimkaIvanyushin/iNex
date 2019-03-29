const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const styl = require('./webpack/styl');
const css = require('./webpack/css');
const wow = require('./webpack/wow');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'services': PATHS.source + '/pages/services/index.js'
        },
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'common'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'services.html',
                chunks: ['services', 'common'],
                template: PATHS.source + '/pages/services/index.pug'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ]
    },
    pug(),
    images()
]);

module.exports = function (env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS(),
            uglifyJS(),
            wow()
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            wow(),
            styl(),
            sass(),
            css()
        ])
    }
};










