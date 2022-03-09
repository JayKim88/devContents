#include <stdio.h>
void main()
{
    int i, j;
    i = 2;
    while (i <= 9)
    {
        printf(" - %d단- ", i);
        i++;
    }
    printf("\n");

    i = 1;
    while (i <= 9)
    {
        j = 2;
        while (j <= 9)
        {
            printf(" %dx%d= %2d", j, i, j * i);
            j++;
        }
        printf("\n");
        i++;
    }
}
