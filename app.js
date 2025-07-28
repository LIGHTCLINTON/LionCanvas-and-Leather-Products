document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("mobile-menu");
    const navbarMenu = document.querySelector(".navbar__menu");

    menuToggle.addEventListener("click", function() {
        navbarMenu.classList.toggle("active");
        menuToggle.classList.toggle("is-active");
    });
});