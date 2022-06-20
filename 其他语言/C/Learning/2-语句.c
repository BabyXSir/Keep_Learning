#include <stdio.h>

void main() {
    int x=10,y=20;
    // 2.语句与运算符
    // 2.1 判断语句
    if (x > y)
    {
        printf("x - y=%d\n", x - y);
    }
    else
    {
        printf("x + y=%d\n", x + y);
    }

    switch (x)
    {
    case 10:
        printf("x == 10\n");
        break;
    case 20:
        printf("x ==20\n");
        break;

    default:
        break;
    }

    // 2.2 循环语句
    printf("begin for...\n");
    for (;x > 0;x--){
        printf("%d,",x);
    }
    printf("\nend for...\n");
    printf("begin while...\n");
    while(x < 10) {
        x++;
        printf("%d,",x);
    }
    printf("\nend while...\n");
}