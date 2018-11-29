function every(collection, pre) {
    // Is everyone being true?
    var a = 0;

    for (var x in collection) {

        if (collection[x].hasOwnProperty(pre) && Boolean(collection[x][pre])) {
            a++;
        }
    }
    if (a == collection.length) {
        return true;
        // console.log(1);
    } 
    else {
        return false;
        // console.log(2);
    }
    //return keys;

}

every([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");
