var express = require('express');
var queen = require('/Users/liruijie/Code/test/test_2/Queen2');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello ruijie');
});

app.get('/add', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    // var a = 4;
    // var b = 78;
    var c = a + b;

    res.send(c.toString());
});
app.get('/queen2', function (req, res) {
    var n = parseInt(req.query.n);
    var str = new Object();
    for (let i = 1; i <= n; i++) {
        str[" " + i + " "] = queen(i)
    }
    console.log(str)
    var str2 = JSON.stringify(str)
    res.send(str2);
    // res.send(JSON.parse(str2));

});

app.get('/queen1', function (req, res) {
    var n = parseInt(req.query.n);
    res.send(queen(n).toString());
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
