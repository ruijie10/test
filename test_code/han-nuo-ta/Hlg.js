
var hlg = function (num, a, b, c) {

    if (num > 0) {
        
        hlg(num - 1, a, c, b);

        console.log("移动" + num + "圆盘" + '从' + a + "移动到" + c);

        hlg(num - 1, b, a, c);
    }
}

hlg(4, "A", "B", "C")