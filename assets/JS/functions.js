const audio = document.getElementById("audio");
const playPause = document.getElementById("play");

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".stoping").classList.toggle("hide");
    playPause.querySelector(".playing").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".stoping").classList.toggle("hide");
    playPause.querySelector(".playing").classList.toggle("hide");
  }
});

// for the volume

const rangeInput = document.getElementById('range');
const volumeHighIcon = document.querySelector('.high');
const volumeLowIcon = document.querySelector('.medium');
const volumeOffIcon = document.querySelector('.low');

rangeInput.addEventListener('input', function() {
    const value = parseInt(rangeInput.value);

    if (value >= 1 && value <= 2) {
        volumeHighIcon.style.display = 'none';
        volumeLowIcon.style.display = 'none';
        volumeOffIcon.style.display = 'inline-block';
    } else if (value >= 3 && value <= 7) {
        volumeHighIcon.style.display = 'none';
        volumeLowIcon.style.display = 'inline-block';
        volumeOffIcon.style.display = 'none';
    } else if (value >= 8 && value <= 10) {
        volumeHighIcon.style.display = 'inline-block';
        volumeLowIcon.style.display = 'none';
        volumeOffIcon.style.display = 'none';
    }
});