

const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.config.base')

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const dev = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, '/examples/dist'),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    quiet: true,
  },
}

module.exports = merge(base, dev)