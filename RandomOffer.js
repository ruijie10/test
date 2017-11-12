

$(document).ready(function () {
    $('.bb').click(function () {

        var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12',
            '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

        var colo = Math.floor(Math.random() * colors.length);
        var a = colors[colo];
        var num = Math.floor((Math.random() * 9) + 1);

        var thequote = quotes[num]["quote"];

        var theww = quotes[num]["author"];

        $('#tex').html(thequote);
        $('#tex2').html(theww);
        $("html body").css({ "background-color": colors[colo], "color": colors[colo] });
        $(".bb").css({ "background-color": colors[colo] });

    });

    var text = document.getElementById("tex").innerHTML + document.getElementById("tex2").innerHTML;

});

var quotes = [
    {
        "id": 1,
        "quote": "说出来会被嘲笑的梦想，才有实践的价值。即使跌倒了，姿势也会非常豪迈。",
        "author": "九把刀《猎命师传奇》"
    },
    {
        "id": 2,
        "quote": "我选择沉默的主要原因之一：从话语中，你很少能学到人性，从沉默中却能。假如还想学得更多，那就要继续一声不吭。",
        "author": "王小波《沉默的大多数》"
    },
    {
        "id": 3,
        "quote": "读书有三到，谓心到，眼到，口到。心不在此，则眼看不仔细，心眼既不专一，却只漫浪诵读，决不能记，久也不能久也。三到之中，心到最急，心既到矣，眼口岂不到乎？",
        "author": "朱熹《训学斋规》"
    },
    {
        "id": 4,
        "quote": "梦想还是要有的，万一实现了呢？",
        "author": "马云"
    },
    {
        "id": 5,
        "quote": "生命是以时间为单位的，浪费别人的时间等于谋财害命；浪费自己的时间，等于慢性自杀。",
        "author": "鲁迅"
    },
    {
        "id": 6,
        "quote": "明日复明日，明日何其多？日日待明日，万事成蹉跎。",
        "author": "钱鹤滩《明日歌》"
    },
    {
        "id": 7,
        "quote": "人一到群体中，智商就严重降低，为了获得认同，个体愿意抛弃是非，用智商去换取那份让人倍感安全的归属感。",
        "author": "居斯塔夫 · 勒庞《乌合之众》"
    },
    {
        "id": 8,
        "quote": "三人行，必有我师焉。择其善者而从之，其不善者而改之。",
        "author": "孔子"
    },
    {
        "id": 9,
        "quote": "在别人看不见的地方自律，成功离你更近!",
        "author": "ruijie"
    },
    {
        "id": 10,
        "quote": "这个世界自始至终只有两种人：一种是像我这样的人，一种是不像我这样的人。",
        "author": "王小波"
    }
]






