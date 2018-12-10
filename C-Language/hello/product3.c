#include<stdio.h>
/*猴子第一天摘下N个桃子，当时就吃了一半，还不过瘾，
 就又多吃了一个。第二天又将剩下的桃子吃掉一半，又
 多吃了一个。 以后每天都吃前一天剩下的一半零一个。
 到第10天在想吃的时候就剩一个桃子了,问第一天共摘
 下来多少个桃子？并反向打印每天所剩桃子数。*/

int number(int i) {
  int n;
  if( i < 0 ){
    return 0;
  }
  if(i == 10){
    return 1;
  }
  else{
    n = (number(i + 1) + 1)* 2;
    printf("第%d天所剩%d个桃子\n", i, n);
  }
  return n;
}

int main(){
  printf("第一天一共摘了%d 个桃子\n", number(1));
}
