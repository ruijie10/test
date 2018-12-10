#include<stdio.h>
  //while 语句打印九九乘法表
int main() {
  int a = 9;
  int b = 1;
  int c = 10;
  while(a>0) {
    while(b<c){
    printf(" %d*%d=%d ", a, b, a*b);
    b++;
    }
    a--;
    b=1;
    c--;
    printf("\n");
  }
  return 0;
}
