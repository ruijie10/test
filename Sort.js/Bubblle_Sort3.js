function bubbleSort3(arr) {
    var low = 0;
    var high = arr.length - 1;
    var tem;
    while (low < high) {
        for (let i = 0; i < high; i++) {
            if (arr[i] > arr[i + 1]) {
                tem = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tem;
            }
        }
        high--;
        for (let j = high; j > low; j--) {
            if (arr[j - 1] > arr[j]) {
                tem = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = tem;
            }
        }
        low++;
    }
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort3(arr));