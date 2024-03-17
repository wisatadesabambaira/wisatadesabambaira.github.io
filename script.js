function toggleMenu() {
  var overlay = document.getElementById("overlay-menu");
  if (overlay.style.height === "100%") {
    overlay.style.height = "0%";
  } else {
    overlay.style.height = "100%";
  }
}

function closeMenu() {
  document.getElementById("overlay-menu").style.height = "0%";
}

// document.addEventListener("DOMContentLoaded", function () {
//   var wisataDesaBtn = document.getElementById("wisataDesaBtn");
//   var wisataDesaDropdown = document.getElementById("wisataDesaDropdown");

//   wisataDesaBtn.addEventListener("click", function () {
//     var isHidden = wisataDesaDropdown.style.display === "none";
//     wisataDesaDropdown.style.display = isHidden ? "block" : "none";
//   });
// });

function toggleDropdown(event) {
  const dropdownContent = event.currentTarget.nextElementSibling;
  if (dropdownContent.classList.contains("clicked")) {
    dropdownContent.classList.remove("clicked");
  } else {
    dropdownContent.classList.add("clicked");
  }
}

// Tambahkan event listener untuk setiap dropdown
document.querySelectorAll(".dropdown > a").forEach((item) => {
  item.addEventListener("click", toggleDropdown);
});
