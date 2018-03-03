// function button(m, n) {
//     // var m = document.getElementById("mun").value;
//     // var n = parseInt(document.getElementById("plus").value)
//     var flag_mun = [];
//     var arr_mun = [];
//     var arr = [];
//     for (var i = 0; i < m.length; i++) {
//         flag_mun[i] = true;
//     }
  
//     function add(mun, n, x) {
//         for (var j = 0; j < n; j++) {
//             for (var i = 0; i < mun.length; i++) {
//                 if (flag_mun[i]) {
//                     var a = mun.slice(i, i + 1)
//                     arr_mun.push(a);
//                     flag_mun[i] = false;
//                     flag++;
//                     if (flag => n) {
//                        arr= arr_mun;
//                         add(mun, n, x + 1)
//                         flag_mun[j] = true;
//                         arr_mun.pop()
//                     }
//                     break;
//                 }

//             }
//         }
//         // }
//         // b = parseInt(mun.slice(i, xx));
//         // c += b;
//         // flag += 1;
//         // number1 = c;
//         // m = parseInt(mun.slice(i + 1))
//         return arr_mun
//     }
//     add(m, n, 0);
//     $('#number').html(arr_mun);
// }

// button('12345', 3)