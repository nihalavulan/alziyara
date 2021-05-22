var menu = document.getElementById("menu");
var menuOpen = document.getElementById("open");
var menuClose = document.getElementById("close");
function showHideMenu() {
  if (menu.style.display === "none") {
    menuOpen.style.visibility = "hidden";
    menuClose.style.visibility = "visible";
    menu.style.display = "flex";
  } else {
    menuOpen.style.visibility = "visible";
    menuClose.style.visibility = "hidden";
    menu.style.display = "none";
  }
}
