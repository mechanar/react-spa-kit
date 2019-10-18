const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  cache: true,
  mode: 'development',
  devServer: {
    contentBase: './dist',
    port: 3000,
    compress: true,
    publicPath: '/',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  }
});
