/* eslint-env node */

var path = require('path');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var OpenMCTPlugin = require('webpack-openmct-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/HelloPlugin',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "openmct-hello.js",
    library: "HelloPlugin",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new OpenMCTPlugin({
      plugins: ['LocalStorage', 'Espresso', 'MyItems']
    }),
    new HtmlWebpackPlugin({  
      template: 'index.html',
      inject: 'head'
    })
  ]
};
