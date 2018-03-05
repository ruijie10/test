function queen_map(map) {
    var arr = [];
    var flag_arr = new Array();
    for (let i = 0; i < map; i++) {
        flag_arr[i] = new Array();
        for (let j = 0; j < map; j++) {
            flag_arr[i][j] = true;
        }
    }
    var repeat_arr = new Array();
    function queen(n, k) {
        var arr1 = [];
        // if (arr.length == n) {
        //     return;
        // }
        // if (k < n) {
        for (let x = 0; x < n; x++) {
            for (let y = 0; y < n; y++) {
                if (flag_arr[x][y] == true) {
                    arr.push([x, y]);
                    for (let i = 0; i < n; i++) {
                        if (flag_arr[i][y]) {
                            flag_arr[i][y] = false;
                            arr1.push([i, y])
                        }

                    }
                    for (let j = 0; j < n; j++) {
                        if (flag_arr[x][j]) {
                            flag_arr[x][j] = false;
                            arr1.push([x, j])
                        }
                    }
                    if (y != n - 1 && x != n - 1) {
                        for (let a = x, b = y; b < n && a < n; b++ , a++) {
                            if (flag_arr[a][b]) {
                                flag_arr[a][b] = false;
                                arr1.push([a, b])
                            }
                        }
                    }
                    if (x != 0 && y != 0) {
                        for (let a = x, b = y; a > 0 && b > 0; a-- , b--) {
                            if (flag_arr[a][b]) {
                                flag_arr[a][b] = false;
                                arr1.push([a, b])
                            }
                        }
                    }
                    if (x != 0 && y != n - 1) {
                        for (let a = x, b = y; a > 1 && b < n; a-- , b++) {
                            if (flag_arr[a][b]) {
                                flag_arr[a][b] = false;
                                arr1.push([a, b])
                            }
                        }
                    }
                    if (x != n - 1 && y != 0) {
                        for (let a = x, b = y; a < n && b > 0; a++ , b--) {
                            if (flag_arr[a][b]) {
                                flag_arr[a][b] = false;
                                arr1.push([a, b])
                            }
                        }
                    }
                    repeat_arr[k] = new Array();
                    for (let i = 0; i < arr1.length; i++) {
                        repeat_arr[k].push(arr1[i]);
                    }

                    queen(n, k + 1)
                    arr.pop();
                    for (let i = 0; i < repeat_arr[k].length; i++) {
                        var arr2 = repeat_arr[k][i];
                        var arrx = arr2[0];
                        var arry = arr2[1];
                        flag_arr[arrx][arry] = true;
                    }
                    repeat_arr.pop();
                }
            }
        }
        // }
        // return arr;
        if (arr.length == n) {
            console.log(arr);
        }

    }
    queen(map, 0)

}
queen_map(8)