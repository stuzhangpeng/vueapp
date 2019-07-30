//这是一个webpack配置文件，通过node.js中的模块操作，暴露一个配置对象
const path = require('path');
/*导入html-webpack-plugin*/
const htmlwebpackplugin = require("html-webpack-plugin");
/*导入vueloader插件，用来支持其他的loader文件支持.vue文件*/
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
//    配置webpack的入口和出口
    entry: path.join(__dirname, "./main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js'
    },
//    配置devserver第二种方式
    devServer: {
        open: true,
        port: 8088,
        hot: true
    },
    /*html插件能将HTML页面放入电脑运行内存*/
    plugins: [
        //这个节点用来配置webpack插件
        new htmlwebpackplugin({
            /*指定内存页面的模板文件*/
            template: path.join(__dirname, "./index.html"),
            //指定生成页面的名称,生成的页面自动添加<script src="/bundle.js">  </script>
            filename: "index.html"
        }),
        new VueLoaderPlugin()
    ],
    module: {
        //这个节点用来配置匹配第三方模块即是css模块
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},//正则表达式 用来匹配.css文件的规则  ,使用style-loader','css-loader
            //正则表达式匹配css中的背景图的url,并且通过？传参,如果limit=69642小于实际图片大小不会进行base64转码
            {test: /\.(jpg|png|jpeg|bmp|gif)$/, use: "url-loader?limit=69642"},
            /*解析字体文件*/
            {test: /\.ttf$/, use: "url-loader"},
            {test: /\.(mkv|mp4|ogg|MPEG 4|WebM)$/, use: "url-loader"},
            /*配置vue-loader加载.vue文件*/
            /*需要安装vue-loader vue-template-compiler*/
            {test: /\.vue$/, loader: "vue-loader"},
            /*使用babel转码es6高级语法
            * 需要安装  "@babel/core": "^7.5.5",
           " @babel/plugin-transform-runtime": "^7.5.5",
            "@babel/preset-env": "^7.5.5",
            "@babel/runtime": "^7.5.5",
           "babel-loader": "^8.0.6",
            * */
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    resolve: {
        /*设置导入vue找到的包*/
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
}