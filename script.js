let currentSlide = 0;
const slides = document.getElementById("slides");
const totalSlides = document.querySelectorAll(".slide").length;

function updateSlide() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlide();
}