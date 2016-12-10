$(document).ready(function () {

    $(".player").mb_YTPlayer();


    //menu fixed scroll 

	var nav = $('#nav-cerco');
   $(window).scroll(function () {
    //muestra menu al hacer scroll
        if ($(this).scrollTop() > 148) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }    
        
    
    });


});