/*
	Display the countdown timer in an HTML element
*/

// Set the date we're counting down to
 var countDownDate = new Date("Jul 8, 2017 09:00:00").getTime();
// var countDownDate = new Date("Apr 12, 2017 15:12:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
  	seconds = "0" + seconds; 
  }

  // Display the result in the element with id="countDown"
  var el = document.getElementById("countDown");
//  el.innerHTML = days + "j " + hours + "h " + minutes + "m " + seconds + "s ";
//  el.innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds + "<br>" + "J" + " H" + " M" + " S";
//  el.innerHTML = days + "<sup>d</sup> " + hours + "<sup>h</sup> " + minutes + "<sup>m</sup> " + seconds + "<sup>s</sup>";
  el.innerHTML = days + " : " + hours + " : " + minutes + " : " + seconds;

  //el.style.fontSize = 20px;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    el.innerHTML = "Départ !";
  }
}, 1000);