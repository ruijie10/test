#include <stdio.h>
int main()
{
  //第一种形式
  int arrFirst[3] = {1,2,3};
  //第二种形式
  int arrSecond[] = {4,5,6};
  //第三种形式
  int arrThird[3];
  //给arrThird数组每个元素初始化
  arrThird[0]=7;
  arrThird[1]=8;
  arrThird[2]=9;
  //输出第一个数组中的第二个元素
  printf("arrFirst[1]=%d\n", arrFirst[1]);
  //输出第二个数组中的第二个元素
  printf("arrSecond[1]=%d\n", arrSecond[1]);
  //输出第三个数组中的第二个元素
  printf("arrThird[1]=%d\n", arrThird[1]);
  return 0;
}
