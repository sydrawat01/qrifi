const ReactRefreshWebapckPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    // inline: true,
    // historyApiFallback: true,
    // contentBase: './build',
  },
  plugins: [new ReactRefreshWebapckPlugin()],
}
