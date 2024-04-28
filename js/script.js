"use strict";
const sectionWork = document.getElementById("section__work");

const nav = document.querySelector(".hero1");
const hero = document.querySelector(".hero-section");
//Variable for Smooth Scroll
const linkSolution = document.querySelectorAll("#link__solution");
const introSection = document.querySelector(".intro-section");
const linkAbout = document.querySelectorAll("#link__about");
const welcomeSection = document.querySelector(".welcome-section");
const linkNetwork = document.querySelectorAll("#link__network");
const networkSection = document.querySelector(".network-section");
const linkChat = document.getElementById("link__chat");
// Apply Smooth Scroling How we Work Section
linkSolution.forEach((el) => {
  el.addEventListener("click", () => {
    closeMenu();
    sectionWork.scrollIntoView({ behavior: "smooth" });
  });
});

// Apply Smooth Scroling to Intoduction Section
linkAbout.forEach((el) => {
  el.addEventListener("click", () => {
    closeMenu();
    introSection.scrollIntoView({ behavior: "smooth" });
  });
});
// Apply Smooth Scroling On to network Section
linkNetwork.forEach((el) => {
  el.addEventListener("click", () => {
    closeMenu();
    networkSection.scrollIntoView({ behavior: "smooth" });
  });
});
// Smooth Header Using Intersection Observer API
const observeHeight = nav.getBoundingClientRect().height;

const heroObserver = new IntersectionObserver(observerFun, {
  root: null,
  threshold: 0,
  rootMargin: `${observeHeight}px`,
});
heroObserver.observe(hero);

function observerFun(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}
