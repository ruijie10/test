function where(collection, source) {
    var srcKeys = Object.keys(source);

    // filter the collection
    return collection.filter(function (obj) {

        var flag = true;
        for (var i = 0; i < srcKeys.length; i++) {

            if (obj.hasOwnProperty(srcKeys[i]) && obj[srcKeys[i]] == source[srcKeys[i]]) {
                //flag = flag && true
            } else {
                flag = false
            }
        }

        return flag;
    });
}


s = where([{ "a": 1, "b": 2 },
{ "a": 1 },
{ "a": 1, "b": 2, "c": 2 }],
    { "a": 1, "b": 2 })
    console.log(s)