/*
산술연산자의 사용 예
*/
#include <stdio.h>

void main()
{
    // 산술연산자 사용 예
    int x, y;
    x = 10;
    y = 3;
    printf("x+y=%d\n", x + y);
    printf("x/y=%d\n", x / y);
    printf("x%%y=%d\n", x % y);
    printf("y%%x=%d\n", y % x);
    // ++,--연산자 사용 예
    int z = 5, a, b;
    a = ++z * z--;
    b = z * 10;
    printf("a=%d b=%d x=%d", a, b, z);
}

/*
x+y=13
x/y=3
x%y=1
y%x=3
a=36 b=50 x=5%
*/
