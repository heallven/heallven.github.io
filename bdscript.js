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
