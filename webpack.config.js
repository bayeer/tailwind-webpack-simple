const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  module: {
    rules: [{
      test: /\.js$/i,
      include: path.resolve(__dirname, 'src'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    {
      test: /\.css$/i,
      include: path.resolve(__dirname, 'src'),
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }
    ]
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3001,
    watchFiles: [
        './src/**/*.html',
        './src/**/*.js'
    ]
  }
}
