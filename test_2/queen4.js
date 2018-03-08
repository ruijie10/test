function queen_map(n) {
    var queen_arr = [];//选定的坐标数组
    var finish_flag = false;//结束标记；
    var a = 0;//符合要求答案个数；
    var temp_ijs = [];
    function queen(x) {// x 为每一层 
        if (x == n) {
            a += 1;
            // console.log(queen_arr)
            return;
        }
        //循环遍历第 x 层
        for (var y = 0; y < n; y++) {
            var flag = 0;
            for (let i = 0; i < temp_ijs.length; i++) {
                if (y == temp_ijs[i]) {
                    flag -= 1;
                } else {
                    flag += 1;
                }
            }
            if (flag == temp_ijs.length) {
                queen_arr.push(y);
                temp_ijs = [];
                for (let i = 0; i < queen_arr.length; i++) {
                    if (queen_arr[i] - (x + 1 - i) >= 0) {
                        temp_ijs.push(queen_arr[i] - (x + 1 - i));
                    }
                    if (queen_arr[i] + (x + 1 - i) < n) {
                        temp_ijs.push(queen_arr[i] + (x + 1 - i));
                    }
                }
                for (let i = 0; i < queen_arr.length; i++) {
                    temp_ijs.push(queen_arr[i]);
                }
                queen(x + 1); // 进入下一层
                queen_arr.pop()//删除上一层选择的坐标
                temp_ijs = [];
                for (let i = 0; i < queen_arr.length; i++) {
                    if (queen_arr[i] - (x - i) >= 0) {
                        temp_ijs.push(queen_arr[i] - (x - i));
                    }
                    if (queen_arr[i] + (x - i) < n) {
                        temp_ijs.push(queen_arr[i] + (x - i));
                    }
                }
                for (let i = 0; i < queen_arr.length; i++) {
                    temp_ijs.push(queen_arr[i]);
                }
            }
        }
    }
    queen(0)
    console.log(n + '皇后一共有：' + a + '个')
}
for (let i = 1; i <= 10; i++) {
    queen_map(i)
}