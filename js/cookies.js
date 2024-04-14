// create variables for cookies section
const cookies = document.querySelector(".cookies-cancel");
const cancelBtn = document.querySelector(".cancel-cookies");

// EventListener for the button click

cancelBtn.addEventListener("click", function () {
  if (cookies.classList.contains("cookies-cancel")) {
    cookies.classList.remove("cookies-cancel");
  } else {
    cookies.classList.add("cookies-cancel");
  }
});


// Window to listen to the event load event
window.addEventListener("load", function () {
  const cookies = document.querySelector(".cookies-cancel");
  cookies.classList.remove("cookies-cancel");
});
