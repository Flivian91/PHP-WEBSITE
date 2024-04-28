// Section For the Frequently asked questions
const faqBtn = document.querySelectorAll(".intro__body--qns");


// console.log(faqBtn);
faqBtn.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("activeNow");
    // console.log(faq);
  });
});


