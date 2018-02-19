function permAlone(str) {
    var arr = str.split("");
    var arr_flag = [];
    var newarr = [];

    var a = 0;
    for (i = 0; i < arr.length; i++) {
        arr_flag[i] = true;
    }
    function create_attr(n, temp_arr) {
        if (n === arr.length) {
            a += 1;
        }
        for (var i = 0; i < arr.length; i++) {
            if (arr_flag[i] && (n == 0 || arr[i] != temp_arr[n - 1])) {
                temp_arr.push(arr[i]);
                arr_flag[i] = false;
                create_attr(n + 1, temp_arr);
                temp_arr.pop()  //删掉arr[i]
                arr_flag[i] = true
            }

        }
    }
    create_attr(0, []);


    return a;
}


console.time("abb");
console.log('abb:', permAlone('abb'))
console.timeEnd("abb");
console.log('\n')

console.time("abab");
console.log('abab:', permAlone('abab'))
console.timeEnd("abab");
console.log('\n')

console.time("abc");
console.log('abc:', permAlone('abc'));
console.timeEnd("abc");
console.log('\n')

console.time("abccddryggd");
console.log('abccddryggd:', permAlone('abccddryggd'));
console.timeEnd("abccddryggd");
