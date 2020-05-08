const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
	  app: __dirname + "/src"
  },
  output: {
	  path: __dirname + "/public"
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
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/app.html",
      filename: "./app.html"
    })
  ]
};