var webpack = require("webpack");
var config = {
  entry: {
    vendor: ["jquery", "react", 'react-dom'],
    // "/NodePage/test":"./NodeSrc/entry/test.entry.js",
    // "NodePage/input/products/ProduceStart": "./NodeSrc/entry/input/products/ProduceStart.entry.js",
    // "NodePage/input/products/AddProductionList": "./NodeSrc/entry/input/products/AddProductionList.entry.js",
    // "/NodePage/mobile/ShowShipment":"./NodeSrc/entry/mobile/ShowShipment.entry.js",
    // "/NodePage/Main": "./NodeSrc/entry/Main.entry.js",
  },
  output: {
    path: './',
    filename: "[name].bundle.js",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
       test: /\.css$/,
       loader: "style-loader!css-loader"
     }]
  }
}
module.exports = config;
