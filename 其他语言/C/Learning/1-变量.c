#include <stdio.h>
#include <stdlib.h>

#define WIDTH 100;

int x;
int count = 10;
static int y;
int main(void)
{
    // 注释
    /* 注释2 */

    // 0.打印
    printf("%d\n", count);

    // 1.变量声明
    // 数字
    int num1, num2;
    short st = 1;
    long lo = 1;
    // 浮点数
    float fl1 = 0.1, fl2 = 1;
    double db1 = 0.11;
    long double ld = 0.222;
    const int HEIGHT = 200;
    // 字符
    char ch1, ch2;
    
    printf("10 >> 1 = %d\n", 10 >> 1);
    printf("10 << 1 = %d\n", 10 << 1);
    printf("x > y ? x:y = %d\n", x > y ? x : y);



    // 数组
    int arr[10] = {1, 2, 3, 4, 5};
    printf("arr == %d,%d,%d\n", arr);

    // 枚举
    enum DAYS
    {
        MON=5,
        TUE,
        WED,
        THU,
        FRI,
        SAT,
        SUN
    } day;
    day = 10;
    printf("%d\n",day);

    // 字符串
    char str[] = "HELLO WORLD";
    printf("%s",strPath);


    extern int x;
    int y = 20;
    x = 10;


    return 0;
}