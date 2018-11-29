function drop(arr, func) {
    // Drop them elements.
    var a = [];
    while (!func(arr[0])) {
        a = arr.shift();
    }

    return arr;

}

drop([1, 2, 3], function (n) { return n < 3; });
