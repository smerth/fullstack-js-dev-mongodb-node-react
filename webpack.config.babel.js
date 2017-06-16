const {resolve} = require('path');

module.exports = () => {
  return {
    context: resolve('src'),
    entry: './index.js',
    output: {
      path: resolve('public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-2']
            }
          }
        },
        {
          test: /\.json$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'json-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    }
  };
};
