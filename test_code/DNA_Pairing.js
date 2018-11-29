function pair(str) {
    var abc = [];
    var a=["A","T"];
    var t=["T","A"];
    var c=["C","G"];
    var g=["G","C"];
    var s = str.split("");
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "A") {
            abc.push(a);
        }
        if (s[i] == "T") {
            abc.push(t);
        }
        if (s[i] == "C") {
            abc.push(c);
        }
        if (s[i] == "G") {
            abc.push(g);
        }
    }

    return abc;
}

pair("GCG");
