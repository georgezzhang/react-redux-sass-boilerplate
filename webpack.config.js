var webpack = require('webpack')

module.exports = {
  entry: './src/scripts/index.jsx',
  output: {
    publicPath: '/dist/scripts/',
    path: __dirname + '/dist/scripts',
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: '/node_modules'
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
        exclude: '/node_modules'
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  }
}
