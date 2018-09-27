var slides = document.querySelectorAll('.reviews__list .reviews__list-item');
var currentSlide = 0;
//var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function previousSlide() {
  goToSlide(currentSlide - 1);
}

function goToSlide(n) {
  slides[currentSlide].className = 'reviews__list-item';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = 'reviews__list-item showing';
}

/*
var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function () {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};*/

var next = document.querySelector('.reviews__arrow--right');
var previous = document.querySelector('.reviews__arrow--left');

next.onclick = function () {
  //pauseSlideshow();
  nextSlide();
};
previous.onclick = function () {
  //pauseSlideshow();
  previousSlide();
};