window.onload = function () {
    var aimg = document.getElementsByClassName("imga"),
        bimg = document.getElementsByClassName("imgb")
    console.log(bimg)
    var num = 0;
    var num2 = 0;
    var flag = 0;
    setInterval(function () {
        num++;
        if (num < aimg.length) {
            for (let i = 0; i < aimg.length; i++) {
                aimg[i].style.display = 'none';
            }
            aimg[num].style.display = 'block';
        }
        else {
            num = 0;
        }

        if (num2 < bimg.length - 2) {
            for (let i = 0; i < bimg.length; i++) {
                bimg[i].style.display = 'none';
            }
            if (flag == 0) {
                if (num2 == 0) {
                    num2 += 2
                } else {
                    num2++;
                }
                bimg[num2].style.display = 'block';
                num2++;
                bimg[num2].style.display = 'block';
                num2++;
                bimg[num2].style.display = 'block';
                num2++;
                bimg[num2].style.display = 'block';
                flag = 1
            }
            else if (flag == 1) {
                num2++;
                bimg[num2].style.display = 'block';
                num2++;
                bimg[num2].style.display = 'block';
                flag = 0
            }
        } else {
            num2 = 0;
            flag = 0;
        }
    }, 3000)
    $(function () {
        $("#a0").hover(function () {
            $("#forum-0").css("display", "block");
            $("#forum-1").css("display", "none");
            $("#forum-2").css("display", "none");
            $("#forum-3").css("display", "none");
            $("#forum-4").css("display", "none");
        });
        $("#a1").hover(function () {
            $("#forum-1").css("display", "block");
            $("#forum-0").css("display", "none");
            $("#forum-2").css("display", "none");
            $("#forum-3").css("display", "none");
            $("#forum-4").css("display", "none");
        });
        $("#a2").hover(function () {
            $("#forum-2").css("display", "block");
            $("#forum-1").css("display", "none");
            $("#forum-0").css("display", "none");
            $("#forum-3").css("display", "none");
            $("#forum-4").css("display", "none");
        });
        $("#a3").hover(function () {
            $("#forum-3").css("display", "block");
            $("#forum-1").css("display", "none");
            $("#forum-2").css("display", "none");
            $("#forum-0").css("display", "none");
            $("#forum-4").css("display", "none");
        });
        $("#a4").hover(function () {
            $("#forum-4").css("display", "block");
            $("#forum-1").css("display", "none");
            $("#forum-2").css("display", "none");
            $("#forum-3").css("display", "none");
            $("#forum-0").css("display", "none");
        });
    });

    $(function () {
        $(".tb-fl").hover(function () {
            $(this).css("background", "#ffb86c");
            // $(".cd-list").css("display", "block")
        }, function () {
            $(this).css("background", "#fff");
            // $(".cd-list").css("display", "none")
        }
        );
    });

   
}
