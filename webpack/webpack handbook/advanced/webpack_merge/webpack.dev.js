const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: { contentBase: "./dist" },
});

/*
개발용 설정 파일에는 개발자 도구나 웹팩 데브 서버와 같은 설정을 추가합니다. 
그리고 webpack-merge 라이브러리를 설치 및 로딩하고 나서 웹팩 공통 설정 파일인 webpack.common.js 파일을 로딩해서 같이 병합해줍니다.
*/
