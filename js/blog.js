const track = document.querySelector('.slider-track');
const dots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.slider-track img');
const sidebar = document.querySelector('.sidebar-container');

let index = 0;

function syncSidebarHeight() {
  if (!sidebar || !images[index]) return;
  sidebar.style.height = `${images[index].offsetHeight}px`;
}

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
  index = i;
  syncSidebarHeight();
}

function nextSlide() {
  index = (index + 1) % dots.length;
  showSlide(index);
}

let interval = setInterval(nextSlide, 3000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    clearInterval(interval);
    interval = setInterval(nextSlide, 4000);
  });
});

window.addEventListener('load', () => {
  showSlide(index);
});

window.addEventListener('resize', syncSidebarHeight);
