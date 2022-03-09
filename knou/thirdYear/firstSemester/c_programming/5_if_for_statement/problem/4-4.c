/*
예제 4-4
대각선 별 출력하기
*/

#include <stdio.h>
#pragma warning(disable : 4996);
void main()
{
    int i, j;
    for (i = 0; i < 5; i++)
    {
        for (j = 0; j < 5; j++)
        {
            if (i == j)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
    }
    for (i = 0; i <= 5; i++)
    {
        for (j = 5; j > -1; j--)
        {
            if (i == j)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
    }
}
