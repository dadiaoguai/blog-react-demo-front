const webpack = require('webpack')
, path = require('path')

module.exports = function () {
  return {
    entry: {
      bundle: './src/index.js'
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader','css-loader']
        },
        {
          test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
          use: "file-loader"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['env','react','stage-0'],
                plugins: ['transform-runtime']
              }
            }
          ]
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'url-loader?limit=10240',
            'img-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: ['style-loader','css-loader','sass-loader']
        }
      ]
    },
    resolve: {
      extensions: ['.js','.jsx','.json']
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) { // 提取所有的公共vendor
          return module.context && module.context.indexOf('node_modules') !== 1
        }
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest' // 放置 common runtime code
      })
    ],
    devServer: {
      hot: true,
      historyApiFallback: true
    },
    devtool: "source-map"
  }
}
