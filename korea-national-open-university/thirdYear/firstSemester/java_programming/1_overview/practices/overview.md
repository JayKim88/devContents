# Java와 객체지향 프로그래밍

## 1. Java 언어와 Java 프로그램

자바 언어의 특징

- C/C++ 언어와 유사하나 단순함
- 플랫폼에 독립적
- 완전한 객체지향 언어
- 웹 또는 네트워크 프로그래밍이 용이
- 엄격한 자료형의 검사
- 예외 처리 기능 제공
- 멀티 스레딩 지원

자바 프로그램의 실행 프로세스

<img width='600px' src='./image/1.png' />

- Java 소스 프로그램의 확장자는 .java
- 바이트 코드
  - Java 소스를 컴파일한 결과물
  - 확장자는 .class이며 클래스 파일이라고도 함
  - 자바 플랫폼의 Java VM 에서 실행 가능한 코드
  - “write once, run anywhere.”

## 2. Java 플랫폼

플랫폼(platform)

- 프로그램의 실행을 위한 하드웨어와 소프트웨어 환경
- Java 플랫폼은 Java 프로그램의 개발과 실행을 위한 환경
- 운영체제에 맞는 Java 플랫폼을 설치해야 함

Java VM

- Java 프로그램의 실행 환경을 제공하는 가상 기계
- Java 프로그램의 구동 엔진
- 실행에 필요한 사항을 관리
- 메모리 정리를 자동으로 수행

Java API

- 프로그램의 개발에 필요한 클래스 라이브러리
- 패키지(클래스 묶음)들이 계층 구조로 분류되어 있음

<img width='400px' src='./image/2.png' />

## 3. 첫번째 Java 프로그램

```java
/**
* The Hello class implements an application that
* simply prints “Hello, Java Application!”to standard output. */
public class Hello {
public static void main(String args[ ]) { // main method
          /* Display the string */
System.out.println("Hello, Java Application!"); }
}
```

클래스의 정의

public class Hello {...}
: public class는 파일에 최대 1개. 파일 이름은 ‘퍼블릭클래스의이름.java’

main( ) { ... }
: main( ) 메소드의 형식은 public static void main(String[]args)

출력

**System.out**

: 표준출력을 담당하는 객체. print( ) 또는 println( )을 수행함

실행

1. 프로그램 작성: Hello.java로 저장함
2. 컴파일 명령: javac [Hello.java](http://Hello.java) ‘클래스이름.class’ 가 만들어짐
3. 실행 명령: java Hello. Hello 클래스에서 main() 메소드가 실행됨

## 4. 객체지향 프로그래밍

추상화

: 구체적인 모든 사실이 아니라 전형적이고 필요한 부분만을 발췌하여 사물을 이해하고 표현하는 것

클래스

- 클래스는 객체를 만들기 위한 모형 또는 틀
- 공통적인 특징을 가지는 객체들을 추상화하기 위한 수단
- 객체의 상태는 필드(데이터)로, 행위는 메소드로 구현됨
- 객체는 특정 클래스의 인스턴스

Java 프로그램

- 클래스가 프로그램 구성의 기본 단위
- 데이터(필드)와 알고리즘(메소드)이 클래스에 캡슐화되어 있음
- 클래스 정의로부터 객체들이 만들어지고 객체들 간의 상호작용으로 프로그램이 동작함
