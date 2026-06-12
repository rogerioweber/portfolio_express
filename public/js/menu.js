const menu = document.getElementById("menuFunction");
const navMenu = document.getElementById("navMenu");

if (menu && navMenu) {
  menu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
