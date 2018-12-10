#include <stdio.h>
#define N 10
//´òÓ¡·ÖÊý 
void printScore(int score[])
{
  int i;
  printf("\n");
  for(i=0;i<N;i++)
  {
    printf("%d ",score[i]);               
  }
  printf("\n");     
}
//¼ÆËã¿¼ÊÔ×Ü·Ö 
int getTotalScore(int score[])
{
  int sum = 0;
  int i;
  for(i=0;i<N;i++)
  {
    sum+=score[i];                
  } 
  return sum;
}
//¼ÆËãÆ½¾ù·Ö 
int getAvgScore(int score[])
{
  return getTotalScore(score)/N;   
}
//¼ÆËã×î¸ß·Ö 
int getMax(int score[])
{
  int max = -1;
  int i;
  for(i=0;i<N;i++)
  {
    if(score[i]>max)
    {
      max = score[i];              
    }                
  } 
  return max;
}
//¼ÆËã×îµÍ·Ö 
int getMin(int score[])
{
  int min =100;
  int i;
  for(i=0;i<N;i++)
  {
    if(score[i]< min)
    {
      min = score[i];              
    }                
  } 
  return min;
}
//·ÖÊý½µÐòÅÅÐò 
void sort(int score[])
{
  int i,j;
  for(i=N-2;i>=0;i--)
  {
    for(j=0;j<=i;j++)
    {
      if(score[j]<score[j+1])
      {
        int temp;
        temp = score[j];
        score[j] = score[j+1]; 
        score[j+1]=temp;                  
      }                 
    }                   
  }
  printScore(score);     
}


int main()
{
  int score[N]={67,98,75,63,82,79,81,91,66,84};
  int sum,avg,max,min;
  sum = getTotalScore(score);
  avg = getAvgScore(score);
  max = getMax(score);
  min = getMin(score);
  printf("×Ü·ÖÊÇ£º%d\n",sum);
  printf("Æ½¾ù·ÖÊÇ£º%d\n",avg);
  printf("×î¸ß·ÖÊÇ£º%d\n",max);
  printf("×îµÍ·ÖÊÇ£º%d\n",min);
  printf("----------³É¼¨ÅÅÃû---------\n");
  sort(score);
  return 0;    
}

