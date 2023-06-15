const path = require('path');

module.exports = function (webpackEnv) {
  return {
    entry: ['babel-polyfill', './src/index.js', 'history'],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: require.resolve('history'),
          use: [
            {
              loader: 'expose-loader',
              options: 'History'
            }
          ]
        }
      ]
    },
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify')
      }
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    }
  };
};
