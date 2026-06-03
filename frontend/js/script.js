const themeSwitch =
    document.getElementById("themeSwitch");

themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const body = document.body;

    menu.classList.toggle("open");
    icon.classList.toggle("open");
    body.classList.toggle("no-scroll");
}