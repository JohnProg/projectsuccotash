var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackNotifierPlugin = require('webpack-notifier');
// var purify = require("purifycss-webpack-plugin");

module.exports = {
  entry: [
  'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './src/app/index.js' //app's entry point
  ],
  output: {
    path: __dirname,
    filename: 'dist/app/bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0']
      },
      {
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  sassLoader: {
    sourceMap: true
  },
  plugins: [
    new ExtractTextPlugin("dist/styles/app.css"),
    // @TODO should probably only use this for production, slows down dev build too much
    // new purify({
    //   purifyOptions: { info: true, minify: true, rejected: true}
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin()
  ]
};
