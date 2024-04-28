"use strict";
// Html Object reference
const profileName = document.querySelector(".profile__name");
const mainBody = document.querySelector(".main__body");
const userSection = document.querySelector(".user-section");
const containerProfileDropdown = document.querySelector(".profile__drop");
const overlay = document.querySelector(".overlay");
const userName = document.querySelector(".user__name");
const userEmail = document.querySelector(".user__email");
const userRole = document.querySelector(".user__role");
const userLocation = document.querySelector(".user__location");
const userJoinDate = document.querySelector(".user__joined--date");
const userSchool = document.querySelector(".user__school");
const userGender = document.querySelector(".user__gender");
const userWork = document.querySelectorAll(".user__work");
const userLanguage = document.querySelector(".user__language");
const userProfile = document.querySelector(".user__profile");
const saveBtn = document.querySelectorAll(".save__btn");
const color = document.querySelector("#settings__user-color");
const colorReceive = document.querySelector("#color-receive");
const settingsSection = document.querySelector(".setting-section");
const closeRecord = document.querySelector(".close__record");
const messageContainer = document.querySelector(".message__save");
const userTopBackground = document.querySelector(".user__top");
const dashboardSection = document.querySelector(".dashboard-section");

// Edit User data
const editUserName = document.querySelector("#settings__user-name");
const editUserEmail = document.querySelector("#settings__user-email");
const editUserCurrentName = document.querySelector("#settings__user-username");
const editUserLocation = document.querySelector("#settings__user-location");
const editUserBio = document.querySelector("#settings__user-bio");
const editUserGender = document.querySelector("#settings__user-gender");
const editUserWork = document.querySelector("#settings__user-work");
const editUserEducation = document.querySelector("#settings__user-education");
const editUserLanguage = document.querySelector("#settings__user-language");
// Edit Button
const editProfileBtn = document.querySelector(".user__profile--edit");
const settingsName = document.querySelectorAll(".setting__name");
const settingBtn = document.querySelector(".settings__btn");
const dashboardBtn = document.querySelector(".dashboard__btn");

// Changing Tabs on the Settings
const settingsTabs = document.querySelectorAll(".settings__tabs");
const settingsTabsContainer = document.querySelector(".settings__left");
const settingsContentContainer = document.querySelector(".settings__right");
const settingsContents = document.querySelectorAll(".settings__container");

// Notification Section Data
const notificationContainer = document.querySelector(".notification-section");
const notificationButton = document.querySelector(".main__nav--notification");
const notificationNav = document.querySelector(".notification__nav");
const notification = document.querySelectorAll(".notification__nav--item");
const notificationLikeBtn = document.querySelectorAll(".notification__like");

const notificationBookmarkBtn = document.querySelectorAll(
  ".notification__bookmark"
);
const notificationSubscribe = document.querySelectorAll(
  ".notification__area--reaction-subscribe"
);

settingsTabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".settings__tabs");
  // gaurd clause
  if (!clicked) return;
  // Removing Classlist
  settingsTabs.forEach((tab) => {
    tab.classList.remove("settings__active");
  });
  settingsContents.forEach((cont) => {
    cont.classList.remove("container__content--active");
  });
  // Add Active tab
  clicked.classList.add("settings__active");

  // Activate content
  document
    .querySelector(`.content--${clicked.dataset.tab}`)
    .classList.add("container__content--active");
});

// DropDown Functionalities Button
// general FUnction For DropDrown
function commonFunctionDropdown() {
  mainBody.classList.add("hidden");
  containerProfileDropdown.classList.add("hidden");
  overlay.classList.add("hidden");
}

// Function to Open the Current User Profile
profileName.addEventListener("click", () => {
  setTimeout(() => {
    commonFunctionDropdown();
    userSection.classList.remove("hidden");
    dashboardSection.classList.add("hidden");
    settingsSection.classList.add("hidden");
    notificationContainer.classList.add("hidden");
  }, 2000);
  progressBar();
});
// Setting Button To Open User Edit Section
settingBtn.addEventListener("click", (e) => {
  setTimeout(() => {
    commonFunctionDropdown();
    userSection.classList.add("hidden");
    dashboardSection.classList.add("hidden");
    settingsSection.classList.remove("hidden");
    notificationContainer.classList.add("hidden");
  }, 2000);
  progressBar();
});

// DashBoard Button to open the dashboard Section
dashboardBtn.addEventListener("click", (e) => {
  setTimeout(() => {
    commonFunctionDropdown();
    userSection.classList.add("hidden");
    settingsSection.classList.add("hidden");
    dashboardSection.classList.remove("hidden");
    notificationContainer.classList.add("hidden");
  }, 2000);
  progressBar();
});
// Edit Profile Event
editProfileBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    userSection.classList.add("hidden");
    settingsSection.classList.remove("hidden");
    notificationContainer.classList.add("hidden");
  }, 2000);
  progressBar();
});

// Go back to the Profile section
settingsName.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
      userSection.classList.remove("hidden");
      settingsSection.classList.add("hidden");
      notificationContainer.classList.add("hidden");
    }, 2000);
    progressBar();
  });
});

// Enter into notification section
notificationButton.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => {
    commonFunctionDropdown();
    notificationContainer.classList.remove("hidden");
    settingsSection.classList.add("hidden");
    userSection.classList.add("hidden");
    dashboardSection.classList.add("hidden");
  }, 2000);
  progressBar();
});

//

// User Summary
function displayuserSummary(user) {
  userRole.textContent = user.role;
  userLocation.textContent = user.location;
  userJoinDate.textContent = user.dateJoined;
  userSchool.textContent = user.school;
  userGender.textContent = user.gender;
  userLanguage.textContent = user.language;
  userWork.forEach((work) => (work.textContent = user.work));
  userEmail.textContent = user.email;
  userName.textContent = user.name;
  settingsName.forEach((el) => {
    el.innerHTML = `@${user.name.toLowerCase().split(" ")[0]}`;
  });
}

// Take the current value of the color and updating to the correct input
addEventListener("click", () => {
  colorReceive.value = `${color.value}`;
});

// Adding event to the save btn
saveBtn.forEach((el) => {
  el.addEventListener("click", saveFun);
  function saveFun(e) {
    e.preventDefault();

    if (messageContainer.classList.contains("hidden")) {
      messageContainer.classList.remove("hidden");
      setTimeout(() => {
        messageContainer.classList.add("hidden");
      }, 5000);
    } else {
      return;
    }
    userTopBackground.style.backgroundColor = `${colorReceive.value}`;
  }
});
// Close the Message For Record Saved Successfully
closeRecord.addEventListener("click", () => {
  messageContainer.classList.add("hidden");
});

// Update the User profile Based On the current User
function updateUserData(user) {
  editUserName.value = user.name;
  editUserEmail.value = user.email;
  editUserCurrentName.value = user.name.split(" ")[0];
  editUserLocation.value = user.location;
  editUserBio.value = user.role;
  editUserGender.value = user.gender;
  editUserWork.value = user.work;
  editUserEducation.value = user.school;
  editUserLanguage.value = user.language;
}
// ===============Notification Section===========
//Display the Active notification
notificationNav.addEventListener("click", (e) => {
  // Remove the active class
  notification.forEach((element) => {
    element.classList.remove("notification__nav--active");
  });
  const activeTab = e.target.closest(".notification__nav--item");
  activeTab.classList.add("notification__nav--active");
});
//Like button
notificationLikeBtn.forEach((element) => {
  element.addEventListener("click", function (e) {
    setTimeout(() => {
      element.classList.toggle("like-area");
      document.querySelectorAll(".like").forEach((el) => {
        el.classList.toggle("like-icon");
        if (el.classList.contains("like-icon")) {
          el.classList.replace("fa-heart-o", "fa-heart");
        } else {
          el.classList.replace("fa-heart", "fa-heart-o");
        }
      });
    }, 1000);
  });
});
//Bookmark button
notificationBookmarkBtn.forEach((element) => {
  element.addEventListener("click", function (e) {
    setTimeout(() => {
      element.classList.toggle("bookmark-area");
      document.querySelectorAll(".bookmark").forEach((el) => {
        el.classList.toggle("bookmark-icon");
        if (el.classList.contains("bookmark-icon")) {
          el.classList.replace("fa-bookmark-o", "fa-bookmark");
        } else {
          el.classList.replace("fa-bookmark", "fa-bookmark-o");
        }
      });
    }, 1000);
  });
});
//Subscribe button
notificationSubscribe.forEach((element) => {
  element.addEventListener("click", function (e) {
    setTimeout(() => {
      element.classList.toggle("subscribe-area");
      if (element.classList.contains("subscribe-area")) {
        element.innerHTML = `<i class="fa fa-check-square-o subscribe" aria-hidden="true"></i>Subscribed`;
      } else {
        element.innerHTML = `<i class="fa fa-bell subscribe subscribe-icon" aria-hidden="true"></i>
        Subscribe`;
      }
      document.querySelectorAll(".subscribe").forEach((el) => {
        el.classList.toggle("subscribe-icon");
      });
    }, 1000);
  });
});
