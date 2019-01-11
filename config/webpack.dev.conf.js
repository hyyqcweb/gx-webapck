// 开发
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    output: {
        filename: `js/[name].[hash:16].js`,
    },
    // 源错误检查
    devtool: 'inline-source-map',
    plugins: [
        // 处理html
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            inject: 'body',
            minify: {
                html5: true
            },
            hash: false
        }),
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
    ],
    // 热更新
    devServer: {
        port: '3000',
        contentBase: path.join(__dirname, '../public'),
        compress: true, // 启用 gzip
        historyApiFallback: true,
        hot: true, //开启
        https: false,
        noInfo: true,
        open: true,
        proxy: {
            // 代理环境
        }
    }
});
