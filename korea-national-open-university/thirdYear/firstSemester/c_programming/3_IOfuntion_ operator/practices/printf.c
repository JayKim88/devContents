/*
 printf( ) 함수
 형식 : printf("출력양식", 변수1, 변수2, ...);
 기능 : 주어진 출력양식으로 자료를 출력한다.
 사용 예
printf(" This is an example\n");
printf(" A=%d, B=%c\n", a, b);
*/
#include <stdio.h>

void main()
{
    printf("***printf 함수 테스트***\n");
    char c = 'A';
    int i = 10, j = 20, k = 30;
    printf("간단한 출력 프로그램\n");
    printf("c=%c, c의 아스키 코드값은 %d\n", c, c);
    printf("i=%d, j=%d, k=%d\n", i, j, k);

    printf("***양식 변환기호의 사용 예***\n");
    printf("%c\n", 'a');
    printf("%d\n", -123);
    printf("%o\n", 123);
    printf("%x\n", 123);
    printf("%X\n", 123);
    printf("%f\n", 123.456789);
    printf("%e\n", 123.456789);
    printf("%s\n", "abcdefg");

    printf("***출력양식의 편집 예***\n");

    printf("|%d|\n", 123);        //숫자의 길이만큼 출력 폭이 자동 지정됨
    printf("|%5d|\n", 123);       //총 5자리로 오른쪽부터 채워짐
    printf("|%-5d|\n", 123);      //총 5자리로 왼쪽부터 채워짐
    printf("|%05d|\n", 123);      //총 5자리로 오른쪽부터 채워지고,공백은 0으로
    printf("|%6.1f|\n", 123.45);  //총 6자리(소수점 포함)로 소수점 이하 1자리 출력
    printf("|%07.2f|\n", 123.45); //총 7자리(소수점 포함)로 소수점 이하 2자리 출력, 공백은 0으로
}
