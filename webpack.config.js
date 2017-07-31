var webpack = require("webpack");
var path = require('path');
const isDebug = true;
var config = {
  entry: {
    vendor: ["jquery", "react", 'react-dom'],
    "/target/test": "./src/entry/test.entry.js",
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: "/target/vendor.bundle.js"
    })
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: isDebug,
          presets: [
            ['es2015', {
              modules: false
            }],
            ['stage-0'],
            ['react']
          ],
          plugins: ['syntax-dynamic-import']
        }
      }]
    }, {
      test: /\.css$/,
      use: [{
          loader: 'style-loader',
          options: {
            cacheDirectory: isDebug,
          }
        },{
            loader: 'css-loader',
            options: {
              cacheDirectory: isDebug,
            }
          }
      ]
    }]
  }
}
module.exports = config;
