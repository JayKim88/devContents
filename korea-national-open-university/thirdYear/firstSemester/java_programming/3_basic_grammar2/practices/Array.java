import java.util.Arrays;



public class Array {
    public static void main(String[] args) {
        // 2) 배열의 초기화
        int a[] = { 2, 3, 5, 6, 12 };
        int b[][] = { { 1, 2, 3 }, { 5, 6, 7 } };
        int c[][][] = { { { 10, 11, 12 } } };
        // int d[]; b={1,2,3}; 오류

        System.out.println(Arrays.toString(a));
        System.out.println(Arrays.deepToString(b)); 
        System.out.println(Arrays.deepToString(c));
        // 3) 배열의 생성
        int e[] = new int[3];
        int f[];
        f = new int[10];
        int anArray4[][] = new int[3][2];
        System.out.println(Arrays.toString(e)); // [0,0,0]
        System.out.println(Arrays.toString(f)); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        System.out.println(Arrays.deepToString(anArray4)); // [[0, 0], [0, 0], [0, 0]]
    }

}

/*
 * 2) 배열의 초기화
 * 선언과 동시에 중괄호를 이용하여 초기값을 지정
 * ✓ 자동으로 메모리 공간이 확보됨
 * ✓ 초기화 또는 생성과정을 거쳐야 배열의 원소를 사용할수있음
 * 
 * 3) 배열의 생성
 * 배열의 원소가 사용할 메모리 공간의 생성
 * ✓ new 연산자를 이용
 * 배열의 크기를 정하고 메모리 공간을 확보
 * new 연산자는 메모리의 주소값을 리턴함
 * 원소가 숫자인 경우 0, 참조형인 경우 null로 자동 초기화
 */
