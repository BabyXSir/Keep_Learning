#include <stdio.h>
int sum(int num1, int num2);

void main()
{
  int x, y;
  x = 10;
  y = 20;

  printf("%d", sum(x, y));
}
int sum(int num1, int num2)
{
  int ret = num1 + num2;
  return ret;
};