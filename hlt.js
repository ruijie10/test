
$(document).ready(function () {
    $("#start").click(function () {
        $("#start").hide();
        $("#guanka").show();
    });
    $(".next").click(function () {
        $(".wancheng").hide();
        $("#guanka").show();
        i=1;
    });
    $("#determine").click(function () {
        var n = $("#text").find("option:selected").text();
        $("#guanka").hide();
        
        for (var i = 1; i <= n; i++) {
            $("#hltshow").show();
            $("#" + i + "a").show();
            s = $(".hlta").children("button:visible").text();
        }


    });
    var h = 0;
    var flg = 1;//判断柱子是否重复选择
    var f = 2;//判断柱子是否重复选择
    var d;//没有影藏的第一个 button 的 id；
    var x = 0;//没有影藏的第一个 button 的 text；
    var y;//柱子的序号 a,b,c 三根；
    var z;//上一次选择的柱子；
    var w;//当前选择的柱子 a;b;c；
    var m;//当前选择的 button 的 text；
    var s;//a 柱全部显示的 button；
    var s1;//c柱全部显示的 button；
    $(".zhuzi").click(function () {

        w = $(this).children("h3").text()
        m = $(this).children("button:visible").first().text();
        if (z == w) {
            $(this).children("button:visible").first().css("border-color", "black");
            d = 0;
            x = 0;
            flg = 1;
        } else {
            z = w;
        }

        if (flg == 1) {
            if (f == 2) {
                $("button").css("border-color", "black");
                $(this).children("button:visible").first().css("border-color", "red");
                d = $(this).children("button:visible").first();
                x = $(this).children("button:visible").first().text();
                flg = 0;
                f = 3;
            } else {
                f = 2;
            }

        }
        else {
            if (x > m || m == "") {
                $(d).hide();
                y = $(this).children("h3").text()
                $("#" + x + y).show();
                s1 = $(this).children("button:visible").text();
                flg = 1;
                f = 2;
                if (s == s1) {
                    $(".zhuzi").hide();
                    $(".wancheng").show();
                }
            } else {
                $("button").css("border-color", "black");
                flg = 1;
                f = 2;
            }

        }

    });


});
