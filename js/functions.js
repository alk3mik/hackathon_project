

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
                opacity: '1',
                top: ((viewportH / 100) * 2) + "px",
                left: ((viewportH / 100) * 2) + "px",
            }, 800);
    }

});