module.exports = function (webpackEnv) {
    // ...
    return {
      // ...
      entry: ['babel-polyfill', './src/index.js', 'history'],
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
              loader: 'babel-loader'
            }]
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
            test: require.resolve('history'),
            use: [{
              loader: 'expose-loader?History'
            }]
          }
        ]
      },
      resolve: {
        // ...
        fallback: {
          crypto: require.resolve("crypto-browserify"),
          stream: require.resolve("stream-browserify")
        }
      }
    };
  };