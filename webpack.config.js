const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',

  entry: {
    'rzp-embed-shadow': './src/razorpay-embed-shadow.js',
    'rzp-embed-iframe': './src/razorpay-embed.js'
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
              plugins: ['@babel/plugin-proposal-class-properties'],
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },

  plugins: [new CleanWebpackPlugin()],

  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'dist')
  }
}
