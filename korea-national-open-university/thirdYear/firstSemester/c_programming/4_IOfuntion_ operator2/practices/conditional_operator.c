/*
조건 연산자 사용 예
*/
#include <stdio.h>

void main()
{
    int a = 10, b;
    b = (a > 15) ? (a + 1) : (a - 1);
    printf("b=%d", b);
}

/*
b=9%
*/
