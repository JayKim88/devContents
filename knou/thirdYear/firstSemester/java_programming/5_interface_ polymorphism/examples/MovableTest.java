interface Movable {
    void moveUp();

    void moveDown();

    void moveLeft();

    void moveRight();
}

public class MovableTest {

    public static void main(String[] args) {
        Movable m1 = new MovablePoint(5, 5);
        System.out.println(m1);
        m1.moveUp();
        System.out.println(m1);
        m1.moveRight();
        System.out.println(m1);
    }

}

class MovablePoint implements Movable {
    private int x, y;

    public MovablePoint(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public String toString() {
        return "Point at (" + x + "," + y + ")";
    }

    public void moveUp() {
        y++;
    }

    public void moveDown() {
        y--;
    }

    public void moveLeft() {
        x--;
    }

    public void moveRight() {
        x++;
    }
}
