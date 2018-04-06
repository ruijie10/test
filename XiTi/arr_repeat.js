function arr_repeat(arr) {
    var arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr1.indexOf(arr[i]) == -1) {
            arr1.push(arr[i])
        }
    }
    arr1.sort(function (a, b) {
        return a-b;
    })
    console.log(arr1)
}
arr_repeat([10, 1, 3, 5, 5, 8])

