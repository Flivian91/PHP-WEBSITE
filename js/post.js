"use strict";
// Post Script
const postCancel = document.querySelector(".post__nav--cancel");
const postSection = document.querySelector(".post-section");
const createPost = document.querySelector(".main__nav--create-post");
const createPostProfile = document.querySelector(".create__post");
const postExitPop = document.querySelector(".post__exit");
const postExitPopBtn = document.querySelector(".post__exit-button");
const postOverlay = document.querySelector(".post__overlay");
const postLeaveBtn = document.querySelector(".post__leave--btn");
const postKeepBtn = document.querySelector(".post__back-btn");
const menuDropdown = document.querySelector(".post__edit--icons-menu");
const menuDropdownSection = document.querySelector(".post__dropdown");

// Edit and preview button
const postButtonContainer = document.querySelector(".post__nav--edit");
const postButtons = document.querySelectorAll(".post__button");
const postContent = document.querySelectorAll(".post-data");
const mainPostHTML = document.querySelector(".post__main-area");
// Post data
const postCoverImage = document.querySelector(".post__cover-image");
const postHeading = document.querySelector("#post__write");
const postTags = document.querySelector("#post__tags");
const postMessage = document.querySelector("#input__textarea");

// Implement Shifting Edit and preview
postButtonContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".post__button");
  // Gaurd Clause
  if (!target) return;
  // Remove all the active post
  setTimeout(() => {
    addPostToPreviewHTML();

    postButtons.forEach((el) => {
      el.classList.remove("active__post");
    });
    // Remove all active post
    postContent.forEach((el) => {
      el.classList.add("hidden__post");
    });

    target.classList.add("active__post");
    document
      .querySelector(`.post-${target.dataset.post}`)
      .classList.remove("hidden__post");
  }, 2000);
  progressBar();
});
// Fuction to Append HTML On click
function addPostToPreviewHTML() {
  // mainPostHTML.innerHTML = "";
  const newPostElement = document.createElement("div");
  newPostElement.classList.add(
    "post__preview",
    "post-2",
    "post-data",
    "flex-column"
  );
  newPostElement.innerHTML = `
    <img src="img/degree3.jpeg" alt="Post Image" />
    <div class="post__preview--info flex-column">
      <h1 class="post__preview--title">${postHeading.value}</h1>
      <div class="post__preview--tags flex-row__start">
        <span>#${postTags.value}</span>
        <span>#Exams</span>
        <span>#Skills</span>
      </div>
    </div>
    <div class="post__preview--message">
      <p>
      ${postMessage.value}
      </p>
    </div>
  `;
  mainPostHTML.append(newPostElement);
}
// Function to Publish The Post


// Opening the Exit Section
postCancel.addEventListener("click", (e) => {
  e.preventDefault();
  openExitPop();
});
// Closing the Exit Section
postExitPopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeExitPop();
});

// =========Events
createPost.addEventListener("click", createPostFun);
createPostProfile.addEventListener("click", createPostFun);
// Closing the section Using the Exit Button
postKeepBtn.addEventListener("click", closeExitPop);
// Closing the Whole Post Page
postLeaveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    closeExitPop();
    postSection.classList.add("hidden");
    mainBody.classList.remove("hidden");
    closeAllActivePages();
  }, 2000);
  progressBar();
});
// Function To Create Post
function createPostFun(e) {
  e.preventDefault();
  setTimeout(() => {
    postSection.classList.remove("hidden");
    commonFunctionDropdown();
  }, 1000);
  progressBar();
}
// Function To close All the Active Pages On the window
function closeAllActivePages() {
  containerProfileDropdown.classList.add("hidden");
  overlay.classList.add("hidden");
  userSection.classList.add("hidden");
  dashboardSection.classList.add("hidden");
  settingsSection.classList.add("hidden");
  notificationContainer.classList.add("hidden");
}
// Function to Open the Exit Model
function openExitPop() {
  setTimeout(() => {
    postExitPop.classList.remove("hidden__post");
    postOverlay.classList.remove("hidden__post");
  }, 2000);
  progressBar();
}
// Function to close the model
function closeExitPop() {
  setTimeout(() => {
    postExitPop.classList.add("hidden__post");
    postOverlay.classList.add("hidden__post");
  }, 2000);
  progressBar();
}
// Closing throught clicking Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeExitPop();
  }
});

// Opening the dropdown
menuDropdown.addEventListener("click", openDropdownFun);
//Function to Openthe dopdown
function openDropdownFun() {
  menuDropdownSection.classList.toggle("icon__active");
}

window.addEventListener("click", (e) => {
  if (!e.target.matches(".post__edit--icons-menu")) {
    if (menuDropdownSection.classList.contains("icon__active")) {
      menuDropdownSection.classList.remove("icon__active");
    }
  }
});
menuDropdownSection.addEventListener("click", (e) => e.stopPropagation());

// Create new Post
