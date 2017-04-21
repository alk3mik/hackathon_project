/* Florian */

$( document ).ready(function() {

    let viewportH = $(window).height();
    let viewportW = $(window).width();
    let roundTitle = $('.title-wrapper');
    let homeTitle = $('.home-title');

    roundTitle.height(roundTitle.width() + "px");
    // homeTitle.css('line-height', roundTitle.width() + "px");

    if(viewportW < 768) {
       $('.home-logo-toulouse').setAttribute('src', 'img/log_toulouse_260.png');
        roundTitle.animate(
            {
                opacity: '1',
                top: ((viewportH - roundTitle.height()) / 2)
            }, 800);
    }
    else {
        roundTitle.animate(
            {
                // opacity: '1',
                top: ((viewportH / 100) * 2) + "px",
                left: ((viewportH / 100) * 2) + "px",
            }, 800);
    }

    $('.navbar-toggle').on('click', function(e) {
        setTimeout( function() {
            $('.navbar-collapse.in').addClass('rotate-y-anim');
        }, 360);
       $(this).hide();
    });
    // $('.menu-li')

    $('.arrow-down').on('click', function() {
       $(body).scrollTo('#open-data');
    });
    // adjust height of text blocks in page 2 (open-Data)
    if (viewportW > 991 ) {
        let divHeigths = $(".center-it-vertical").map(function() {
                return $(this).height();
            }).get(),
            maxHeight = Math.max.apply(null, divHeigths);

        $(".center-it-vertical").height(maxHeight);

        // $('.re-padd-it').map(function() {
        //     let parentH = $(this).closest('.center-it-vertical').height();
        //     $( this ).css( 'top', ( ( parentH - $( this ).height() ) / 2 ) + 'px' );
        // });
    }
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