# java.lang 패키지

java 프로그램에서 가장 많이 사용되는 기본 패키지 이다.

## Object 클래스

Object 클래스는 java.lang 패키지의 최상위 클래스이면서 모든 클래스의 최상위 클래스이다.
즉, java 의 모든 클래스는 Object 클래스로부터 상속되어 정의된다. 사용자가 정의하는 클래스들은 특별히 다른 슈퍼 클래스를 지정하지 않으면 암묵적으로 Object 클래스를 상속받도록 정해진다.

### String toString()

- 객체의 문자열 표현을 반환
  - 클래스이름@16진수해시코드
- 문자열의 + 연산, System.out.print() 등에서 필요
- 자식 클래스에서 재정의할 수 있음

```java
public String toString(){
    return getClass().getName() + "@" + Integer.toHexString(hashCode());
}
```

```java
class MyClass1 { }
class MyClass2 extends Object {
public String toString( ) { return "This MyClass2 class"; } }
public class MyClass3 {
public static void main(String args[]) {
       MyClass1 my_class1 = new MyClass1( );
       MyClass2 my_class2 = new MyClass2( );
       System.out.println(my_class1);
       System.out.println(my_class2);
...... }
}

```

```java
// 출력결과
MyClass1@762efe5d
This MyClass2 class
```

### boolean equals(Object obj)

- 두 객체의 변수 비교하여 두 변수의 참조값이 같을 때 true 반환
- 자식 클래스에서 재정의 가능

```java
Integer x = new Integer(5);
Integer y = new Integer(10);
Integer z = 5;
Short a = 5;

System.out.println(x.equals(y)); //false
System.out.println(x.equals(z)); //true
System.out.println(x.equals(a)); //false
System.out.println(x==y); //false
System.out.println(x==z); //false
```

### Object clone()

- 객체를 복제하여 리턴함
- cloneable 인터페이스를 구현한 클래스 의 객체만 clone() 메소드를 호출할 수 있음
- CloneNotSupportedException 처리 해주어야 함

```java
class Box implements Cloneable {
    private int width, height;
    public Box(int w, int h) {
      width=w; height=h;
    }
   public int width( ) { return width; }
   public int height( ) { return height; }
   public Object clone( ) {
     try {
       return super.clone( );
     } catch (CloneNotSupportedException e) {
       return null;
   }
 }
}
public class CloneTest {
  public static void main(String args[ ]) {
    Box b1 = new Box(20, 30);
    Box b2 = (Box) b1.clone( );
    System.out.println(b2.width( ));
    System.out.println(b2.height( ));
    System.out.println(b1);
    System.out.println(b2);
    }
}
```

```java
20
30
Box@28a418fc
Box@5305068a
```

### String 클래스

- String 유형은 문자열을 표현하는 자료형으로 참조형이다.
- String 유형의 변수는 참조형이지만 기본형 변수처럼 사용할 수 있다.
- 참조형이므로 키워드 new 와 생성자를 이용하여 String 객체를 생성할 수 있다.
  `String greeting = new String("Hello world")`
- 내용이 같은 리터럴은 스택 영역에 만들어져 공유된다.
- new 를 이용하여 생성되면 힙 영역에 각각 독립적으로 만들어진다.
