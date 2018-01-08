$(document).ready(function () {
    $("#start").click(function () {
        $("#start").hide();
        $("#guan").show();
    });
    $("#determine").click(function () {
        var n=$("#text").find("option:selected").text();
        $("#guan").hide();
        $("#hltshow").show();
      /* if(b==1){
        
            $("#1a").show();
            $("#2a").show();
        }
         if(n==2){
            $("#hltshow").show();
            $("#1a").show();
            $("#2a").show();
            $("#3a").show();
         }
         if(n==3){
            $("#hltshow").show();
            $("#1a").show();
            $("#2a").show();
            $("#3a").show();
            $("#4a").show();
         }
         if(n==4){
            $("#hltshow").show();
            $("#1a").show();
            $("#2a").show();
            $("#3a").show();
            $("#4a").show();
            $("#5a").show();
         }
       */
    });
    $("button").click(function () {
       
       
       
    });
});