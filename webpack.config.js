const path = require("path");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    contentBase: __dirname,
    publicPath: "/build/",
    compress: true,
    port: 3001,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'sass-loader'
        ],
      },
    ]
  }
};
