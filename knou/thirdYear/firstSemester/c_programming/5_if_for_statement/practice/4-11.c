#include <stdio.h>
#pragma warning(disable : 4996)
void main()
{
    int i;
    printf("정수 입력(1~10) :");
    scanf("%d", &i);
    if (i == 1)
        goto ONE;
    else if (i == 2)
        goto TWO;
    else
        goto EXIT;
ONE:
    printf("입력한 숫자는 1입니다. \n");
    goto EXIT;
TWO:
    printf("입력한 숫자는 2입니다. \n");
    goto EXIT;
EXIT:
    printf("프로그램을 종료합니다. \n");
}
