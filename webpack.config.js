const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
   optimization:{
       minimize: false // 关闭代码压缩，可选
   },

   entry: "./src/index.ts",

   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js",
       environment: {
           arrowFunction: false, // 关闭webpack的箭头函数，可选
           const: false
       }
   },

   resolve: {
       extensions: [".ts", ".js"]
   },

   module: {
       rules: [
           {
               test: /\.ts$/,
               use: {
                   loader: "ts-loader"     
               },
               exclude: /node_modules/
           },
           // 设置less得处理
           {
               test:/\.less$/,
               use:[
                   "style-loader",
                   "css-loader",
                   // 引入postcss
                   {
                    loader:"postcss-loader",
                    options:{
                        postcssOptions:{
                            plugins:[
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers:'last 2 versions'
                                    }
                                ]
                            ]
                        }
                    }
                   },
                   "less-loader"
               ]
           }
       ]
   },

   plugins: [
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
           title:'贪吃蛇',
           template:'./src/index.html'
       }),
   ],
   mode: "development"
}
