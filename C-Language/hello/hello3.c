#include <stdio.h>
int main()
{
  // int char float double 
  double num = 2.5;      //定义浮点型变量num并赋值为2.5
  int age = 20;
  int age2 = 16;
  int a = 18;
  int numtwo = (int)num; //取整
  printf("num = %f\n", num);
  printf("num的整数部分是%d\n", numtwo);
  printf("年龄为%d,", age);
  printf("%s18\n", age > a ? "大于" : "小于");
  printf("年龄为%d,", age2);
  printf("%s18\n", age2 > a ? "大于" : "小于");
  return 0;
}
