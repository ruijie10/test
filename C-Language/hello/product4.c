#include<stdio.h>
/*有5个人坐在一起，问第5个人多少岁？他说比第4个人大2岁。
  问第4个人岁数，他说比第3个人大2岁。问第3个人，又说比
  第2人大两岁。问第2个人，说比第1个人大两岁。最后 问第1个
  人，他说是10岁。请问第5个人多大？*/

int years(n) {
  int year;
  if(n == 1) {
    return 10;
  }
  else {
    year = years(n-1) + 2;
  }
  return year;
}

int main(){
  printf("第五个人%d岁\n", years(5));
}
