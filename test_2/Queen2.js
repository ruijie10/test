function queen_map(map) {
    var arr = [];//选定的坐标数组
    var repeat_arr = new Array();//二维数组，每一层被改变标记的坐标
    var flag_arr = new Array();//二维数组标记；
    for (var i = 0; i < map; i++) {
        flag_arr[[i]] = new Array();
        for (var j = 0; j < map; j++) {
            flag_arr[[i]][j] = true;
        }
    }
    function queen(n, x) {// n 为 n*n 的 table ,  x 为每一层 当前为第0层；
        //循环遍历第 x 层
        for (var y = 0; y < n; y++) {
            var arr1 = [];
            if (x < n) {
                if (flag_arr[x][y] == true) {
                    arr.push(y);//选定坐标放入 arr

                    // 纵行标记
                    for (let i = x; i < n; i++) {
                        if (flag_arr[i][y] == true) {
                            arr1.push([i, y])
                        }
                        flag_arr[i][y] = false;
                    }
                    // 左斜下方标记
                    if (y != 0 && x != n - 1) {
                        for (let a = x, b = y; a < n && b > 0; a++ , b--) {
                            if (flag_arr[a][b] == true) {
                                arr1.push([a, b])//当前做变更的标记坐标 true ==> flase
                                flag_arr[a][b] = false;
                            }
                        }
                    }
                    // 左斜下方标记
                    if (y != n - 1 && x != n - 1) {
                        for (let a = x, b = y; a < n && b < n; a++ , b++) {
                            if (flag_arr[a][b] == true) {
                                arr1.push([a, b])//当前做变更的标记坐标 true ==> flase
                                flag_arr[a][b] = false;
                            }
                        }
                    }
                    //当前做变更的标记坐标 true ==> flase 放入 x 层
                    repeat_arr[x] = new Array();
                    for (let i = 0; i < arr1.length; i++) {
                        repeat_arr[x].push(arr1[i]);

                    }

                    // 进入下一层
                    queen(n, x + 1);
                    // 提取上一层 x 标记坐标， flase变成 true
                    if (x == n - 1 && flag_arr[x][y] == true) {
                        return;
                    }
                    for (let i = 0; i < repeat_arr[x].length; i++) {
                        var arr2 = repeat_arr[x][i];
                        var arrx = arr2[0];
                        var arry = arr2[1];
                        flag_arr[arrx][arry] = true;
                    }
                    arr.pop();//删除上一层选择的坐标
                    repeat_arr.pop();//删除上一层 true 改变成 flase 的坐标
                }
            }
        }
        if (arr.length == n) {
            console.log(arr)
        }
    }
    queen(map, 0)
}
queen_map(8)