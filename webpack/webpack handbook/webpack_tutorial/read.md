## [Overview: 4 main traits for webpack build process](https://joshua1988.github.io/webpack-guide/concepts/overview.html)

#### 1. Entry

: build target.
entry points could be numerous for multi-page app like below:
entry: {
login: './src/LoginView.js',
main: './src/MainView.js'
}

#### 2. Output

: file path of the webpack result.
simply, output: './dist/bundle.js'
there are several file-name-options

#### 3. Loader

: It's to convert web-resources(HTML, CSS, Images...) not JS file.
module: {
rules: [],
},

test : 로더를 적용할 파일 유형 (일반적으로 정규 표현식 사용)
use : 해당 파일에 적용할 로더의 이름

로더는 파일을 해석하고 변환하는 과정에 관여.
로더는 기본적으로 오른쪽에서 왼쪽 순으로 적용됩니다.

#### 4. Plugin

플러그인(plugin)은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성입니다.
플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다고 보면 됩니다.
플러그인의 배열에는 생성자 함수로 생성한 객체 인스턴스만 추가될 수 있습니다.

HtmlWebpackPlugin : 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
ProgressPlugin : 웹팩의 빌드 진행율을 표시해주는 플러그인

Reference: https://joshua1988.github.io/webpack-guide/concepts/overview.html

## [Concepts Review](https://joshua1988.github.io/webpack-guide/concepts/wrapup.html)

![ex_screenshot](https://joshua1988.github.io/webpack-guide/assets/img/diagram.519da03f.png)

- Entry 속성은 웹팩을 실행할 대상 파일. 진입점
- Output 속성은 웹팩의 결과물에 대한 정보를 입력하는 속성. 일반적으로 filename과 path를 정의
- Loader 속성은 CSS, 이미지와 같은 비 자바스크립트 파일을 웹팩이 인식할 수 있게 추가하는 속성. 로더는 오른쪽에서 왼쪽 순으로 적용
- Plugin 속성은 웹팩으로 변환한 파일에 추가적인 기능을 더하고 싶을 때 사용하는 속성. 웹팩 변환 과정 전반에 대한 제어권을 갖고 있음
