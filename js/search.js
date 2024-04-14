// Varible to get the Html Objects

const search = document.querySelector(".search-cancel"); //container
const cancel = document.getElementById("cancel"); //cancle button
const searchBtn = document.getElementById("search");
const inputSearch = document.getElementById("input-search");

searchBtn.addEventListener("click", function () {
  if (search.classList.contains("search-cancel")) {
    // search.computedStyleMap.display = "block";
    search.classList.remove("search-cancel");
    inputSearch.innerText.value = "";
  } else {
    search.classList.add("search-cancel");
    // search.computedStyleMap.transition = " 0.5s";
  }
});

cancel.addEventListener("click", function () {
  const search1 = document.querySelector(".search");
  if (search1.className === "search") {
    search1.classList.add("search-cancel");
  } else {
    search1.classList.remove("search-cancel");
    inputSearch.innerText = " ";
  }
});
