// // Variables
/*
const dropdownPage = document.querySelector(".dropdown-section");
const dropdownPage1 = document.getElementById("drop1");
console.log();
const featureBtn = document.getElementById("feature");
featureBtn.addEventListener("click", dropdownfun);
const resourceBtn = document.getElementById("resource");
resourceBtn.addEventListener("click", dropdownfun1);

function dropdownfun() {
  dropdownPage.classList.toggle("activeDropdown");
}
function dropdownfun1() {
  dropdownPage1.classList.toggle("activeDropdown");
}

document.addEventListener("click", (e) => {
  if (!dropdownPage.contains(e.target) && e.target !== featureBtn) {
    dropdownPage.classList.remove("activeDropdown");
  }
});
document.addEventListener("click", (e)=>{
  if(!dropdownPage1.contains(e.target) && e.target !== resourceBtn){
    dropdownPage1.classList.remove("activeDropdown")
  }
})

const dropdownPage = document.querySelector(".dropdown-section");

const dropdown = document.querySelector(".fa-angle-down");
const dropdown1 = document.querySelector(".fa-angle-down1");

const dropup = document.querySelector(".fa-angle-up");
const features = document.querySelector(".nav__navbar--items-1");

features.addEventListener("click", dropdownFun);

// Function TO handle the clicks

function dropdownFun() {
  if (dropdown.classList.contains("dropdown__up")) {
    dropdown.classList.remove("dropdown__up");
    dropup.classList.add("dropdown__up");
    dropdownPage.classList.add("open");
  } else {
    dropdown.classList.add("dropdown__up");
    dropup.classList.remove("dropdown__up");
    dropdownPage.classList.remove("open");
  }
}
const resorces = document.querySelector(".nav__navbar--items-3");
resorces.addEventListener("click", dropdownFun1);
function dropdownFun1() {
  if (dropdown1.classList.contains("dropdown__up1")) {
    dropdown1.classList.remove("dropdown__up1");
    dropup.classList.add("dropdown__up1");
    dropdownPage.classList.add("open");
  } else {
    dropdown1.classList.add("dropdown__up1");
    dropup.classList.remove("dropdown__up1");
    dropdownPage.classList.remove("open");
  }
}
function dropFun() {
  document.getElementById("myDropdown").classList.toggle("showDrop");
  // alert("You clicked Me")
}

// lose the chat box if the user click out of the Chat Area
const doc = document.addEventListener("click", docFun);
function docFun(event) {
  if (!event.target.matches(".nav__navbar--items-2, .nav__navbar--items-3")) {
    var chats = document.getElementsByClassName("dropdown");
    for (var i = 0; i < chats.length; i++) {
      var mychats = chats[i];
      if (mychats.classList.contains("show")) {
        mychats.classList.remove("show");
      }
    }
  }
}
*/
const menuBtn = document.querySelector("#menu-icon");
const menuSection = document.querySelector(".menu-section");
const menuOverlay = document.querySelector(".menu__overlay");
const menuExit = document.querySelector(".menu__exit");
const menuBtns = document.querySelectorAll(".menu-btn")

menuBtn.addEventListener("click", () => {
  menuSection.classList.remove("hidden");
  menuOverlay.classList.remove("hidden");
});
// Function to close the window
const closeMenu = function(){
  setTimeout(()=>{
    menuSection.classList.add("hidden");
    menuOverlay.classList.add("hidden");
  }, 900)
  
}
menuOverlay.addEventListener("click", closeMenu);

menuExit.addEventListener("click", closeMenu);
menuBtns.forEach(menu => menu.addEventListener("click", closeMenu) )

document.addEventListener("keydown", (e)=> {
  if(e.key === "Escape"){
    closeMenu()
  }
})