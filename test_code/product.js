function product(x) {
    if (x == 1) {
        return 1;
    } else {
        return x * product(x - 1);
    }

}


product(5)