const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
  })
)

// const sassLoader = environment.loaders.get('sass')
// const sassLoaderConfig = sassLoader.use.find(function(element) {
//   return element.loader === 'sass-loader'
// })
// sassLoaderConfig.options.implementation = require('sass')

module.exports = environment
