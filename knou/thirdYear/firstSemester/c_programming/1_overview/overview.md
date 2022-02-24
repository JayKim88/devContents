# 1. C언어의 개요

## C 언어의 정의, 특징

C 언어 : 컴파일러가 필요

컴파일러
: 프로그래밍 언어로 작성된 프로그램을 컴퓨터가 이해할 수 있도록 기계어로 번역해주는 번역기

- 어셈블러(assembler)
  : 기호로 표현된 어셈블리 코드를 기계어로 번역하는 번역기
- 인터프리터(interpreter)
  : 소스 프로그램을 한번에 기계어로 변환시키는 컴파일러와는 달리 프로그램을 한 단계씩 기계어로 해석하여 실행하는 ‘언어처리 프로그램’

## 프로그램의 작성 및 준비

### 프로그램 개발 단계

<img width="600px"  src='./image/1.png'>

### C 프로그램의 완성 과정

- 코딩(coding) 단계
  : 주어진 문제에 대한 설계를 바탕으로 소스코드(source code)를 작성하여 소스파일(source file)을 생성하는 과정. c 확장자 파일로 저장.

- 컴파일(compile) 단계(sample.c → sample.obj)
  : 소스파일이 목적파일(object file)로 변환되는 과정

- 링킹(linking) 단계(sample.obj → sample.exe)
  : 목적파일을 실행파일(execution file)로 변환하는 과정

<img width="500px"  src='./image/2.png'>
 
## 프로그램의 구성

기본 구조

<img width="500px"  src='./image/3.png'>

- C 프로그램은 반드시 하나 이상의 함수를 포함해야 한다.
- main( )함수가 반드시 존재해야 한다.
- 함수의 시작과 끝을 알리는 중괄호 { } 를 사용해야 한다.
- 중괄호 안에는 변수선언문, 치환문, 연산문, 함수 등의 명령을 기입한다.
- 선행처리기(preprocessor)를 제외하고 문장의 끝에는 세미콜론( ; )을 붙인다.

예약어(reserved word)

- 자료형 관련 예약어
  : char, int, float, short, long, double, unsigned, union, enum, void, …
- 기억 관련 예약어
  : auto, static, extern, register, …
- 제어 관련 예약어
  : if~else, for, while, do~while, switch~case, break, continue, return, …
- 기타 예약어
  : main, sizeof, include, …
