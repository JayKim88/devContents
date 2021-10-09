## [mode config](https://joshua1988.github.io/webpack-guide/advanced/mode-config.html#%EC%9B%B9%ED%8C%A9-%EC%8B%A4%ED%96%89-%EB%AA%A8%EB%93%9C-mode)

- 웹팩 설정 파일이 1개인 상태에서 실행 모드에 따라 특정 설정을 적용하는 방법.
- package.json 에서 build 할 때 env.mode 에 development 또는 production 을 전달하는데,
  이에 따라서 entry 대상이 변경되어 build 된다.
- 즉, 실행모드(개발 또는 배포)에 따라 다르게 빌드할 수 있다.
