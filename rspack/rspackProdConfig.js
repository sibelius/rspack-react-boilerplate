const rspack = require('@rspack/core');
const path = require('path');
const { merge } = require('webpack-merge');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const rspackCommonConfig = require('./rspackCommonConfig');

const cwd = process.cwd();

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = merge(rspackCommonConfig, {
  output: {
    path: path.join(cwd, 'build'),
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new rspack.HtmlRspackPlugin({
      template: path.join(cwd, './src/index.html'),
      filename: 'index.html',
    }),
  ],
  optimization: {
    minimize: true,
  },
});
