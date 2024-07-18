// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
  },

  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },

  module: {
    rules: [
      {
        test: /.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /.(jpg|png)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
};
