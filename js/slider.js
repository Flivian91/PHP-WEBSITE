"use strict";
const slides = document.querySelectorAll(".slide");
const slideNext = document.querySelector("#slide__next");
const slidePrevious = document.querySelector("#slide__previous");
const tabsContainer = document.querySelector(".slide__tabs");
let currentSlide = 0;
const maxSlide = slides.length - 1;

// Function to Move to the next image
function toTheNext(s) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - s) * 125}%)`;
  });
}
toTheNext(0);
// Event to move to the next Image

// Function to display Next Slider
function displayNextSlide() {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  toTheNext(currentSlide);
  tabsActivation(currentSlide);

  // alert("hello")
}
function displayPreviousSlide() {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }
  toTheNext(currentSlide);
  tabsActivation(currentSlide);
}

slideNext.addEventListener("click", displayNextSlide);
slidePrevious.addEventListener("click", displayPreviousSlide);

// Function to create dots
function createTabs() {
  slides.forEach((_, i) => {
    tabsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="slide__tab" data-slide="${i}"></button>`
    );
  });
}

createTabs();
// Function to activate tabs functioning
function tabsActivation(slide) {
  // Remove the active tab
  document.querySelectorAll(".slide__tab").forEach((tab) => {
    tab.classList.remove("slide__tabs--active");
  });
  // Add The active Tab
  document
    .querySelector(`.slide__tab[data-slide="${slide}"]`)
    .classList.add("slide__tabs--active");
}
tabsActivation(0);
// Haddling click on the current tab
tabsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("slide__tab")) {
    const slide = e.target.dataset.slide;
    toTheNext(slide);
    tabsActivation(slide);
  }
});

// Haddling Keyboard press
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    displayNextSlide();
  }
  if (e.key === "ArrowLeft") {
    displayPreviousSlide();
  }
});
