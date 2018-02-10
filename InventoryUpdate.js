function updateInventory(arr1, arr2) {
    var keys = [];
    var n;
    var x = [];

    var flag = 0;
    if (arr1.length === 0) {
        arr1 = arr2;
    } else {
        for (var i = 0; i < arr2.length; i++) {
            n = arr2[i][1];
            keys.push(n);
        }
        for (var j = 0; j < keys.length; j++) {
            for (var a = 0; a < arr1.length; a++) {
                if (keys[j] === arr1[a][1]) {
                    arr1[a][0] += arr2[j][0];
                    flag = 0;
                    break;
                }
                flag++;
                if (flag === arr1.length) {
                    x.push(arr2[j]);
                }
            }

        }

        for (var y = 0; y < x.length; y++) {
            arr1.push(x[y]);
        }

    }

    arr1.sort(function (a, b) {

        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });

    return arr1;
}

// // 仓库库存示例
// var curInv = [
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ];

// var newInv = [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ];

// updateInventory(curInv, newInv);
updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])