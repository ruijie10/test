function telephoneCheck(str) {
    // 祝你好运
    var a = str.split("").reverse();
    if (a[4] == a[8] == "-" || a[4] == a[8] == " ") {
        for (var i = 0; i < a.length; i++) {
            if (isNaN(a[i] && i !== 4 && i !== 8)) {
                return false;
            }
            if (a.length == 13 && a[13] == 1) {
                return true;
            }

            if (a.length > 13) {

                return false;
            }
            return false;
        }
        
        return false;
    }

    return true;
}



telephoneCheck("1555-555-5555");
  //5555 - 555 - 5  5  5
  //0123 4 567 8 9 10  11