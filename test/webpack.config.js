var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx*$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000'
      }
    ]
  }/*,

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        "NODE_ENV": JSON.stringify('production')
      }
    })
  ]*/,

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
