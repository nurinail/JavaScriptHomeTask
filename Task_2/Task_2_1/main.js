
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let slides = document.querySelectorAll(".images");

let imagesIndex = 0;

document.addEventListener("DOMContentLoaded", domLoaded);
function domLoaded() {
  slides[imagesIndex].classList.add("display_img");
}

nextBtn.addEventListener("click", showSlideNext);
prevBtn.addEventListener("click", showSlidePrev);
function showSlideNext() {
  slides.forEach((index) => {
    index.classList.remove("display_img");
  });

  if (imagesIndex == slides.length - 1) imagesIndex = 0;
  else imagesIndex++;
  slides[imagesIndex].classList.add("display_img");
}
function showSlidePrev() {
  slides.forEach((index) => {
    index.classList.remove("display_img");
  });

  if (imagesIndex == 0) imagesIndex = slides.length - 1;
  else imagesIndex--;

  slides[imagesIndex].classList.add("display_img");
}
