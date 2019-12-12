

const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: path.join(__dirname, './examples/src/main.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './examples/dist'),
  },
  module: {
    rules: [
      // ... 其它规则
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './examples/index.html')
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, '/examples/dist'),
    compress: true,
    port: 9000,
    hot: true,
    open: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '/examples/src'),
      'library': path.join(__dirname, '/'),
    }
  },
}