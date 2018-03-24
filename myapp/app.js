var express = require('express');
var queen = require('/Users/liruijie/Code/test/test_2/Queen2');
var app = express();

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

function ruijiesend(res, arr) {
    // res.header('Content-Type', 'application/json;charset=utf-8');
    arr_json = JSON.stringify(arr);
    res.send(arr_json);
}
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
app.get('/queen1', function (req, res) {
    var n = parseInt(req.query.n);
    res.send(queen(n).toString());
});

app.get('/queen2', function (req, res) {
    var n = parseInt(req.query.n);
    var arr = {};
    for (let i = 1; i <= n; i++) {
        arr[" " + i + " "] = queen(i)
    }
    console.log(arr)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    ruijiesend(res, arr)
    // res.json(arr)
});

app.post('/queen3', function (req, res) {
    console.log(req.body)
    var n = req.body.name
    console.log(n)
    var arr = {};
    for (let i = 1; i <= n; i++) {
        arr[" " + i + " "] = queen(i)
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.json(arr)
});

app.post('/user/signup/:name', function (req, res) {
    var n = req.params.name;
    var x = req.param('name')
    console.log('n==' + n)
    console.log('x==' + x)
    res.send(n)
})
// app.post('/user?name=tobi', function (req, res) {
//     var n = req.param('name');
//     console.log('n==' + n)
//     res.send(n)
// })
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

