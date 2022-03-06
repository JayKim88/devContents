import java.util.Scanner;

public class ScannerDemo2 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in); 
        while(sc.hasNextInt()) {
                 System.out.println(sc.nextInt());
              }
        }
}

/**
 * 1) Scanner클래스
 * ◆키보드나 파일로부터 다양한 자료를 입력 받을 때 사용
 * ✓기본적으로 공백 문자로 구분되는 단어 단위로 입력됨
 * ✓문자열이나 기본형 값의 입력을 위해 nextXXX( ) 메소드를 제공함
 * 
 */
