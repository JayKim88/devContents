class Circle {
    double r;

    public Circle(double a) {
        r = a;
    }

    public double getArea() {
        return r * r * 3.14; // 원의 면적
    }
}

class Cylinder {
    private Circle c;
    private int h;

    public Cylinder(Circle a, int b) {
        c = a;
        h = b;
    }

    public double getVolume() {
        return c.getArea() * h; // 원의 넓이 x 높이
    }
}

public class CylinderVolume {
    public static void main(String args[]) {
        Circle c = new Circle(7);
        int h = 8;
        Cylinder cy = new Cylinder(c, h);
        System.out.println(cy.getVolume()); // 1230.88
    }
}
