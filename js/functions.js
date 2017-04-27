/* Florian */
"use strict";
$(document).ready(function () {

    let viewportH = $(window).height();
    let viewportW = $(window).width();
    let roundTitle = $('.title-wrapper');
    let menuW = $('.menu-ul').width();
    let closeIcon = $('.close-menu');


    // start counter
    countingFunc();


    roundTitle.height(roundTitle.width() + "px");

    if ( viewportW > 1199 ) {
        roundTitle.animate(
            {
                opacity: '1',
                top: ((viewportH / 100) * 2) + "px",
                left: ((viewportH / 100) * 2) + "px",
            }, 800);
        // adjust height of text blocks in page 2 (open-Data)
        let divHeigths = $(".resize-it-vertical").map(function() {
                return $(this).height();
            }).get(),
            maxHeight = Math.max.apply(null, divHeigths);

        $(".resize-it-vertical").height(maxHeight);

    }
    else if ( viewportW > 991 ) {
        if (window.matchMedia("(orientation: landscape)").matches) {
            roundTitle.animate(
                {
                    opacity: '1',
                    top: (viewportH / 2) - ( roundTitle.height() / 2 ) + "px",
                    left: ((viewportH / 100) * 5) + "px",
                }, 800);
        }
        else {
            roundTitle.animate(
                {
                    opacity: '1',
                    top: 80
                }, 800);
        }
        closeIcon.css('left', (menuW / 2) - (closeIcon.width() / 2) + "px");

        // adjust height of text blocks in page 2 (open-Data)
        let divHeigths = $(".resize-it-vertical").map(function() {
                return $(this).height();
            }).get(),
            maxHeight = Math.max.apply(null, divHeigths);

        $(".resize-it-vertical").height(maxHeight);
    }
    else if ( viewportW > 768 ) {
        roundTitle.animate(
            {
                opacity: '1',
                top: '25px',
            }, 800);

        closeIcon.css('left', (menuW / 2) - (closeIcon.width() / 2) + "px");
    }
    else {
        roundTitle.animate(
            {
                opacity: '1',
                top: '40px',
            }, 800);
        closeIcon.css('left', (menuW / 2) - (closeIcon.width() / 2) + "px");
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
    $('.menu-li').on('click', function () {
        $('.navbar-collapse').removeClass('rotate-y-anim');
        $('.navbar-toggle').fadeIn(500);
    });

    $('.close-menu').on('click', function () {
        $('.navbar-collapse').removeClass('rotate-y-anim');
        $('.navbar-toggle').fadeIn(500);
    });


    $('.arrow-down').on('click', function() {
       window.scrollTo(0, $('#open-data').offset().top);
    });
    $('.open-data-link').on('click', function(e) {
       e.preventDefault();
        window.open('https://data.toulouse-metropole.fr/page/home/', '_blank');
    });


});


/* FIN Florian */


/* Noé */

var wrapJeudi = document.getElementById("wrapTitleJeudi");
var wrapVendredi = document.getElementById("wrapTitleVendredi");
var wrapProgJeudi = document.getElementById("wrapProgJeudi");
var wrapProgVendredi = document.getElementById("wrapProgVendredi");


function showProg(event) {
    wrapJeudi.classList.add("noDispl");
    wrapVendredi.classList.add("noDispl");
    wrapProgJeudi.classList.remove("noDispl");
    wrapProgVendredi.classList.remove("noDispl");


    // wrapJeudi.classList.remove("transitionIn");
    // wrapVendredi.classList.remove("transitionIn");

    // wrapJeudi.classList.add("transitionOut");
    // wrapVendredi.classList.add("transitionOut");

    // setTimeout(function () {
    //     wrapProgJeudi.classList.remove("noDispl");
    //     wrapProgVendredi.classList.remove("noDispl");
    //     wrapJeudi.classList.add("noDispl");
    //     wrapVendredi.classList.add("noDispl");
        
    //     wrapProgJeudi.classList.remove("transitionOut");
    //     wrapProgVendredi.classList.remove("transitionOut");

    //     wrapProgJeudi.classList.add("transitionIn");
    //     wrapProgVendredi.classList.add("transitionIn");
    // }, 000);
}
function hideProg(event) {
    
    wrapJeudi.classList.remove("noDispl");
    wrapVendredi.classList.remove("noDispl");
    wrapProgJeudi.classList.add("noDispl");
    wrapProgVendredi.classList.add("noDispl");
    // wrapProgJeudi.classList.add("transitionOut");
    // wrapProgVendredi.classList.add("transitionOut");

    // wrapProgJeudi.classList.remove("transitionIn");
    // wrapProgVendredi.classList.remove("transitionIn");


    // setTimeout(function () {
    //     wrapJeudi.classList.remove("noDispl");
    //     wrapVendredi.classList.remove("noDispl");
    //     wrapProgJeudi.classList.add("noDispl");
    //     wrapProgVendredi.classList.add("noDispl");

    //     wrapJeudi.classList.remove("transitionOut");
    //     wrapVendredi.classList.remove("transitionOut");
        
    //     wrapJeudi.classList.add("transitionIn");
    //     wrapVendredi.classList.add("transitionIn");
    // }, 2300);

}

wrapJeudi.addEventListener('click', showProg);
wrapVendredi.addEventListener('click', showProg);
wrapProgJeudi.addEventListener('click', hideProg);
wrapProgVendredi.addEventListener('click', hideProg);

/* FIN Noé */


/* Alk3mik */

/*
    Use the key ESC (Escape) to hide an element that was opened and it is
    above the view.
*/

// Document.querySelector() returns the first Element within the document that
// matches the specified selector, or group of selectors.

var escapableElem = document.querySelector('.navbar-collapse');

// In the following we select the element <button> bearing the
// attribute *type* equal to *button*.
var menuElem = document.querySelector('button[type = button]');


window.addEventListener("keyup", function() {

    var myKey = event.keyCode || event.which;

// The ESC key code is 27
    if (myKey === 27) {

        var isOpened = escapableElem.classList.contains('rotate-y-anim');

        if (isOpened) {

           menuElem.style.display = 'block';
           escapableElem.classList.remove('rotate-y-anim');
           
//             fadeOut(escapableElem);

        }

    }

});


// Native JS *fadeIn* and *fadeOut* functions.
//
// Taken from http://www.chrisbuttery.com/articles/fade-in-fade-out-with-javascript
/*
function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
*/

/* FIN Alk3mik */