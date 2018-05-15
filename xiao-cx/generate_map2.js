function generate_map(n, m) {
    var map = new Array();
    for (var i = 0; i <= n; i++) {
        map[i] = new Array();
        for (var j = 0; j <= m; j++) {
            // 中间
            if (i > 0 && i < n) {
                map[i][j] = "10001000";
            }
            // 开始
            else if (i == 0 && j == 0) {
                map[i][j] = "00001000";
            }
            // 右上角奇数
            else if (i == 0 && j == m && j % 2 != 0) {
                map[i][j] = "00001000";
            }
            // 右上角偶数
            else if (i == 0 && j == m && j % 2 == 0) {
                map[i][j] = "00001010";
            }
            //左下角
            else if (i == n && j == 0) {
                map[i][j] = "10100000";
            }
            // 右下角
            else if (i == n && j == m) {
                map[i][j] = "10000010";
            }
            // 第一排偶数 
            else if (i == 0 && j > 0 && j < m && j % 2 == 0) {
                map[i][j] = "00001010";
            }
            // 第一排奇数
            else if (i == 0 && j > 0 && j < m && j % 2 != 0) {
                map[i][j] = "00101000";
            }


            // 最后一排
            else if (i == n && j < m && j > 0) {
                map[i][j] = "10100010";
            }

        }
    }
    // for (var i = 0; i < map.length; i++) {
    //     console.log(map[i])
    // }
    return map;
}
// generate_map(3, 3)
