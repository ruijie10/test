// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//      return config;
// }
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = function override(config, env) {
  config.output.filename = 'static/js/main.js';
  config.plugins.forEach((item, index) => {
    if (item instanceof ExtractTextPlugin) {
      config.plugins.splice(index, 1)
    }
  })
  config.plugins.push(new ExtractTextPlugin({
    filename: 'static/css/main.css'
  }))
  return config
}
