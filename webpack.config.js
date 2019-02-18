const path = require('path');

console.log('estoy por configurar webpack !!!');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devServer: {
    publicPath: '/dst/',
    port: 3000
  },
  output: {
    path: path.resolve(__dirname, 'dst'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      } 
    ]
}
};