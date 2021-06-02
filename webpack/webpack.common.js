const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const Dotenv = require('dotenv-webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
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
        test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|ots|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '..', './public/index.html'),
      favicon: './src/assets/favicon.ico',
    }),
    new DashboardPlugin(),
    new Dotenv(),
    // CopyWebpackPlugin is just to demonstrate an example of
    // copying files to build folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/*',
          to: 'static/media/[name].[hash:8][ext]',
        },
      ],
    }),
  ],
}
