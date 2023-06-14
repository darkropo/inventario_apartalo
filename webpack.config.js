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
                  loader: 'babel-loader'
              },
              {
                  test: require.resolve('history'),
                  loader: 'expose-loader?History'
              }
          ]
      },
      resolve: {
          // ...
          fallback: {
             
      
          }
      }
  }
}
