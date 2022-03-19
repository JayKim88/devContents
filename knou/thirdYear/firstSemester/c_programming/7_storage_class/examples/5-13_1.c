#include <stdio.h>
extern char s[];
void extern_ex()
{
    printf("외부변수 s값은 %s입니다. \n", s);
}
