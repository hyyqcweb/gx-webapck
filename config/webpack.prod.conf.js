// 生产
const path = require('path');
const merge = require('webpack-merge'); //合并配置
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 单独打包css
const CompressionWebpackPlugin = require('compression-webpack-plugin'); // gzip 压缩
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 复制图片,字体等静态资源
const {version} = require('../package.json');
const DIST_PATH = path.resolve(__dirname, '../dist');
const SRC_PUBLIC_PATH = path.resolve(__dirname, '../src/public');

module.exports = merge(baseWebpackConfig, {
    mode: 'production',  //mode是webpack4新增的模式
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            title: '新版系统', //更改HTML的title的内容
            favicon: `${SRC_PUBLIC_PATH}/favicon.ico`,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
        new CleanWebpackPlugin(['../dist'], { allowExternal: true }), // 删除dist 文件
        new BundleAnalyzerPlugin(), // 代码体积分析
        new ExtractTextPlugin(`${version}/[name].[contenthash].css`), // css 分离
        new CompressionWebpackPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8
        }),
        new CopyWebpackPlugin([
            {
                from: './src/public/assets',
                to: `${DIST_PATH}/static`
            },
        ]),
    ]
});
