

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
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
      {
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              /* your options here */
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 请确保引入这个插件！
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './examples/index.html')
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.join(__dirname, '/examples/src'),
      'library': path.join(__dirname, '/'),
    }
  },
}