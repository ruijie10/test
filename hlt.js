
$(document).ready(function () {
    $("#start").click(function () {
        $("#start").hide();
        $("#guan").show();
    });
    $("#determine").click(function () {
        var n = $("#text").find("option:selected").text();
        $("#guan").hide();
        $("#hltshow").show();
        for (var i = 1; i <= n; i++) {
            $("#" + i + "a").show();
        }


    });


    $(".zhuzi").click(function () {
        var flg = 1;
        if (flg == 1) {
            $(this).children("button:visible").first().css("border-color", "red");
            var d = $(this).children("button:visible").first();
            var x = $(this).children("button:visible").first().text();
            var flg = 0;
        } else {
            $(d).hide();
            var y = $(this)
            $("#" + x + y[0]).show();

        }

    });

});
