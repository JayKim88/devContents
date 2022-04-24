/*
getchar( ) 함수
 형식 : getchar( );
 기능 : 한 문자를 키보드를 통해 입력 받는다.
 사용 예
a=getchar( );
*/
#include <stdio.h>

void main()
{
    char a;
    printf("문자 하나를 입력하세요 \n");
    a = getchar(); //한 문자가 입력되면 문자형 변수 a에 저장
    printf("a=%c\n", a);
}

/*
d
a=d
*/
