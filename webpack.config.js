var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: ['react-hot-loader/patch', path.resolve('src/index.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve('build'),
    publicPath: '/build/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
}
