function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  var arr = str.split(" ");
  for (var i = 1; i < arr.length; i += 2) {
    var x = arr.splice(i, 0, "-")
  }
  
  var newstr = arr.join(" ").replace(/\s+/g,"");
newstr=newstr.toLowerCase();
  return newstr;
}

spinalCase('This Is Spinal Tap');
