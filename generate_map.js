function generate_map(n, m) {
    var map = new Array();
    for (var i = 0; i <= n; i++) {
        map[i] = new Array();
        for (var j = 0; j <= m; j++) {
            if (i > 0 && i < n) {
                map[i][j] = "10001000";
            }
            else if (i == 0 && j == 0) {
                map[i][j] = "00001000";
            }
            else if (i == 0 && j == m) {
                map[i][j] = "00001010";
            }
            else if (i == n && j == 0) {
                map[i][j] = "10100000";
            }
            else if (i == n && j == m) {
                map[i][j] = "10000000";
            }
            else if (i == 0 && j != 0 && j != m && j % 2 != 0) {
                map[i][j] = "00101000";
            }
            else if (i == 0 && j != 0 && j != m && j % 2 == 0) {
                map[i][j] = "00001010";
            }
            else if (i == n && j != 0 && j != m && j % 2 != 0) {
                map[i][j] = "10000010";
            }
            else if (i == n && j != 0 && j != m && j % 2 == 0) {
                map[i][j] = "10100000";
            }
        }
    }


    return map;


}

// generate_map(10, 10)
module.exports = generate_map;
