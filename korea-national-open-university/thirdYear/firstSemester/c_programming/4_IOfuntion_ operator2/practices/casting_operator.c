/*
cast 연산자(형변환 연산자)
v 형식 : (형명칭)자료;
v 기능 : 이미 지정된 자료의 자료형을 강제적으로 다른 자료형으로 변환한다.
v 사용 예 : (float)i/j
*/
#include <stdio.h>

void main()
{
    int a = 3, b = 4;
    double c;
    c = (double)a / b; // int형인 a를 double형으로 강제 형변환
    printf("나눗셈 결과 : % f\n", c);
}

/*
나눗셈 결과 :  0.750000
*/
