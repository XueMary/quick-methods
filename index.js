if(process.env.NODE_ENV === 'production'){
  module.exports = require('./dist/quick-methods.min.js')
} else {
  module.exports = require('./dist/quick-methods.js')
}