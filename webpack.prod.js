const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'hidden-source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
});
