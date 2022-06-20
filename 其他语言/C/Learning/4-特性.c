#include <stdio.h>

#define ch char;

void main()
{
  // 指针
  int a = 11;
  int *p = &a;
  printf("%d\n", p);

  typedef char cha;
  cha b = 'b';
  cha *q = &b;
  cha x = b;
  printf("1.%d\n", b);
  printf("2.%d\n", q);
  printf("3.%d\n", *q);
  printf("4.%d\n", x);

  // 空指针
  int *n = NULL;
  printf("5.%d\n", n);

  char str[] = "HAHAHA";
  char *strp = &str;
  printf("5.%d\n", strp);


  // int e,f,g;
  // printf("请输入：");
  // scanf("%d %d %d",& e,& f,& g);


};