function find(arr, func) {
  var num = 0;
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      return num;
    }

  }
}
  


find([1, 2, 3, 4], function (num) { return num % 2 === 0; });