// 公共
const path = require('path'); //node.js自带的路径参数
const DIST_PATH = path.resolve(__dirname, '../dist'); //生产目录
const APP_PATH = path.resolve(__dirname, '../src'); //源文件目录
const {version} = require('../package.json'); // 打包版本号
const HappyPack = require('happypack');
const os = require('os'); // 系统操作模块

const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length}); // 由于是多线程, CPU占用很高

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: `${version}/[name].[chunkhash].js`, //使用hash进行标记
        path: DIST_PATH,
        publicPath: '/' // 解决多路由错乱
    },
    stats: {
        source: true // 增加时间分析
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: "happypack/loader?id=babel", // 引入happypack
                exclude: /node_modules/,
                include: APP_PATH
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test:/\.less$/,
                use: [
                    {  loader: "style-loader"  },
                    {  loader: "css-loader" },
                    {
                        loader: "postcss-loader",//自动加前缀
                        options: {
                            plugins:[
                                require('autoprefixer')({
                                    browsers:['last 5 version']
                                })
                            ]
                        }
                    },
                    {  loader: "less-loader", options: { javascriptEnabled: true } },
                ],
                include: [/antd/],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false, // true -> import styles from 'xxx.less'  false -> import 'xxx.less'
                            sourceMap: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 5 version']
                                })
                            ]
                        }
                    },
                    { loader: 'less-loader', options: { javascriptEnabled: true } },
                ],
                exclude: [/antd/],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        // outputPath:'static/',//输出**文件夹
                        publicPath: '/',
                        name: "images/[name].[ext]",
                        limit: 1000  //是把小于1000B的文件打成Base64的格式，写入JS
                    }
                }]
            },
            {
                test: /\.(woff|svg)$/,
                use: 'file-loader',
                exclude: /node_modules/
                // exclude忽略/node_modules/的文件夹
            },
            {
                test: /\.(eot|ttf)$/,
                use: 'file-loader'
            },
            {
                test: /\.woff(2)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: './font/[hash].[ext]',
                            mimetype: 'application/font-woff'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
      new HappyPack({ // 基础参数设置
        id: 'babel', // 上面loader?后面指定的id
        loaders: ['babel-loader?cacheDirectory'], // 实际匹配处理的loader
        threadPool: happyThreadPool,
        verbose: true
      })
    ],
    resolve: {
        alias: {
            Utils: path.resolve(__dirname, '../src/utils'),
            Components: path.resolve(__dirname, '../src/components'),
            Models: path.resolve(__dirname, '../src/models'),
            Services: path.resolve(__dirname, '../src/services'),
            Static: path.resolve(__dirname, '../src/public/static'),
        },
        extensions: ['.js'] // 解析文件后缀
    }
};
