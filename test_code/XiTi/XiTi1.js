// var obj2 = { a: 1, b: { c: "hello", d: "world" } }
// var str2 = JSON.stringify(obj2);
// console.log('str==' + str2)

var str1 = '{ a: 1, b: { c: "hello", d: "world" } }'
function myjson(obi_str) {
    var str = '';
    for (let i = 0; i < obi_str.length; i++) {
        if (obi_str[i] == '{') {
            str += '{ "'
        }
        else if (obi_str[i] == ':') {
            str += '" :'
        }
        else if (obi_str[i] == ',') {
            str += ', "'
        }
        else {
            str += obi_str[i]
        }
    }
    str = str.replace(/\s*/g, "")
    console.log('str==' + str)
    console.log(typeof (str))
    console.log(JSON.parse(str))
}
myjson(str1)
