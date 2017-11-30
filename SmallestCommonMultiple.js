/*找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。

范围是两个数字构成的数组，两个数字不一定按数字顺序排序。

例如对 1 和 3 —— 找出能被 1 和 3 和它们之间所有数字整除的最小公倍数。
 */
function smallestCommons(arr) {
    var cheng = 1;
    var newarr = [];
    var bei = [];
    var gongbei = [];
    var ax=0;
    var zuixiao
    arr.sort(function (a, b) {
        return a - b;
    });
    for (var i = arr[0]; i <= arr[1]; i++) {
        newarr.push(i);
        cheng *= i;
    }

    for (var j = 1; j <= cheng; j++) {

        bei.push(j);
    }
    function beishu(bei,x,arr) {
        for (var a = 0; a < newarr.length; a++) {

            if (bei % arr[a] == 0) {
                x++;
            } else {
                x = 0;
                break;

            }
        }
        return x;
    }

    for (var b = 0; b < bei.length; b++) {

        if (beishu(bei[b],ax,newarr) === newarr.length) {
            gongbei.push(bei[b]);
            zuixiao = gongbei[0];
        }

    }
    return zuixiao;
};


smallestCommons([1, 3]);
