const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  devServer: {
    https: true,
    historyApiFallback: true,
    contentBase: './lib',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
    allowedHosts: ['localhost', 'ecmaservegames-trash.herokuapp.com'],
  },
  entry: './src/client/MsTeams/index.tsx',
  output: {
    publicPath: '/msteams/',
    path: path.resolve(__dirname, 'lib/msteams'),
    filename: 'client.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/client/index.html' }),
    new CopyPlugin({
      patterns: [{ from: 'src/client/static', to: 'static' }],
    }),
  ],
}
