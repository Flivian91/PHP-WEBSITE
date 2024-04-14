// Create variables

const managerClose = document.querySelector(".manager-close");
const manager = document.querySelector(".manager");

// Closing the manager Container

managerClose.addEventListener("click", function () {
  if (manager.classList.contains("manager-terminate")) {
    return false;
  } else {
    // const manager = document.querySelector(".manager");
    let managerClass = manager.setAttribute("class", "manager-terminate");
    manager.classList.add(managerClass);
    manager.style.display = "none";
  }
});
// Add Event to check when the user clicks the check box and display the Save button

const checkBox = document.querySelector(".check");
const checkBox1 = document.querySelector(".check1");

const acceptBtn = document.getElementById("manager__btn");
// Add Event Listener to the check box

// Event Delegation-which allows user to append a single event listener to tha parent element that adds it
// to all its parent and features decenfant that matches the selector

// const managerClass = document.querySelector(".manager__body");
// managerClass.addEventListener("click", function (e) {
//   console.log(e);
//   const target = e.target;
//   if (target.matches("input")) {
//     if (acceptBtn.classList.contains("close-cookies")) {
//       acceptBtn.classList.remove("close-cookies");
//     } else {
//       acceptBtn.classList.add("close-cookies");
//     }
//   }
// });
checkBox.addEventListener("click", function () {
  if (checkBox.value === "clicked") {
    if (acceptBtn.classList.contains("close-cookies")) {
      acceptBtn.classList.remove("close-cookies");
    } else {
      acceptBtn.classList.add("close-cookies");
    }
  } else return false;
});

checkBox1.addEventListener("click", function () {
  if (checkBox.value === "clicked") {
    if (acceptBtn.classList.contains("close-cookies")) {
      acceptBtn.classList.add("close-cookies");
    } else {
      acceptBtn.classList.remove("close-cookies");
    }
  } else return false;
});
// Add Function to Listen to click from the user
// Get Element Objects
// const manager = document.querySelector(".manager"); referencing
// declineBtn.style.zIndex = 999
const declineBtn = document.getElementById("btn__cookies--decline");

declineBtn.addEventListener("click", function () {
  if (manager.classList.contains("close-manager")) {
    let closeManager = manager.getAttribute("close-manager");
    manager.classList.add(closeManager);
    manager.style.display = "block";
    manager.style.zIndex = 999999;
    closeCookie();
  }
});

function managerCookies() {
  if (manager.classList.contains("close-manager")) {
    let closeManager = manager.getAttribute("close-manager");
    manager.classList.add(closeManager);
    manager.style.display = "block";
    // manager.style.zIndex = -999;
    // // manager.style.position = "absolute";
    // cookies.style.zIndex = 999;
  }
}

// Function to close the cookies once the cookie manager has been opened
setTimeout(closeCookie, 10000);
function closeCookie() {
  const cookies = document.querySelector(".cookies");
  cookies.style.display = "none";
}

// Accept cookies Button.
const acceptCookieBtn = document.getElementById("btn__cookies--accept");

acceptCookieBtn.addEventListener("click", function () {
  cookies.style.display = "none";
});
function acceptCookie() {
  manager.style.display = "none";
}
