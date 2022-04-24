class Circle {
    private double r;
    public Circle(double a) {
    r = a; 
    }
    public double getArea( ) { 
        return r * r * 3.14;
    }
    public double getRadius( ) {
        return r; 
    };
}

public class Class {
    public static void main(String args[ ]) {
        Circle c = new Circle(5); 
        System.out.println(c.r); //  error: r has private access in Circle
        System.out.println(c.getRadius());
        System.out.println(c.getArea( )); 
    }
}
