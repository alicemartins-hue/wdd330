const button = document.getElementById("menu-btn");
const nav = document.getElementById("nav-menu");

button.addEventListener("click", () => {
    nav.classList.toggle("active");
});