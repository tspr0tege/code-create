const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './public/build');
const APP_DIR = path.resolve(__dirname, './client');

module.exports = {
  mode: 'development',
  entry: APP_DIR + '/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/public/build/',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@src': '/client/src'
    }
  },
  watch: true,
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
}