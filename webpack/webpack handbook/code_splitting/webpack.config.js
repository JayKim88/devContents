var path = require("path");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  //CSS 파일을 별도로 분리하기 위해 MiniCssExtractPlugin 플러그인 설정 추가
};

/*
mode 속성은 웹팩 버전 4 이상에서 추가된 속성입니다. 
웹팩으로 빌드할 때의 development, production, none 모드를 설정할 수 있습니다.
*/
