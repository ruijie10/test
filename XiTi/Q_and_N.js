function q_and_n(str) {
var num=/(?<=\()\S+(?=\))/;

var a=str.match(num)
var b=a[0].match(num)
console.log(a)
console.log(b)

}
q_and_n("2Q(3Q(2N4))")