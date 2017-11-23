function unite(arr1, arr2, arr3) {
    var arr = arr1.concat(arr2, arr3);
   var arr4=arr.sort();
    var newarr = [];
    newarr[0] = arr4[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr4[i] !== arr4[i + 1]) {
         var leng=   newarr.push(arr4[i + 1])
        }
    }

    return newarr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
