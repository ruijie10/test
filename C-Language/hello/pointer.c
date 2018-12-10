#include <stdio.h>
#include <time.h>
 
void getSeconds(unsigned long *par)
{
  /* 获取当前的秒数 */
  *par = time( NULL  );
  return;
}

int main ()
{
  unsigned long sec = 1;

  printf("Number is: %ld\n", sec );

  getSeconds( &sec  );

  /* 输出实际值 */
  printf("Number of seconds: %ld\n", sec );

  return 0;
}

