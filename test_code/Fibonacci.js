function sumFibs(num) {
  var a = [1, 1],
      b= 0,
      sum = 2;
  while(true){
    b = a[0] + a[1];
    if(b > num){
      return sum;
    }
    if(b % 2 !== 0){
      sum += b;
    }
    a[0] = a[1];
    a[1] = b;
  }
}
sumFibs(4);