
var map = [
    ['00100000', '00100010', '00001110'],
    ['00101000', '01101010', '10000010'],
    ['10000000', '10100000', '00000011']
]
// var map = [
//     ["00100000", "00000010"],
//     ["00100000", "00000010"]
// ]
function find_way(map) {
    var way = [];
    var new_way = [];
    var flag = 0;
    var way2 = [];
    function maze(map, x, y, x2, y2) {
        var x1,
            y1;
        var a,
            b;
        var w,
            m;
        var arr = [];
        var repeat = 0;
        var room = map[x][y].split("");
        a = x;
        b = y;
        // 判断是否到终点。
        if (a == x2 && b == y2) {
            way.push([x, y]);
            return;
        }
        for (var i = 0; i < room.length; i++) {
            // 选择一个出口。
            if (room[i] == 1) {
                // 路径保存在 way 中。
                way.push([x, y]);
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
                // way 中数组转换为字符串。
                for (var j = 0; j < way.length; j++) {
                    arr.push(way[j].join(""));
                }
                // 下一个坐标转换成字符串
                w = [x1, y1];
                w = w.join("");
                // 遍历路径 路径是否回头。
                for (var k = 0; k < arr.length; k++) {
                    if (w == arr[k]) {
                        repeat = 1;
                        break;
                    }
                    else {
                        repeat = 0;
                    }
                }
                if (repeat == 0) {
                    maze(map, x1, y1, x2, y2);
                }
                // 寻找下个出口 清除 way 最后的一个坐标
                if (x1 == x2 && y1 == y2 && flag == 0) {
                    new_way = way;
                    flag = 1;
                    way = [];
                    return;
                } else {
                    way.pop();
                    repeat = 0;
                }
            }
        }
    }
    maze(map, 0, 0, 2, 2);

    for (var i = 0; i < new_way.length; i++) {
        way2.push(new_way[i].join(","))
    }
    console.log(way2.join(" --> "))
}
find_way(map)



