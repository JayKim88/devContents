/*
대입 연산자 사용 예
*/
#include <stdio.h>

void main()
{
    int a = 10, b = 3, c = 1;
    a *= (b - 1);
    b /= 2 + 3;
    c += 2;
    printf("a=%d b=%d c=%d", a, b, c);
}

/*
a=20 b=0 c=3%
*/
