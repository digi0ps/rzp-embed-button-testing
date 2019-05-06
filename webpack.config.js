const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',

  entry: {
    'embed-shadow': './src/shadow/index.js',
    'embed-iframe': './src/iframe/index.js'
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-transform-arrow-functions',
                '@babel/plugin-transform-classes',
                '@babel/plugin-transform-destructuring',
                '@babel/plugin-transform-shorthand-properties',
                '@babel/plugin-transform-parameters'
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [new CleanWebpackPlugin()],

  devtool: 'source-map',

  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')
  }
}
