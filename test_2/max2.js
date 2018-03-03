function button(m, n) {
    // var m = document.getElementById("mun").value;
    // var n = parseInt(document.getElementById("plus").value)
    var arr_mun = [];
    var flag_mun = [];
    var plus = 0;
    var a = 0;
    for (var i = 0; i < m.length; i++) {
        flag_mun[i] = true;
    }
    function add(m, k, x) {
        for (var i = 0; i < m.length - 1; i++) {
            if (flag_mun[i]) {
                if (k > n) {
                    for (var j = 0; j < arr_mun.length; j++) {
                        a += parseInt(arr_mun[j])
                    }
                    a += parseInt(m.slice(i));
                    if (plus < a) {
                        plus = a
                    }
                    return;
                }
                else {
                    arr_mun.push(m.slice(i, i + x));
                    flag_mun[i] = false;
                }

                add(m, k + 1, x)
                arr_mun.pop()
                flag_mun[i] = true;
                x += 1;
            }
        }
    }
    add(m, 1, 1)
    return plus;
}
button('1234567', 3)