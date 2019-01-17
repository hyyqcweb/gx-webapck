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
        publicPath: '/' // 解决多路由错乱
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
        port: 3000,
        contentBase: path.resolve(__dirname, 'public'),
        compress: true, // 启用 gzip
        historyApiFallback: true,
        hot: true, //开启
        https: false,
        noInfo: true,
        open: true,
        proxy: {
          '/api': {
              target: 'https://easy-mock.com/mock/5b85f226b6eb682fc7f9ef9d/bicycleApi',
              pathRewrite: {'^/api' : ''},
              secure: false,
              changeOrigin: true
          },
        }
    }
});
