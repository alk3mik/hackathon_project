/*
 Display the countdown timer in an HTML element
 */
function countingFunc() {
// Set the date we're counting down to
    let countDownDate = new Date("Jul 8, 2017 09:00:00").getTime();
// let countDownDate = new Date("Apr 12, 2017 15:12:00").getTime();

//switch color when time is round
    let roundTime = false;
// Update the count down every 1 second
    let x = setInterval(function () {
        roundTime = false;
        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Add a 0 (zero) before the number if the number is smaller than 10
        if (days < 10) {
            days = "0" + days;
        }

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            if (seconds === 0) {
                roundTime = true;
            }
            seconds = "0" + seconds;
        }

        // Display the result in the element with id="countDown"
        let countdownWrapper = $('#countdown');

        if (roundTime) {
            countdownWrapper.css('color', '#ce3e75');
        } else {
            countdownWrapper.css('color', '#ffffff');
        }
//  el.innerHTML = days + "j " + hours + "h " + minutes + "m " + seconds + "s ";
//  el.innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds + "<br>" + "J" + " H" + " M" + " S";
//  el.innerHTML = days + "<sup>d</sup> " + hours + "<sup>h</sup> " + minutes + "<sup>m</sup> " + seconds + "<sup>s</sup>";
        countdownWrapper.html(days + " : " + hours + " : " + minutes + " : " + seconds + "\n<span class='countdown-num'>JHMS</span>");

        //el.style.fontSize = 20px;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            countdownWrapper.text("Départ !");
        }
    }, 1000);
}
countingFunc();