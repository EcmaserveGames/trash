const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'lib/client'),
    filename: 'client.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/client/index.html' })
  ]
}