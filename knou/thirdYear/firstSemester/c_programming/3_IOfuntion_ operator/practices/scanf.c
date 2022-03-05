/*
scanf( ) 함수
 형식 : scanf(“입력양식”, &변수1, &변수2, ...);
 기능 : 주어진 양식으로 자료를 입력 받아 지정된 기억공간(변수)에 저장
 사용 예
scanf(“%d”, &a);
*/
#include <stdio.h>

void main()
{
    int jsu1, jsu2;
    float ssu1, ssu2;
    printf("\n정수를 입력하시오");
    scanf("%d %d", &jsu1, &jsu2);
    printf("\n실수를 입력하시오");
    scanf("%f %f", &ssu1, &ssu2);
    printf("\n정수는 %d %d\n", jsu1, jsu2);
    printf("실수는 %f %f\n", ssu1, ssu2);
}

/*
정수는 2 3
실수는 2.330000 0.344000
*/
