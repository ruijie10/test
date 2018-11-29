function fearNotLetter(str) {
    
    for(var i=0;i<str.length-1;i++){
        if(str.charCodeAt(i)!==str.charCodeAt(i+1)-1){
            var st= String.fromCharCode(str.charCodeAt(i)+1);
            return st;
        }
        
    }
 return undefined;
}

fearNotLetter("abce");
fearNotLetter("bcd");
