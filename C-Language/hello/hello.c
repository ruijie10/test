#include<stdio.h>
int main() {

#define PI  3.14  //定义常量及常量值
  int myAge = 18; //定义变量
  char id = 'a';
  myAge++;

  printf("我今年 %d岁\n", myAge);
  printf("我ID是 %c 开头的。\n", id);

  printf("圆周率：%f\n", PI);

  printf("程序一定是从我开始的\n");

  printf("%%d 带符号十进制整数\n");
  printf("%%c  单个字符\n");
  printf("%%s  字符串\n");
  printf("%%f  6位小数  float a = 1.23; printf(%%f, a) 输出结果为 1.23000\n");
  return 0;
}
