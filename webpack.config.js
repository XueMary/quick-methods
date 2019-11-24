

const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'none',
  entry: {
    "quick-methods": './lib/index.js',
    "quick-methods.min": './lib/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'quick-methods',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(),
],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      test:  /\.min\.js$/i,
      terserOptions: {
        extractComments: 'all',
        compress: {
          drop_console: true,
        },
      }
    })],
  },
}