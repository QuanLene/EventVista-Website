const slider = document.getElementById('slider');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;
let autoSlideInterval;
let userInteracted = false;
let userInteractionTimeout;

function updateSlidePosition() {
  slider.style.transform = `translateX(-${currentIndex * 50}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex > totalSlides - 2) currentIndex = 0;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = totalSlides - 2;
  updateSlidePosition();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    if (!userInteracted) nextSlide();
  }, 5000);
}

function resetUserInteraction() {
  userInteracted = true;
  clearTimeout(userInteractionTimeout);
  userInteractionTimeout = setTimeout(() => {
    userInteracted = false;
  }, 4000);
}

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetUserInteraction();
});

document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetUserInteraction();
});

updateSlidePosition();
startAutoSlide();
