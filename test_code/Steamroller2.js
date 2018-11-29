var newarr=[];
function steamroller(arr) {
    
    // I'm a steamroller, baby
    for (var i = 0; i < arr.length; i++)
        if (arr[i] instanceof Array) {
            steamroller(arr[i]);
        } else {
             newarr.push(arr[i]);
           
        }
    return newarr;
}

steamroller([1, [2], [3, [[4]]]]);
