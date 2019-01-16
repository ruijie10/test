#include<stdio.h>
int main ()
{
  int  var = 20;   /* 实际变量的声明 */
  int  *ip;        /* 指针变量的声明 */
  ip = &var;  /* 在指针变量中存储 var 的地址 */
  int  *ptr = NULL; /*声明空指针 */
  int *sb = &var;
  printf("var变量的地址: %p\n", &var  );
  printf("ip在指针变量中存储的地址: %p\n", ip );
  printf("*ip指针变量的值: %d\n", *ip );
  printf("ptr是空指针 它的地址是 %p\n", ptr  );
  printf("*sb指针变量的值: %d\n", *sb );
  return 0;
}
