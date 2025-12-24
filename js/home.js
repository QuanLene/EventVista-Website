// Hiện lên khi cuộn đến và ẩn khi cuộn xuống
document.addEventListener("DOMContentLoaded", function () {
  const info = document.querySelector(".image-info");

  function handleScroll() {
    const rect = info.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
      info.classList.add("visible");
    } else {
      info.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); 
});

// Hiện lên khi cuộn đến (1 lần duy nhất)
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".reveal-once");

  function revealOnScroll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// Sự kiện xu hướng
document.addEventListener("DOMContentLoaded", function () {
  const circles = document.querySelectorAll('.circle');
  const galleries = document.querySelectorAll('.gallery-group');
  let currentIndex = 0;
  let intervalId;

  function showGallery(index) {
    galleries.forEach(g => g.style.display = 'none');
    circles.forEach(c => c.classList.remove('active'));

    galleries[index].style.display = 'flex';
    circles[index].classList.add('active');
    currentIndex = index;
  }

  function nextGallery() {
    let nextIndex = (currentIndex + 1) % galleries.length;
    showGallery(nextIndex);
  }

  intervalId = setInterval(nextGallery, 5000);

  circles.forEach(circle => {
    circle.addEventListener('click', () => {
      const index = parseInt(circle.dataset.index);
      showGallery(index);
      clearInterval(intervalId);
      intervalId = setInterval(nextGallery, 9000);
    });
  });

  showGallery(0);
});

// Blog
const track = document.querySelector('.slider-track');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;
let currentIndex = 0;

function goToSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  goToSlide(currentIndex);
}

setInterval(autoSlide, 3000);

// Partner tự động chuyển động ngang
window.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("partnerTrack");
  const items = Array.from(track.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });
});
