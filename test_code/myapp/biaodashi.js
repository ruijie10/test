var a = /user\d/;
var b = /user\d/g;
var str = "user18dsdfuser2dsfsd";
var rs = a.exec(str); 
var rs2 = a.exec(str);

var rs3 = b.exec(str);
var rs4 = b.exec(str);
console.log(rs)
console.log(rs2)
console.log(rs3)
console.log(rs4)
