var video = document.querySelector('.video');
var juice = document.querySelector('.main-juice');
var btn1 = document.getElementById('play-pause');
var btn2 = document.getElementById('player-btn');
var btn2_c = document.querySelector('.player-btn');

function togglePlayPause() {
  if (video.paused) {
    btn1.className = 'pause';
    video.play();
  } else {
    btn1.className = 'play';
    video.pause();
  }
}
btn2.onclick = function () {
  video.play();
  btn2_c.style.display = "none";
  btn1.className = 'pause';

}
btn1.onclick = function () {
  togglePlayPause();
}
video.addEventListener('timeupdate', function () {
  var juicePos = video.currentTime / video.duration;
  juice.style.width = juicePos * 100 + "%";
});