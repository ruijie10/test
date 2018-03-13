function selection(arr) {
    var min, tem;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        tem = arr[i];
        arr[i] = arr[min]
        arr[min] = tem;
    }
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(selection(arr));