

 

var audio = new Audio(
 "https://dl.dropbox.com/s/xp3zprzv97jpwlr/Sweetest_Birthday_Song_Ever_256k_Music.mp3"
 );
audio.oncanplaythrough = function() {
 audio.play();
}
audio.loop = true;
audio.onended = function() {
 audio.play();
}

var audio = document
 .getElementById(
  "au");
audio.play();

$(window).scroll(function() {
 if ($(window).scrollTop() >=
  320) {
  $('nav').addClass(
   'fixed-header');
  $('nav div').addClass(
   'visible-title');
 } else {
  $('nav').removeClass(
   'fixed-header');
  $('nav div').removeClass(
   'visible-title');
 }
});

var future = new Date(
  "JAN 18,2021 00:00:00")
 .getTime();
var x = setInterval(
 function() {
  var now = new Date().getTime();
  var dist = future - now;
  var month = Math.floor(dist / (
   1000 * 60 * 60 *
   24 * 30));
  var day = Math.floor((dist % (
   1000 * 60 * 60 *
   24 * 30)) / (1000 * 60 * 60 *
   24));
  var hours = Math.floor((dist % (
   1000 * 60 * 60 *
   24)) / (1000 * 60 * 60));
  var minute = Math.floor((dist %
   (
    1000 * 60 *
    60)) / (1000 * 60));
  var seco = Math.floor((dist % (
   1000 * 60)) / (
   1000));

  document.getElementById(
    "iloveyou")
   .innerHTML =
   "《 " + month + " month " +
   day +
   " days " +
   hours +
   " hours " + minute +
   " minute " +
   seco + " seconds》";
  document.getElementById(
    "promise")
   .innerHTML =
   month + " months " + day +
   " day and " + hours +
   ":" + minute + ":" + seco +
   " seconds remaining only";



  if (dist < 0) {
   document.getElementById(
     "iloveyou")
    .innerHTML =
    "Someday We'll See All of Our Wishes and Promises that We Put Inside the Bottle and Our Heart Will Be Fulfilled";
   document.getElementById(
     "promise")
    .innerHTML =
    "What ever Life's take Us through difficulties or happiness I know We Can make it through As Long As We Love Each Other and by Our Elohim in Yeshua's Name by Grace ";
   document.getElementById("new")
    .innerHTML =
    "💥🎆Happy 7th Aniversary🎆💥";


  }

 }, 1000);
