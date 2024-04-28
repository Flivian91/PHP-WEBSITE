// Login Variable
const loginTabs = document.querySelectorAll(".login__nav--item");
const loginTabContainer = document.querySelector(".login__nav--list");
const loginContents = document.querySelectorAll(".login__content");
const loginSection = document.querySelector(".login-section");
const mainSectionLogin = document.querySelector(".main-section");
// Input validation variables
const loginBtn = document.querySelector(".loginBtn");
const createButton = document.querySelector(".create__btn");
const inputPassword = document.querySelectorAll(".pass");
const inputEmailLogin = document.querySelector("#email");
const inputEmailCreate = document.querySelector("#email-sign");
const inputPasswordCreate = document.querySelector("#password-sign");
const inputNameCreate = document.querySelector("#name");

// Styling the Password checker
const inputPasswordLogin = document.querySelector("#password");
const passwordContainer = document.querySelectorAll(".password__input");
const passwordMessage = document.querySelectorAll(".message");
const passwordStateWeak = document.querySelectorAll(".color-weak");
const passwordStateGood = document.querySelectorAll(".color-good");
const passwordStatePerfet = document.querySelectorAll(".color-perfect");
const passwordStateExcellent = document.querySelectorAll(".color-excellent");
const passwordText = document.querySelectorAll(".text");
// Curren user
let currentUser;

// Login Functionalities to shift Navigations
loginTabContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".login__nav--item");
  // Gaurd clause
  if (!target) return;
  // Remove the current active class
  loginTabs.forEach((tab) => tab.classList.remove("login__active"));
  loginContents.forEach((con) => con.classList.add("login__hidden"));

  // Activate the active tab
  target.classList.add("login__active");
  clearInputs();
  document
    .querySelector(`.login__content-${target.dataset.target}`)
    .classList.remove("login__hidden");
});

// Function to Allow the user to Login And hide all the current value of other field
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  currentUser = users.find((user) => user.email === inputEmailLogin.value);
  if (currentUser?.password === inputPasswordLogin.value) {
    loginUser(currentUser);
  } else {
    invalidDetails();
  }
});
// Register new user
createButton.addEventListener("click", (e) => {
  e.preventDefault();
  const name = inputNameCreate.value;
  const email = inputEmailCreate.value;
  const password = inputPasswordCreate.value;
  const profile = "img/customers/customer-2.jpg";

  if (name === "" || email === "" || password === "") {
    invalidDetails();
  } else if (password.length < 8) {
    invalidDetails();
    passwordText.forEach((el) => (el.style.color = "red"));

    passwordText.forEach((el) => (el.textContent = "Improve Password!"));
  } else {
    currentUser = users.find((user) => user.email === email);
    if (currentUser == undefined) {
      users.push(createNewuser(name, email, password, profile));
      currentUser = createNewuser(name, email, password);
      setTimeout(() => {
        loginUser(currentUser);
      }, 2000);
      document.querySelector(".email__error").classList.add("login__hidden");
      setTimeout(() => {
        clearInputs();
      }, 2000);
    } else {
      document.querySelector(".email__error").classList.remove("login__hidden");
    }
  }
});

// Function to allow the User to Create Account
function createNewuser(name, email, password, profile) {
  let newUser = {};
  Object.defineProperties(newUser, {
    name: {
      value: name,
      writable: true,
    },
    email: {
      value: email,
      writable: true,
    },
    password: {
      value: password,
      writable: true,
    },
    profile: {
      value: profile,
      writable: true,
      enumerable: true,
    },
  });
  return newUser;
}
// Function to gogin the user
function loginUser(currentUser) {
  loginSection.classList.add("hidden");
  mainSectionLogin.classList.remove("hidden");
  displayuserSummary(currentUser);
  updateUserData(currentUser);
  displayUserData(currentUser);
  clearInputs();
}

// Function to Show error message
function invalidDetails() {
  document
    .querySelectorAll(".login__content--input")
    .forEach((el) => (el.style.borderColor = "red"));
}

// Function to clear all the field
function clearInputs() {
  passwordMessage.forEach((el) => el.classList.add("login__hidden"));
  inputPasswordLogin.value = "";
  inputEmailLogin.value = "";
  inputEmailCreate.value = "";
  inputPasswordCreate.value = "";
  inputNameCreate.value = "";
  document
    .querySelectorAll(".login__content--input")
    .forEach((el) => (el.style.borderColor = "black"));
}
// function AddPasswordChecker() {
//   passwordMessage.forEach((el) => (el.style.display = "block"));
// }
// Login validation
inputPassword.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (input.value.length > 0) {
      passwordMessage.forEach((el) => el.classList.remove("login__hidden"));
      passwordStateWeak.forEach((el) => (el.style.display = "block"));
      passwordContainer.forEach((el) => (el.style.borderColor = "red"));
      passwordText.forEach((el) => (el.style.color = "red"));
    } else {
      passwordMessage.forEach((el) => el.classList.add("login__hidden"));
      passwordStateWeak.forEach((el) => (el.style.display = "none"));
      passwordContainer.forEach((el) => (el.style.borderColor = "black"));
      passwordText.forEach((el) => (el.style.color = "black"));
    }
    if (input.value.length >= 4 && input.value.length < 8) {
      passwordStateGood.forEach((el) => (el.style.display = "block"));
      passwordContainer.forEach((el) => (el.style.borderColor = "blue"));
      passwordText.forEach((el) => (el.style.color = "blue"));
      passwordText.forEach((el) => (el.textContent = "Good!"));
    }
    if (input.value.length >= 8 && input.value.length < 12) {
      passwordStatePerfet.forEach((el) => (el.style.display = "block"));
      passwordContainer.forEach((el) => (el.style.borderColor = "#59FFA0"));
      passwordText.forEach((el) => (el.style.color = "#59FFA0"));
      passwordText.forEach((el) => (el.textContent = "Perfect!"));
    }
    if (input.value.length >= 12) {
      passwordStateExcellent.forEach((el) => (el.style.display = "block"));
      passwordContainer.forEach((el) => (el.style.borderColor = "green"));
      passwordText.forEach((el) => (el.style.color = "green"));
      passwordText.forEach((el) => (el.textContent = "Excellent!"));
    }
  });
});
