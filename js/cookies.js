// create variables for cookies section

const cookies = document.querySelector(".cookies-cancel");
const cancelBtn = document.querySelector(".cancel-cookies");
const chatBtn = document.querySelector(".chat__icon");
const chatHidden = document.getElementById("hidden");

// EventListener for the button click

cancelBtn.addEventListener("click", function () {
  if (cookies.classList.contains("cookies-cancel")) {
    cookies.classList.remove("cookies-cancel");
  } else {
    cookies.classList.add("cookies-cancel");
    chatBtn.style.position = "fixed";
    chatBtn.style.top = "86vh";
  }
});

// Window to listen to the event load event
window.addEventListener("load", function () {
  const cookies = document.querySelector(".cookies-cancel");
  cookies.classList.remove("cookies-cancel");
});


// // chatBtn.addEventListener("click", function () {
// //   const chatMeBtn = document.querySelector(".hidden");
// //   if (chatMeBtn.classList.contains("hidden")) {
// //     chatMeBtn.classList.remove("hidden");
// //   } else {
// //     chatMeBtn.setAttribute("class", "hidden")
// //   }
// // });

// // setInterval(chatMeCloseFun, 1000)

// chatBtn.addEventListener("click", function () {
//   if (chatHidden != null) {
//     chatHidden.removeAttribute("id");
//   } else {
//     chatHidden.classList.add("hidden");
//   }
// });
