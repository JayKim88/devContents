// 표준함수의 사용 예1

#include <stdio.h>
#include <math.h>
#include <stdlib.h>

void main()
{
    double x = 12.34;
    int i = -5, j = 2;
    int a, b, c;
    a = ceil(x);
    b = floor(x);
    c = pow(4, j);
    printf("abs(-5) = %d \n", abs(i)); // abs(x) x의 절대값
    printf("ceil(12.34) = %d \n", a);
    printf("cos(10) = %f \n", cos(10));
    printf("exp(2) = %.f \n", exp(j)); // exp(x) x의 지수값. exp(x) 함수는 부동 소수점 인수 x(e의 x제곱, 여기서 e는 2.17128128...과 같음)의 지수 값을 연산합니다.
    printf("floor(12.34) = %d \n", b);
    printf("sqrt(2) = %f \n", sqrt(j)); // sqrt(x) x의 제곱근값
    printf("pow(4,2) = %d \n", c);
}
