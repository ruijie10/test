function sumPrimes(num) {
    var res = 0;
    function isPrimeNum(j) {
        for (var i = 2; i < j; i++) {
            if (j % i == 0) {
                return false;
            }
        };
        return true;

    }
    for (var j = 2; j <= num; j++) {
        if (isPrimeNum(j) === true) {
            res += j;
        }
    }
    return res;

}

sumPrimes(10);
