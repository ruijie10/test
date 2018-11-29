function convert(num) {
    
  var x=num.toString();
  var arr=[];
  var arr1=[];
  arr=x.split("").reverse();
  switch(arr[0]){
      
       case "0":  arr.splice(0, 1, "");
      break;
    case "1":  arr.splice(0, 1, "I");
      break;
       case "2":  arr.splice(0, 1, "II");
      break;
      
       case "3":  arr.splice(0, 1, "III");
      break;
      
       case "4":  arr.splice(0, 1, "IV");
      break;
       case "5":  arr.splice(0, 1, "V");
      break;
       case "6":  arr.splice(0, 1, "VI");
      break;
       case "7":  arr.splice(0, 1, "VII");
      break;
       case "8":  arr.splice(0, 1, "VIII");
      break;
       case "9":  arr.splice(0, 1, "IX");
      break;
  }
  switch(arr[1]){
      
       case "0":  arr.splice(1, 1, "");
      break;
    case "1":  arr.splice(1, 1, "X");
      break;
       case "2":  arr.splice(1, 1, "XX");
      break;
      
       case "3":  arr.splice(1, 1, "XXX");
      break;
      
       case "4":  arr.splice(1, 1, "XL");
      break;
       case "5":  arr.splice(1, 1, "L");
      break;
       case "6":  arr.splice(1, 1, "LX");
      break;
       case "7":  arr.splice(1, 1, "LXX");
      break;
       case "8":  arr.splice(1, 1, "LXXX");
      break;
       case "9":  arr.splice(1, 1, "XC");
      break;
  }
  switch(arr[2]){
      
       case "0":  arr.splice(2, 1, "");
      break;
    case "1":  arr.splice(2, 1, "C");
      break;
       case "2":  arr.splice(2, 1, "CC");
      break;
      
       case "3":  arr.splice(2, 1, "CCC");
      break;
      
       case "4":  arr.splice(2, 1, "CD");
      break;
       case "5":  arr.splice(2, 1, "D");
      break;
       case "6":  arr.splice(2, 1, "DC");
      break;
       case "7":  arr.splice(2, 1, "DCC");
      break;
       case "8":  arr.splice(2, 1, "DCCC");
      break;
       case "9":  arr.splice(2, 1, "CM");
      break;
  }
  switch(arr[3]){
      
       case "0":  arr.splice(3, 1, "");
      break;
    case "1":  arr.splice(3, 1, "M");
      break;
       case "2":  arr.splice(3, 1, "MM");
      break;
      
       case "3":  arr.splice(3, 1, "MMM");
      break;
      
       case "4":  arr.splice(3, 1, "MMMM");
      break;
       case "5":  arr.splice(3, 1, "V`");
      break;
       case "6":  arr.splice(3, 1, "VI`");
      break;
       case "7":  arr.splice(3, 1, "VII`");
      break;
       case "8":  arr.splice(3, 1, "VIII`");
      break;
       case "9":  arr.splice(3, 1, "L`");
      break;
  }
  arr1=arr.reverse();
 return arr1.join("");
}

s = convert(36);

console.log(s);

l = [1002, 12, 13344, 134, 223, 2333, 566]
//输出每一行 num -> num-roman

//for(var i=0;i<l.length;i++){
//    s=convert(l[i]);
    
//    console.log(l[i],"->",s);
//}
 l.forEach(function(element) {
     console.log(convert(element))
     
 }, this);

console.log(convert(500))


p = [
  {
    "id": 0,
    "imageLink": "/images/funny-cat.jpg",
    "codeNames": [
      "Juggernaut",
      "Mrs. Wallace",
      "Buttercup"
    ]
  },
  {
    "id": 1,
    "imageLink": "/images/grumpy-cat.jpg",
    "codeNames": [
      "Oscar",
      "Scrooge",
      "Tyrion"
    ]
  },
  {
    "id": 2,
    "imageLink": "/images/mischievous-cat.jpg",
    "codeNames": [
      "The Doctor",
      "Loki",
      "Joker"
    ]
  }
]

for(var i=0;i<p.length;i++){
  console.log(p[i])
}