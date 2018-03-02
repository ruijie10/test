function find_way(map, x, y, x2, y2) {
    var d = document.getElementById('find');//通过id获取div节点对象
    var way = [];
    var flag = 0;
    var way2 = [];
    var flag_way = [];
    var flag_map = new Array();
    for (var i = 0; i <= map.length; i++) {
        flag_map[i] = new Array();
        for (var j = 0; j <= map[0].length; j++) {
            flag_map[i][j] = true;
        }
    }
    function maze(map, x, y, x2, y2) {
        var x1,
            y1;
        var room = map[x][y].split("");
        if (x == x2 && y == y2) {
            flag_way.push([x, y]);
            // flag_map[x][y] = false;
            if (way.length == 0) {
                way = flag_way.slice();
            }
            else if (flag_way.length < way.length) {
                way = flag_way.slice();
            }
            flag_way.pop();
            return;
        }
        for (var i = 0; i < room.length; i++) {
            // 选择一个出口。
            if (room[i] == 1) {
                // 路径保存在 way 中。
                flag_way.push([x, y]);
                flag_map[x][y] = false;
                // 判断行走方向。
                // 上
                if (i == 0) {
                    x1 = x - 1;
                    y1 = y;
                }
                // 右上
                else if (i == 1) {
                    x1 = x - 1;
                    y1 = y + 1;
                }
                // 右
                else if (i == 2) {
                    x1 = x;
                    y1 = y + 1;
                }
                // 右下
                else if (i == 3) {
                    x1 = x + 1;
                    y1 = y + 1;
                }
                // 下
                else if (i == 4) {
                    x1 = x + 1;
                    y1 = y;
                }
                // 左下
                else if (i == 5) {
                    x1 = x + 1;
                    y1 = y - 1;
                }
                // 左
                else if (i == 6) {
                    x1 = x;
                    y1 = y - 1;
                }
                // 左上
                else if (i == 7) {
                    x1 = x - 1;
                    y1 = y - 1;
                }
                if (flag_map[x1][y1]) {

                    maze(map, x1, y1, x2, y2);
                }
                // 寻找下个出口 清除 way 最后的一个坐标
                flag_way.pop();
                flag_map[x][y] = true;
            }
        }
    }
    maze(map, x, y, x2, y2);
    for (var i = 0; i < way.length; i++) {

        var dd = "#" + way[i].join("-")
        $(dd).html(i);
    }
}
// find_way(generate_map(a, b), 0, 0, a, b);

