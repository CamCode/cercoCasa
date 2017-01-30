$(document).ready(function() {

    $(".player").mb_YTPlayer();


    //menu fixed scroll 

    var nav = $('#nav-cerco');
    $(window).scroll(function() {
        //muestra menu al hacer scroll
        if ($(this).scrollTop() > 148) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }


    });

    if ($(window).width() < 640) {

        $('#nav-items').hide();

        $('.navbar-toggle').click(function() {
            // $('').slideDown();
            $('#nav-items').slideToggle("slow", function() {

            });
        });
        $('#nav-items li').click(function() {
            $('#nav-items').slideUp();
        });

    }

   




});
