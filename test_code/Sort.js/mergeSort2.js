function mergeSort2(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var length = Math.floor(arr.length / 2);
    var left = arr.slice(0, length);
    var rigth = arr.slice(length);
    return merge(mergeSort2(left), mergeSort2(rigth));
}
function merge(left, rigth) {
    var newarr = [];
    while (left.length && rigth.length) {
        if (left[0] < rigth[0]) {
            newarr.push(left.shift());
        }
        else {
            newarr.push(rigth.shift());
        }

    }
    while (left.length) {
        newarr.push(left.shift());
    }
    while (rigth.length) {
        newarr.push(rigth.shift());
    }
    return newarr;
}



arr = [12, 2, 3, 4, 45, 24, 76, 8, 9, 59, 5, , 8, 78, , 69, 23, 89, 53, 61, 19, 28]
console.log(mergeSort2(arr))