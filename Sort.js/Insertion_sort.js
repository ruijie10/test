function insertion(arr) {
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
    return arr;
}
var arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

console.log(insertion(arr));