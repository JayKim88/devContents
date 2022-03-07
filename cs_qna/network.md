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

### HTTP 요청 흐름 (웹브라우저에서의 요청)

브라우저에서 먼저 URL에 적힌 값을 파싱하여, HTTP 요청 메세지를 만든다. 이 웹 서버로 전송하는데, 이때 웹 브라우저가 직접 전송을 하는 것이 아니라 OS에 전송 요청을 보낸다. OS는 DNS서버를 조회해서 Host이름을 보내야 할 IP 주소로 변환하게 된다.

프로토콜 스택(운영체제에 내장된 네트워크 제어용 소프트웨어, TCP/IP 계층)과 LAN 어댑터 에서 브라우저로부터 메시지를 받는다. 브라우저로부터 받은 메시지를 \*패킷 속에 저장한다. 그리고 수신 주소를 제어정보에 덧붙인다. 그 다음, 패킷은 LAN 어댑터에 넘긴다. LAN 어댑터는 패킷을 전기 신호로 변환시켜 LAN 케이블에 송출하게 된다.

허브, 스위치, 라우터 에서 LAN 어댑터로부터 송신한 패킷을 수신한다. 라우터는 패킷을 ISP(Internet Service Provider)에 전달, 인터넷으로 들어가게 된다.

액세스 회선에 의해 통신사용 라우터(POP, Point Of Presence)까지 운반된다. POP를 거쳐 인터넷의 핵심부로 들어가게 된다. 고속 라우터들 사이로 목적지까지 패킷이 흘러가게 된다.

인터넷 핵심부를 통과한 패킷은 목적지의 LAN에 도착하게 된다. 방화벽이 먼저 패킷을 검사한 후, 캐시서버로 보내서 웹 서버까지 갈 필요가 있는지 검사한다.

패킷이 물리적 웹 서버에 도착하면, 웹 서버의 프로토콜 스택이 패킷을 추출하여 메시지를 복원하고, 웹 서버 애플리케이션에 넘긴다. 애플리케이션은 요청에 대한 응답 데이터를 넣어 클라이언트로 회송한다. 온 방식 그대로 전송되게 된다.

\*패킷
: 정보 기술에서 패킷 방식의 컴퓨터 네트워크가 전달하는 데이터의 형식화된 블록이다.

\*액세스 회선
: 액세스 회선이라는 것은 인터넷의 입구에 있는 통신 회선이다.

\*방화벽
: 미리 정의된 보안 규칙에 기반한, 들어오고 나가는 네트워크 트래픽을 모니터링하고 제어하는 네트워크 보안 시스템이다.

\* 캐시서버
: 인터넷 서비스 속도를 높이기 위해 사용자와 가까운 곳에 데이터를 임시 저장하여 빠르게 제공해주는 프록시 서버를 의미한다.
