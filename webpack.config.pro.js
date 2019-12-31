

const merge = require('webpack-merge')
const base = require('./webpack.config.base')

const pro = {
  mode: 'production',
}


module.exports = merge(base, pro)