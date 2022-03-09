#include <stdio.h>
#pragma warning(disable : 4996)
void main()
{
    int a;
    printf("정수를 입력하세요 : ");
    scanf("%d", &a);
    if (a % 2 == 0)
    {
        printf("입력한 정수는 %d 입니다. \n", a);
        printf("%d는(은) 짝수입니다.", a);
    }
    else
    {
        printf("입력한 정수는 %d 입니다. \n", a);
        printf("%d는(은) 홀수입니다.", a);
    }
}
