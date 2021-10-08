// `webpack` command will pick up this config setup by default
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/, //
        use: ["css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
};
