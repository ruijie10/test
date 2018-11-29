function bubbleSort2(arr) {
    var i = arr.length - 1;
    while (i > 0) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
        i--;
    }
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(bubbleSort2(arr));
