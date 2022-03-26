class Data<T> {
    private T t;

    public Data(T t) {
        this.t = t;
    }

    public void set(T t) {
        this.t = t;
    }

    public T get() {
        return t;
    }
}

public class GenericTest3 {
    public static void main(String args[]) {
        Data<String> data = new Data<>();
        String s1 = new String("hello");
        data.set(s1);
        String s2 = data.get();
    }
}
