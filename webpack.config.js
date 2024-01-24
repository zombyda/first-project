
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //추가
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { Minimatch } = require("minimatch");
module.exports = {
    entry : "./src/index.js",
    output : {
        filename: "main.js",
        path: path.resolve(__dirname,"dist"),
    },
    
    module : {
       rules : [
           {
              test : /\.css$/,
              //use : ["style-loader","css-loader"],
              use : [MiniCssExtractPlugin.loader,"css-loader"],
           },
           {
                test : /\.jpg$/,
                use: [{
                    loader :
                    "file-loader",
                    options: {
                        name : '[name].[ext]?[hash]'
                    }
                }],
           },
       ]
    },

    plugins:[ //추가
        new CleanWebpackPlugin(), // 웹팩 실행시마다 dist 폴더 정리
        new HtmlWebpackPlugin({template: './index.html'}),
        new MiniCssExtractPlugin({
            filename : "common.css",
        }),
        //index.html 자동 생성되도록 template 옵션 설정0000000000
    ],
    devServer : {
        static : {
            directory : path.resolve(__dirname,'dist')
        },
        port : 8080,
    }
};