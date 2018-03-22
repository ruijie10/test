var express = require('express');
var queen = require('/Users/liruijie/Code/test/test_2/Queen2');
var app = express();

var bodyParser = require('body-parser');
var server = require('http').createServer(app);
app.use(bodyParser.json({ limit: '1mb' }));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
    extended: true
}));

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

var url = require("url");//解析url为对象
var querystring = require('querystring');//解析如‘a=1&b=2’为对象

app.post('/queen3', function (req, res) {
    // console.log(JSON.stringify(req.body));
    var n = req.body.name
    console.log('n===' + n)
    var arr = {};
    for (let i = 1; i <= n; i++) {
        arr[" " + i + " "] = queen(i)
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");

    res.json(arr)
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
