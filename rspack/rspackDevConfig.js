const rspack = require('@rspack/core');
const path = require('path');
const { merge } = require('webpack-merge');
const ReactRefreshPlugin = require('@rspack/plugin-react-refresh');

const rspackCommonConfig = require('./rspackCommonConfig');
const { getWebpackWatchOptions} = require('./getWebpackWatchOptions')

const PORT = parseInt(process.env.PORT || '4459', 10);

const cwd = process.cwd();

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = merge(rspackCommonConfig, {
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: path.join(cwd, './src/index.html'),
      publicPath: '/',
    }),
    new ReactRefreshPlugin(),
  ],
  devServer: {
    port: PORT,
    open: '/#/app',
    allowedHosts: 'all',
    historyApiFallback: {
      disableDotRule: true,
    },
    devMiddleware: {
      writeToDisk: true,
    },
    hot: true,
    compress: true,
    liveReload: false,
  },
  watchOptions: getWebpackWatchOptions(),
});
