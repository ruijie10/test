function bubbleSort3(arr3) {
    var low = 0;
    var high = arr.length - 1; //设置变量的初始值
    var tmp, j;
    console.time('3.改进后冒泡排序耗时');
    while (low < high) {
        for (j = low; j < high; j++) {//正向冒泡,找到最大者
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
            }
        }
        high--;   //修改high值, 前移一位
        for (j = high; j > low; j--) { //反向冒泡,找到最小者
            if (arr[j] < arr[j - 1]) {
                tmp = arr[j]; arr[j] = arr[j - 1]; arr[j - 1] = tmp;
            }
        }
        low++ //修改low值, 前移一位

    }
    console.timeEnd('3.改进后冒泡排序耗时');
    return arr;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort3(arr));