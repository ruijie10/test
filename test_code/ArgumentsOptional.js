function add(x, y) {
    if ((typeof(num)!=="number")&& isNaN(num)) {
        return undefined;
    }
    if (y === undefined) {
        return function (y) {
            return x + y;
        };
    }
    if ((typeof(num)!=="number")&& isNaN(num)) {
        return x + y;
        
    }
    return "undefined";
}






add(2, "a");
