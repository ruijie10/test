
var map = [
    ['00100000', '00100010', '00001110'],
    ['00101000', '01111010', '10000010'],
    ['10000000', '10100000', '00000011']
]
var newarr = [];

var a = 0;
var b;
function find_a_way(map, y1, x1, y2, x2) {
    var arr = map[y1][x1].split("");
    b = [y1, x1];


    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == 1) {

            for (var j = 0; j < newarr.length; j++) {
                if (b.toString() == newarr[j].toString()) {
                    a += 1;
                }
            }

            if (a != 0) {
                a = 0;
                continue;
            }

            newarr.push([y1, x1]);

            switch (i) {
                case 0:

                    find_a_way(map, y1 - 1, x1, y2, x2)

                case 1:

                    find_a_way(map, y1 - 1, x1 + 1, y2, x2)
                case 2:

                    find_a_way(map, y1, x1 + 1, y2, x1)
                case 3:
                    find_a_way(map, y1 + 1, x1 + 1, y2, x2)
                case 4:
                    find_a_way(map, y1 + 1, x1, y2, x2)
                case 5:
                    find_a_way(map, y1 + 1, x1 - 1, y2, x2)
                case 6:
                    find_a_way(map, y1, x1 - 1, y2, x2)
                case 7:
                    find_a_way(map, y1 - 1, x1 - 1, y2, x2)
            }

        }

    }
   return newarr;
    

}
console.log(newarr) ;

find_a_way(map, 0, 0, 2, 2)













