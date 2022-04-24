class Circle {
    double r;

    public Circle(double a) {
        r = a;
    }

    public double getArea() {
        return r * r * 3.14;
    }
}

public class CircleArea2 {
    public static void main(String args[]) {
        Circle c = new Circle(5.0);
        System.out.println(c.r);
        System.out.println(c.getArea());
    }
}
