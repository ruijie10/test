function translate(str) {
  var yuanyin=["a","e","i","o","u"];
   
  if(yuanyin.indexOf(str[0]) !== -1){
    return str+"way";
    
  }
  while(yuanyin.indexOf(str[0]) == -1){
   var s=str.split("");
    var l=s.push(s[0]);
    str=s.join("");
    str=str.substr(1);
  }
  
  return str+"ay";

}

translate("consonant");


