var webpack = require("webpack");
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var config = require('./webpack.base.config.js');
var HtmlWebpackPlugin = require('html-webpack-plugin');
config.module.rules[0].use[0].options.plugins.push('transform-remove-console');
config.plugins.push(new UglifyJSPlugin({
  uglifyOptions: {
    ie8: false,
    output: {
      comments: false,
      beautify: false,
    },
    mangle: {
      keep_fnames: true
    },
    compress: {
      warnings: false,
      drop_console: true
    },
  }
}));
const entrys = {
  'add-book': '添加书籍',
  'chapter': '章节',
  'search-book': '搜索书籍',
  'title': '目录',
  'update-chapter': '修改章节',
};
const list = Object.keys(entrys);
for (let key of list) {
  config.entry[key] = "./src/entry/" + key + ".entry.js",
    config.plugins.push(new HtmlWebpackPlugin({
      title: entrys[key],
      filename: key + '.html',
      template: './src/template.html',
      chunks: ['vendor', 'runtime', key]
    }));
}
module.exports = config;
