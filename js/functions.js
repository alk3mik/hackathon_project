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

    $('.navbar-toggle').on('click', function() {
       $(this).hide();
    });

    // adjust height of text blocks in page 2 (open-Data)
    if (viewportW > 991 ) {
        let textHeigths = $(".same-height").map(function() {
                return $(this).height();
            }).get(),
            maxHeight = Math.max.apply(null, textHeigths);
        $(".same-height").height(maxHeight);
        $('.center-it-vertical').map(function() {
            let parentH = $(this).closest('p').height();
            $( this ).css( 'top', ( ( parentH - $( this ).height() ) / 2 ) + 'px' );
        });
    }


});


/* FIN Florian */


/* Noé */

/* FIN Noé */


/* Alk-3mic */

/* FIN Alk-3mic */