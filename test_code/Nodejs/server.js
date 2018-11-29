function mun(x) {
  var n = 0;
  var mun = 0;
  var flag = 0;
  for (let i = 1; i <= x; i++) {
    if (i == 1) {
      console.log(1)
      mun += i;
      n++;
    }
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        flag++;
      }
    }
    if (flag == 1) {
      console.log(i)
      mun += i;
      n++;
    }
    flag = 0
  }
  console.log(x + "以内的质数一共有" + n + "个")
  console.log(x + "以内的质数和为" + mun)
}
mun(100)
