var webpack = require('webpack');

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
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react']
      },
      {
        test: /\.scss$/, 
        loader: 'style!css!sass'
        // loaders: ["style", "css", "sass"]
      }
    ]
  },
  sassLoader: {
    sourceMap: true
  },
};
