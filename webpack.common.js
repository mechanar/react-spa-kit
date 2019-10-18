const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      state: path.resolve(__dirname, 'src/state/'),
      pages: path.resolve(__dirname, 'src/pages/')
    }
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
