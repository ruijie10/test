function button(m, n) {
    // var m = document.getElementById("mun").value;
    // var n = parseInt(document.getElementById("plus").value)
    var arr_mun = [];
    var flag_mun = [];
    var plus = 0;
    for (var i = 0; i < m.length - 1; i++) {
        flag_mun[i] = true;
    }
    if (m.length <= n) {
        console.log("无最大和");
        return;
    }
    function add(m, k) {
        for (var i = 0; i < m.length - 1; i++) {
            if (flag_mun[i] && k <= n) {
                arr_mun.push(i);
                for (var x = 0; x <= i; x++) {
                    flag_mun[x] = false;
                }
                add(m, k + 1)
                arr_mun.pop()
                for (var y = m.length - 2; y > i; y--) {
                    flag_mun[y] = true;
                }
            }
        }
        if (arr_mun.length == n) {
            var b = 0;
            var a = 0;
            var c = '';
            var d = 0;
            for (var j = 0; j < n; j++) {
                a = arr_mun[j]
                c += (m.slice(d, a + 1)) + '+';
                b += parseInt(m.slice(d, a + 1))
                d += m.slice(d, a + 1).length;
                if (j == n - 1) {
                    c = c + (m.slice(a + 1)) + '=';
                }
            }
            b += parseInt(m.slice(a));
            if (plus < b) {
                plus = b;
            }
            console.log(c, b);
        }
    }
    add(m, 1)
    console.log('\n');
    console.log("最大和：" + plus);
}
button('1234567890', 5)