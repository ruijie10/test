
var map = [
    ['00100000', '00100010', '00001110'],
    ['00101000', '01111010', '10000010'],
    ['10000000', '10100000', '00000011']
]
var w,
    arr = [],
    a,
    b;

var way = [];
var repeat = 0;
function maze(map, x, y, n) {
    var room = map[x][y].split("");
    a = x;
    b = y;
    // 判断是否到终点。
    if (a == 2 && b == 2) {
        return;
    }

    for (var i = 0; i < room.length; i++) {
        // 选择出口。
        if (room[i] == 1) {
            // 路径保存在 way 中。
            way.push([x, y]);
            // 判断行走方向。
            // 上
            if (i == 0) {
                x = x - 1;
            }
            // 右上
            else if (i == 1) {
                x = x - 1;
                y = y + 1;
            }
            // 右
            else if (i == 2) {
                y = y + 1;
            }
            else if (i == 3) {
                x = x + 1;
                y = y + 1;
            }
            else if (i == 4) {
                x = x + 1;
            }
            else if (i == 5) {
                x = x + 1;
                y = y - 1;
            }
            else if (i == 6) {
                y = y - 1;
            }
            else if (i == 7) {
                x = x - 1;
                y = y - 1;
            }
            // way 中数组转换为字符串。
            for (var j = 0; j < way.length; j++) {
                
                arr.push(way[j].join(""));
            }
            // 下一个坐标转换成字符串
            w = [x, y];
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
                maze(map, x , y , n);
            }
            // 寻找下个出口 清除 way 最后的一个坐标
            way.pop();
            repeat = 0;
        }



    }
    return way;
}


maze(map, 0, 0, 0);




