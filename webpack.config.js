const path = require('path');

module.exports = {
  mode: 'none',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
};
