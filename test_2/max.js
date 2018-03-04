function button(m, n) {
    // var m = document.getElementById("mun").value;
    // var n = parseInt(document.getElementById("plus").value)
    var arr_mun = [];
    var flag_mun = [];
    var plus = 0;
    for (let i = 0; i < m.length - 1; i++) {
        flag_mun[i] = true;
    }
    if (m.length <= n) {
        console.log("无最大和");
        return;
    }
    function add(m, k) {
        for (let i = 0; i < m.length - 1; i++) {
            if (flag_mun[i] && k <= n) {
                arr_mun.push(i);
                for (let x = 0; x <= i; x++) {
                    flag_mun[x] = false;
                }
                add(m, k + 1)
                arr_mun.pop()
                for (let y = m.length - 2; y > i; y--) {
                    flag_mun[y] = true;
                }
            }
        }
        if (arr_mun.length == n) {
            var b = 0;
            var a;
            var c = '';
            for (let j = 0; j < arr_mun.length; j++) {
                a = arr_mun[j]
                if (j < arr_mun.length - 1) {
                    c += (m.slice(j, a + 1)) + '+';
                    b += parseInt(m.slice(j, a + 1))
                } else {
                    c += (m.slice(a)) + ' ='
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
button('1234567', 4)