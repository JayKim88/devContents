
/*
두 수를 키보드로 입력받아 곱의 결과를 출력하는 프로그램
*/

#include <stdio.h>              //printf(), sacnf() 함수를 사용하기 위한 헤더 파일을 포함하기 위함
#pragma warning(disable : 4996) //권장하지 않는 함수 사용에 대한 경고 메세지 무시

int a, b, c;
int product(int x, int y);

int main()
{
    printf("Enter a number between 1 and 100 : ");
    scanf("%d", &a);
    printf("Enter another number between 1 and 100 : ");
    scanf("%d", &b);
    c = product(a, b);
    printf("%d * %d = %d \n", a, b, c);
}

int product(int x, int y)
{
    return (x * y);
};
