// 生产
const merge = require('webpack-merge'); //合并配置
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseWebpackConfig, {
    mode: 'production',  //mode是webpack4新增的模式
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html',
            title: '新版系统', //更改HTML的title的内容
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
        new CleanWebpackPlugin(['../dist'], { allowExternal: true }), // 删除dist 文件
        new BundleAnalyzerPlugin(), // 代码体积分析
    ]
});
