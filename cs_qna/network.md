# Network

### CORS의 목적과 CORS 활용에 대해 이야기하라.

Cross-Origin Resource Sharing

어플리케이션을 사용하는 유저들을 보호하기 위한 서로 다른 출처(origin)에서 자원을 공유해도 되는지에 대한 웹브라우저의 정책이다.

즉, 동일 출처 정책(same-origin policy) 때문에 CORS 같은 상황이 발생하면 외부서버에 요청한 데이터를 브라우저에서 보안목적으로 차단한다. 그로 인해 정상적으로 데이터를 받을 수 없다.

이때 추가 HTTP 헤더(Access-Control-Allow-Origin)를 사용하여, 한 출처에서 실행 중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려줄 수 있다.

e.g.)
Supposing that Site A wants to send a PUT request for `/somePage`, with a non-simple `Content-Type` value of `application/json`, the browser would first send a preflight request:

```js
OPTIONS /somePage HTTP/1.1
Origin: http://siteA.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type
```

Note that `Access-Control-Request-Method` and `Access-Control-Request-Headers` are added by the browser automatically; you do not need to add them. This OPTIONS preflight gets the successful response headers:

```js
Access-Control-Allow-Origin: http://siteA.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type
```

When sending the actual request (after preflight is done), the behavior is identical to how a simple request is handled. In other words, a non-simple request whose preflight is successful is treated the same as a simple request (i.e., the server must still send `Access-Control-Allow-Origin` again for the actual response).

The browsers sends the actual request:

```js
PUT /somePage HTTP/1.1
Origin: http://siteA.com
Content-Type: application/json

{ "myRequestContent": "JSON is so great" }
```

And the server sends back an `Access-Control-Allow-Origin`, just as it would for a simple request:

```js
Access-Control-Allow-Origin: http://siteA.com
```
