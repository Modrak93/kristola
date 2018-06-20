(function ($) {
    "use strict"; // Start of use strict

// Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // -------------------------------------------------------------
    //  Slick Slider
    // -------------------------------------------------------------  

    $(".main-slider").slick({
        infinite: true,
        dots: true,
        accessibility: false,
        arrows: false,
        easing: 'ease-in',
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    $(".workplace-slider").slick({
        infinite: true,
        dots: true,
        accessibility: false,
        arrows: false,
        easing: 'ease-in',
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        slidesToScroll: 1
    });
    
    $(document).scroll(function () {
        var y = $(document).scrollTop(),
           nav = $("#menu");


        if (y > 200 && parseInt($(window).width()) > 991) {
            //show the image and make the header fixed
            nav.addClass('animated fadeInDown fixed-top d-block');
        } else {
            //put the header in original position and hide image
            nav.removeClass('fixed-top clone d-block');
        }
        
        });
    
        // MENU
//    
//        $(document).ready(function() {
//        var $nav = $("#menu"),
//            $clone = $nav.before($nav.clone().addClass("clone"));
//        
//        $(window).on("scroll", function() {
//            var fromTop = $(window).scrollTop();
//            $("body").toggleClass("down", (fromTop > 110));
//        });
//    });
})(jQuery);	// End of use strict