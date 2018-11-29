var hanoi = function (disc, a, b, c) {

    if (disc > 0) {

        hanoi(disc - 1, a, c, b);

        console.log(' 移动 ' + disc + ' 号圆盘 ' + ' 从 ' + a + ' 移动到 ' + c);

        hanoi(disc - 1, b, a, c)

    }

}

hanoi(3, 'A', 'B', 'C')