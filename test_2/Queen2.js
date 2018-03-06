function queen_map(n) {
    var queen_arr = [];//选定的坐标数组
    var repeat_arr = new Array();//二维数组，每一层被改变标记的坐标
    var map_flag = new Array();//二维数组标记；
    var finish_flag = false;//结束标记；
    var a = 0;//符合要求答案个数；
    for (var i = 0; i < n; i++) {
        map_flag[[i]] = new Array();
        for (var j = 0; j < n; j++) {
            map_flag[[i]][j] = true;
        }
    }
    function queen(x) {// x 为每一层 
        var temp_ijs = [];
        if (x == n) {
            a += 1;
            finish_flag = true;
            // console.log(queen_arr)
            return;
        }
        //循环遍历第 x 层
        for (var y = 0; y < n; y++) {
            if (map_flag[x][y] == true) {
                queen_arr.push(y);//选定坐标放入 queen_arr
                // 纵行标记
                for (let i = x; i < n; i++) {
                    if (map_flag[i][y] == true) {
                        temp_ijs.push([i, y])//当前做变更的标记坐标 true ==> flase
                        map_flag[i][y] = false;
                    }
                }

                // 左斜下方标记

                for (let i = x, j = y; i < n && j >= 0; i++ , j--) {
                    if (map_flag[i][j] == true) {
                        temp_ijs.push([i, j])//当前做变更的标记坐标 true ==> flase
                        map_flag[i][j] = false;
                    }
                }
                // 左斜下方标记
                for (let i = x, j = y; i < n && j < n; i++ , j++) {
                    if (map_flag[i][j] == true) {
                        temp_ijs.push([i, j])//当前做变更的标记坐标 true ==> flase
                        map_flag[i][j] = false;
                    }
                }
                queen(x + 1); // 进入下一层
                // if (finish_flag) {
                //     return; //寻到一个答案立即结束；
                // }
                // 提取上一层 x 标记坐标， flase变成 true
                for (let i = 0; i < temp_ijs.length; i++) {
                    map_flag[temp_ijs[i][0]][temp_ijs[i][1]] = true;
                }
                queen_arr.pop();//删除上一层选择的坐标
            }
        }
    }
    queen(0)
    console.log('一共有：' + a + '个')
}
queen_map(8)