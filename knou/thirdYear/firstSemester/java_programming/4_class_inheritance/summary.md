# 클래스와 상속

## 클래스 정의와 사용

### 메소드 정의

- 클래스 정의 내부에 존재
- 헤더와 몸체로 구성됨

```java
[접근제어자] 반환형 메소드이름([자료형 인자[,자료형인자...]])                            [throws 예외이름]
    {
    문장 ...
    }

public double getArea( ) {
        return radius * radius * PI;
}
public void setRadius(int r) {
radius = r;
}
```

### 생성자

객체가 생성될 때 자동으로 실행되는 메소드
✓객체의 필드 값을 초기화하거나 메모리 할당 등의 작업

```java
class Circle {
   double r;
   public Circle(double a) {
     r = a;
   }
   public double getArea( ) {
     return r * r * 3.14;
   }
}

public class CircleArea2 {
  public static void main(String args[ ]) {
    Circle c = new Circle(5.0);
    System.out.println(c.r);
    System.out.println(c.getArea( ));
  }
}
```

### 객체 초기화

```java
import java.awt.Point;
class Rectangle {
  public int width = 0;
  public int height = 0;
  public Point origin;

  public Rectangle( ) {
      origin = new Point(0, 0);
  }
  public Rectangle(Point p, int w, int h) {
      origin = p;
      width = w;
      height = h;
  }
  public class Test {
    public static void main(String args[ ]) {
      Point originOne = new Point(23, 94);
      Rectangle rectOne =
} }
}


```

## 상속
