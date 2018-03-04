function button() {
    var m = document.getElementById("mun").value;
    var n = parseInt(document.getElementById("plus").value)
    var arr_mun = [];
    var flag_mun = [];
    var plus = 0;
    for (var i = 0; i < m.length - 1; i++) {
        flag_mun[i] = true;
    }
    if (m.length <= n) {
        $("#add").html("无最大和");
        return;
    }
    function add(m, k) {
        for (var i = 0; i < m.length - 1; i++) {
            if (flag_mun[i] && k <= n) {
                arr_mun.push(i);
                for (let k = 0; k <= i; k++) {
                    flag_mun[k] = false;
                }
                add(m, k + 1)
                arr_mun.pop()
                for (let k = m.length - 2; k > i; k--) {
                    flag_mun[k] = true;
                }
            }
        }
        if (arr_mun.length == n) {
            var b = 0;
            for (var j = 0; j < arr_mun.length; j++) {
                var a = arr_mun[j]
                if (j < arr_mun.length - 1) {
                    b += parseInt(m.slice(j, a + 1))
                }
            }
            b += parseInt(m.slice(a));
            if (plus < b) {
                plus = b;
            }
        }
    }
    add(m, 1)
    $("#add").html("最大和：" + plus);
}
button()