/*
sizeof( ) 연산자
v 형식 : sizeof(자료)
v 기능 : 지정한 자료(자료형,상수,변수,수식)에 대한 기억 장소의 크기를 구함
v 사용 예 : sizeof(int)
*/
#include <stdio.h>

void main()
{
    float a = 3.14;
    printf("int형의 크기는=%d바이트\n", sizeof(int));
    printf("float형 변수 a의 크기는=%d바이트\n", sizeof(a));
}

/*
int형의 크기는=4바이트
float형 변수 a의 크기는=4바이트
*/
