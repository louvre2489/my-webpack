module.exports = {
  entry: './src/js/entry.js',
  output: {
    path:　__dirname + '/dist',
    filename: 'output.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options:{
            presets:['react']
          }
        }
      }
    ]
  }
};
