// package.json 详解
```
"devDependencies": {
    "babel-core": "^6.26.3", // 核心库
    "babel-loader": "^7.0.2", // babel-loader 7 和 8 不兼容
    "babel-preset-env": "^1.7.0",  
    "babel-preset-react": "^6.24.1", // react 转码规则
    "babel-plugin-import": "^1.11.0", // antd按需加载样式 
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-stage-0": "^6.24.1", // es6/7转码
    "webpack": "^4.28.1",
    "webpack-cli": "^3.2.1",
    "webpack-merge": "^4.2.1" // webpack4 合并
    "html-webpack-plugin": "^3.2.0", // html template 插件
    "clean-webpack-plugin": "^1.0.0", // build 之前 删除 dist文件
    "webpack-dev-server": "^3.1.14", // hmr 热加载
    "css-loader": "^2.1.0", // css 加载
    "less": "^3.9.0", // less
    "less-loader": "^4.1.0", // less
    "postcss-loader": "^3.0.0", // css
    "style-loader": "^0.23.1", // css
    "url-loader": "^1.1.2", // 图片url模块加载
    "file-loader": "^3.0.1", //  file模块加载 比如图片就需要这个file加载
    "webpack-bundle-analyzer": "^3.0.3", // 打包后代码体积分析
  },
  "dependencies": {
    "extract-text-webpack-plugin": "^3.0.2", // 分离css, 避免掺在js里面
    "react": "^16.7.0",
    "react-dom": "^16.7.0"
  }
```
