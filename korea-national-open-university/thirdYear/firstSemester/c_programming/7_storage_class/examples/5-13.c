#include <stdio.h>
#pragma warning(disable : 4996)
void extern_ex();
char s[100];
void main()
{
    printf("문자열을 입력하세요: ");
    scanf("%s", s);
    printf("입력 문자열은 %s는 전역변수 s에 저장\n", s);
    extern_ex();
}
