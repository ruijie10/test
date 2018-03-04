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
            x++;
            if (flag_mun[i] && x < m.length) {
                if (k == n) {
                    arr_mun.push(m.slice(i, x));
                    for (var j = 0; j < arr_mun.length; j++) {
                        a += parseInt(arr_mun[j])
                    }
                    a += parseInt(m.slice(x));
                    if (plus < a) {
                        plus = a
                    }
                    return;
                }
                else {
                    arr_mun.push(m.slice(i, x));
                    flag_mun[i] = false;
                }

                add(m, k + 1, x)
                arr_mun.pop()
                flag_mun[i] = true;

            }
        }
    }
    add(m, 1, 0)
    return plus;
}
button('1234567', 3)