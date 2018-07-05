const webpack = require('webpack'); // 用于访问内置插件
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');//解决vue-loader解析报错
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle-[hash].js',
    },
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.resolve(__dirname, 'public'),
        open:true,
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test:/\.(png)|(jpg)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        outputPath:'images/',
                    }
                }
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),//热模块替换
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({//自动生成index.html的模板
            template:path.resolve(__dirname,'src/index.tmpl.html')
        }),
        new VueLoaderPlugin(),//vue-loader解析优化插件
        new MiniCssExtractPlugin({//将打包的js文件中css部分抽离出来
            filename: "[name]-[hash].css",
        }),
        new CleanWebpackPlugin('public/*.*',{//自动清理public文件夹多余的打包js
            root:__dirname,
            verbose:true,
            dry:false,
        }),
    ],
};

module.exports = config;
