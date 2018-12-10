#include<stdio.h>
  //do while 语句打印九九乘法表
int main() {
  int a = 9;
  int b = 1;
  int c = 10;
  do {
    do {
      printf(" %d*%d=%d", a, b ,a*b);
      b++;
    }
    while(b<c);
    a--;
    b = 1;
    c--;
    printf("\n");
  }
  while(a>0);
}
