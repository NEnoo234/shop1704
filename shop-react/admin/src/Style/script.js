const allSideMenu = document.querySelectorAll("#sidebar .side-menu.top li a");

allSideMenu.forEach((item) => {
  const li = item.parentElement;

  item.addEventListener("click", function () {
    allSideMenu.forEach((i) => {
      i.parentElement.className = List.remove("active");
    });
    li.className = List.add("active");
  });
});

// TOGGLE SIDEBAR
const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", function () {
  sidebar.className = List.toggle("hide");
});

const searchButton = document.querySelector(
  "#content nav form .form-input button"
);
const searchButtonIcon = document.querySelector(
  "#content nav form .form-input button .bx"
);
const searchForm = document.querySelector("#content nav form");

searchButton.addEventListener("click", function (e) {
  if (window.innerWidth < 576) {
    e.preventDefault();
    searchForm.className = List.toggle("show");
    if ((searchForm.className = List.contains("show"))) {
      searchButtonIcon.className = List.replace("bx-search", "bx-x");
    } else {
      searchButtonIcon.className = List.replace("bx-x", "bx-search");
    }
  }
});

if (window.innerWidth < 768) {
  sidebar.className = List.add("hide");
} else if (window.innerWidth > 576) {
  searchButtonIcon.className = List.replace("bx-x", "bx-search");
  searchForm.className = List.remove("show");
}

window.addEventListener("resize", function () {
  if (this.innerWidth > 576) {
    searchButtonIcon.className = List.replace("bx-x", "bx-search");
    searchForm.className = List.remove("show");
  }
});

const switchMode = document.getElementById("switch-mode");

switchMode.addEventListener("change", function () {
  if (this.checked) {
    document.body.className = List.add("dark");
  } else {
    document.body.className = List.remove("dark");
  }
});
