/*
gets( ) 함수
 형식 : gets(변수);
 기능 : 문자열을 키보드로부터 입력 받는다.
 사용 예
char s[50];
gets(s);
*/
#include <stdio.h>
#pragma warning(disable : 4996)

void main()
{
    char s[50];
    printf("문자열 입력?");
    gets(s);
    printf("gets()로 문자열 입력= %s\n", s);
    printf("\n문자열 입력?");
    scanf("%s", s);
    printf("scanf()로 문자열 입력= %s\n", s);
}

/*
문자열 입력?hihihi hihihih1i
gets()로 문자열 입력= hihihi hihihihi

문자열 입력?hihihiih hihih
scanf()로 문자열 입력= hihihiih
*/
