$(document).ready(function () {
    $("#closem").hide();
    $("#closem").click(function() {
        $("#mainmenu").removeClass("active");
        $("#closem").removeClass("activem");
        $("#closem").hide();
        $(".navbar").show();
    });

    $("#openm").click(function() {
        $("#mainmenu").addClass("active");
        $("#closem").addClass("activem");
        $("#closem").show();
        $(".navbar").hide();
    });
})