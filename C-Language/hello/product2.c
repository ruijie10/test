#include<stdio.h>
/*小明为了学好英语，需要每天记单词，第一天记1个，第二天记2个依次类推，到第10天的时候小明一共记了多少个单词？
  请用代码完成，算出小明第10天开始的时候会了多少个单词？*/

int learnWords(int n) {
  int sum;
  if(n < 1){
    printf("输入错误\n");
    return 0;
  }
  if(n == 1){
    return 1;
  }
  else{
    sum = learnWords(n-1) + n;
    return sum;
  }
}

int main() {
  int n = 10;
  printf("小明第%d学会了%d个单词\n", n, learnWords(n));
}
