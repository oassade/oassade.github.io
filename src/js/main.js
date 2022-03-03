$(document).ready(function () {


    setLanguage('fr'); 
    var arab = $("#languageindic").html == "FR" ? true : false ;
    // alert(arab)
    if(arab)
    {
        $("#languageindic a").html("AR");
        $("#fr").html("AR/FR");
    }else{
        $("#languageindic a").html("FR");
        $("#fr").html("AR/FR");
    }
    $("#fr").click(function(){
        if(arab)
        {
            setLanguage('fr'); 
            $("body").removeClass("ar");
            $("#mainmenu").removeClass("ar");
            $("#fr").html("AR/FR");
            arab = false ;
        }else{
            setLanguage('ar');
            $("body").addClass("ar");
            $("#mainmenu .nav-item a").addClass("ar");
            $("#fr").html("AR/FR");
            arab = true ;
        }
       
    });
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