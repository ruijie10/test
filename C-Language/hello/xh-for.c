#include<stdio.h>
int main() {
  //for 语句打印九九乘法表
  int a = 9;
  for(int i = 9; i>0; i--){
    for(int j = 1; j<=a; j++){
      printf(" %d*%d=%d ", i, j, i*j);
    }
    a--;
    printf("\n");
  }
  return 0;
}
