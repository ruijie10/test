function button() {
    var text_mun = document.getElementById("mun").value;
    var n = parseInt(document.getElementById("plus").value)
    var flag_mun = [];
    var arr_mun = new Array();
    var arr = [];
    var b = 0;
    var c = 0;
    for (var i = 0; i < text_mun.length; i++) {
        flag_mun[i] = true;
    }
    function add(mun, n, x) {
        for (var j = 0; j < mun.length - 1; j++) {
            if (flag_mun[j]) {
                var a = mun.slice(j, x)
                arr_mun.push(a);
                flag_mun[j] = false;
                if (x < mun.length - n) {
                    add(mun, n, x + 1)
                }

                flag_mun[j] = true;
                arr_mun.pop()

            }
        }

        // b = parseInt(mun.slice(i, xx));
        // c += b;
        // flag += 1;
        // number1 = c;
        // m = parseInt(mun.slice(i + 1))
        return arr_mun
    }
    add(text_mun, n, 0);
    $('#number').html(arr_mun);
}

