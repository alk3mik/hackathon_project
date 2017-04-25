/* Florian */

$( document ).ready(function() {

    let viewportH = $(window).height();
    let viewportW = $(window).width();
    let roundTitle = $('.title-wrapper');
    let homeTitle = $('.home-title');
    let counterNumber = $('#countdown');


    // start counter
    countingFunc();


    roundTitle.height(roundTitle.width() + "px");
    // homeTitle.css('line-height', roundTitle.width() + "px");


    if ( viewportW > 1199 ) {
        roundTitle.animate(
            {
                opacity: '1',
                top: ((viewportH / 100) * 2) + "px",
                left: ((viewportH / 100) * 2) + "px",
            }, 800);

    }
    else if ( viewportW > 991 ) {
        roundTitle.animate(
            {
                opacity: '1',
                top: (viewportH / 2) - ( roundTitle.height() / 2 ) + "px",
                left: ((viewportH / 100) * 5) + "px",
            }, 800);

        // adjust height of text blocks in page 2 (open-Data)
        let divHeigths = $(".center-it-vertical").map(function() {
                return $(this).height();
            }).get(),
            maxHeight = Math.max.apply(null, divHeigths);

        $(".center-it-vertical").height(maxHeight);
    }
    else if ( viewportW > 768 ) {
        roundTitle.animate(
            {
                opacity: '1',
                top: '50px',
                // height: viewportW / 2 + "px"
                // left: ((viewportH / 100) * 5) + "px",
            }, 800);
    }
    else {
        roundTitle.animate(
            {
                opacity: '1',
                top: '90px',
                // left: ((viewportH / 100) * 5) + "px",
            }, 800);
        $('.home-logo-toulouse').attr('src', 'img/log_toulouse_260.png');

    }

    setTimeout(function () {
        $('.countdown-num').animate({
            opacity: 1
        });
    }, 300);

    $('.navbar-toggle').on('click', function(e) {
            $('.navbar-collapse').show().addClass('rotate-y-anim');
            $('.navbar-toggle').fadeOut(200);
    });
    $('.menu-li').on('click', function(){
        $('.navbar-collapse').removeClass('rotate-y-anim');
        $('.navbar-toggle').fadeIn(500);
    });

    $('.close-menu').on('click', function() {
        $('.navbar-collapse').removeClass('rotate-y-anim');
        $('.navbar-toggle').fadeIn(500);
    });

    $('.arrow-down').on('click', function() {
       $(document).scrollTo('#open-data');
    });
    $('.open-data-link').on('click', function(e) {
       e.preventDefault();
        window.open('https://data.toulouse-metropole.fr/page/home/', '_blank');
    });


});


/* FIN Florian */


/* Noé */

/* FIN Noé */


/* Alk-3mic */

/* FIN Alk-3mic */