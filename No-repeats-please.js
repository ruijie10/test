function permAlone(str) {
    var arr = str.split("");
    var arr_flag = [];
    var newarr = [];
    var newarr_flag = 0;
    var a = 0;
    for (i = 0; i < arr.length; i++) {
        arr_flag[i] = true;
    }

    var arr_list = []

    function create_attr(n, temp_arr) {
        if (n === arr.length) {
            arr_list.push(temp_arr)

            return;
        }

        for (var i = 0; i < arr.length; i++) {
            if (arr_flag[i]) {
                temp_arr.push(arr[i]);
                arr_flag[i] = false;
                create_attr(n + 1, temp_arr);
                temp_arr.pop()  //删掉arr[i]
                arr_flag[i] = true

            }

        }
        for (var i = 0; i < arr_list.length; i++) {
            newarr = arr_list[i];
            for (var j = 0; j < newarr.length - 1; j++) {
                if (newarr[j] === newarr[j + 1]) {
                    newarr_flag = 0;
                }
                else {
                    newarr_flag += 1;
                    if (newarr_flag === newarr.length - 1) {
                        a += 1;
                    }

                }
            }
        }
        return a;
    }
    create_attr(0, []);









}


permAlone('aacb');

