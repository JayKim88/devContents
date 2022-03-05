/*
 putchar( ) 함수
 형식 : putchar( 문자);
 기능 : 한 문자를 화면에 출력한다.
 사용 예
putchar(‘A’);
*/
#include <stdio.h>

void main()
{
    char var = 'A';
    putchar(var);
    putchar(var + 1);
    putchar('\n');
    putchar('K');
    putchar('K' + 2);
    putchar('\007');
}

/*
AB
KM%
*/
