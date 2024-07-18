const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },

  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
      },
    ],
  },
};
