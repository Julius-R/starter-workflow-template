const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/App.js',
  output: {
    path: __dirname + '/dist/js',
    filename: 'scripts.js'
  },
  module: {
    loaders:[
       {
      loader: 'babel',
      query: {
        presets: ['es2015']
      },
      test: /\.js$/,
      exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
}
