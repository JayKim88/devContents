## 1. Java 프로그램과 기본 사항

식별자

```java
public class HelloApplication {
  static String szMsg = "Hello, Java!";
  public static void main(String args[]) {
    int nTest = 0;
    System.out.println(szMsg);
  }
}
```

**식별자를 만들 때의 관례**

- 클래스 : 첫 자는 대문자, 단어의 첫 글자는 대문자, 나머지는 소문자
  - Car, HelloWorld, MyClass, String
- 메소드, 변수(필드) : 위와 같으나 첫 글자가 소문자
  - speed, myCar, gearArea( )
- 상수 : 모든 문자를 대문자로 표기하고, 단어 사이에 ‘\_’를 넣어 구분
  - static final int NUM_GEARS = 6;
- 변수의 경우 자료형을 표시하기 위한 접두어를 붙이기도 함
  - int nSpeed; String szStr1;

## 2. 자료형

변수의 종류

<img width='600px' src='./image/1.png' />
<br> 
변수의 사용범위

데이터 필드(인스턴스 변수 or 클래스 변수)

- 선언된 클래스 내부에서 사용 가능
- 클래스 외부에서의 사용 가능 여부는 접근 제어자(access modifier)에 따라 다름
  - 예: class Circle { protected int radius; ... }

Java 의 기본 자료형

<img width='600px' src='./image/2.png' />

형 변환
묵시적 자료형의 변환

- 작은 타입에서 큰 타입으로는 자동 형변환
  - byte -> short -> int -> long -> float -> double
  - 개발자->직원->인간->포유류
