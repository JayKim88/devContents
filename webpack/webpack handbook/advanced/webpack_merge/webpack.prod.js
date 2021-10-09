const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
});

/*
배포용 설정 파일에는 배포하기 전 웹 리소스 최적화를 위한 설정들을 추가해줍니다.
 */
