#include<stdio.h>
// 递归函数 计算 n 阶乘  s = 1*2*3* ...*n
int prodict(int n){
  long ss;
  if(n < 0){
    printf("输入错误！");
    return 0;
  }
  if(n == 1 || n == 0){
    return 1;
  }
  else {
    ss = prodict(n-1) * n;
  }
    return ss;
}

int main() {
  int n = 10;
  printf("n=%d: %d\n", n, prodict(n));
  return 0;
}
