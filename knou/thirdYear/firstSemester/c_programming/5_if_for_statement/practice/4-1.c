#include <stdio.h>
#pragma warning(disable : 4996)
void main()
{
    int a;
    printf("정수입력(1~200) :");
    scanf("%d", &a);
    if (a < 100)
        printf("입력한 정수가 100보다 작음. \n");
    printf("a = %d", a);
}
