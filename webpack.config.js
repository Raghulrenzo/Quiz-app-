
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    mode: 'development',
    module: {
        rules: [
          {
            test:/\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader",
            ],
          },
        ],
      },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },  
   plugins: [
    new MiniCssExtractPlugin({filename:"[name].css"}),
    new HtmlWebpackPlugin(
      {
        title:'webpack',
        template:'./src/index.html'
      }
    )
    ]
   
}