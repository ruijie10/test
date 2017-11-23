function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var he = 0;
    for (var i=min; i <= max; i++){
        he += i;
    }
  return(he);
}
sumAll([1, 4]);
