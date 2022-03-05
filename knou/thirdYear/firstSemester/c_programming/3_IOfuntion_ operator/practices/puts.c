/*
 puts( ) 함수
형식 : puts(변수);
기능 : 문자열을 화면에 출력한다.
사용 예
char s[50]=“seoul”;
puts(s);
*/
#include <stdio.h>
#pragma warning(disable : 4996)

void main()
{
    char s1[] = "Computer";
    char s2[] = "Science";
    puts(s1);
    puts(s2);
    printf("%s", s1);
    printf("%s", s2);
}

/*
Computer
Science
ComputerScience%
*/
