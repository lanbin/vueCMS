var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '&': resolve('src/components'),
      '@': resolve('src')
    }
  },
  plugins: [
    new ExtractTextPlugin('css/[name].[hash:7].css'),
  ],
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      enforce: 'pre',
      include: [resolve('src'), resolve('test')],
      use: [{
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }]
    }, {
      test: /\.vue$/,
      use: [{
        loader: 'vue-loader',
        options: vueLoaderConfig
      }]
    }, {
      test: /\.js$/,
      include: [resolve('src'), resolve('test')],
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }]
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      }]
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }]
    }]
  }
}