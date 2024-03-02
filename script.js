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
