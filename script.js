// Scroll reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

// HERO SLIDER
const slides = document.querySelectorAll('.hero-slide');
let current = 0;
let autoSlideInterval = setInterval(nextSlide, 3000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  current = index;
}

function nextSlide() {
  let nextIndex = (current + 1) % slides.length;
  showSlide(nextIndex);
}

function prevSlide() {
  let prevIndex = (current - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

// tombol next / prev
document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 3000);
}

