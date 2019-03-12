const webpack = require('webpack')

const styleLoaderChain = `css-loader!resolve-url-loader!sass-loader?{"includePaths":["${__dirname}/../src/styles"],"sourceMap":true}`

module.exports = {
  entry: `${__dirname}/client.js`,
  output: {
    path: `${__dirname}/../public`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /scss$/,
        loader: `style-loader!${styleLoaderChain}`,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ],
  },
  resolve: {
    modules: ['node_modules', `${__dirname}`],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: `${__dirname}`,
    historyApiFallback: { index: '/' },
  },
}
