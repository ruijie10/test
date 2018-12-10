#include<stdio.h>
int main() {
  char c = 'a';
  int n = c;     //将c赋值给n
  float f = n; //将c赋值给f
  double d = f; //将c赋值给d
  printf("%c\n",c);
  printf("%d\n",n);
  printf("%f\n",f);
  printf("%lf\n",d);
  return 0;
}
