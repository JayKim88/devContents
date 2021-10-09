## [Webpack Dev Server](https://joshua1988.github.io/webpack-guide/devtools/webpack-dev-server.html#webpack-dev-server)

- 웹팩 데브 서버는 웹 애플리케이션을 개발하는 과정에서 유용하게 쓰이는 도구입니다.
- 웹팩의 빌드 대상 파일이 변경 되었을 때 매번 웹팩 명령어를 실행하지 않아도 코드만 변경하고 저장하면 웹팩으로 빌드한 후 브라우저를 새로고침 해줍니다.
- 매번 명령어를 치는 시간과 브라우저를 새로 고침하는 시간 뿐만 아니라 웹팩 빌드 시간 또한 줄여주기 때문에 웹팩 기반의 웹 애플리케이션 개발에 필수로 사용됩니다.
- webpack-dev-server is configured by default to support live-reload of files as you edit your assets while the server is running.

## features

- 웹팩 데브 서버로 빌드한 결과물은 메모리에 저장되고 파일로 생성하지는 않기 때문에 컴퓨터 내부적으로는 접근할 수 있지만 사람이 직접 눈으로 보고 파일을 조작할 순 없습니다.
- 즉, 웹팩 데브 서버를 실행하여 웹팩 빌드를 하는 경우에는 빌드한 결과물이 파일 탐색기나 프로젝트 폴더에서 보이지 않기 때문에 웹팩 데브 서버는 개발할 때만 사용하다가 개발이 완료되면 웹팩 명령어를 이용해 결과물을 파일로 생성해야 합니다.
- 컴퓨터 구조 관점에서 파일 입출력보다 메모리 입출력이 더 빠르고 컴퓨터 자원이 덜 소모됩니다😄

## set proxy

뷰, 리액트와 같은 프런트엔드 프레임워크를 쓰면 개발 편의상 로컬에 웹팩 데브 서버를 띄워놓고 개발하는 경우가 많습니다.
다른 도메인 간에 자바스크립트로 자원 요청할 경우, CORS 오류가 발생하는데, 이 때 아래와 같이 proxy 속성을 설정하면 서버에서 해당 요청을 받아줍니다.

```js
//webpack.config.js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "domain.com",
        changeOrigin: true,
      },
      //"/api": <IP Address>, 도메인 이름이 IP 주소일 경우 작성 방법.
    },
  },
};
```

#### Diagram

![dd](https://joshua1988.github.io/webpack-guide/assets/img/proxy.dce9d87c.png)
