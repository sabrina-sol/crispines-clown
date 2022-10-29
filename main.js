const navToogle = document.querySelector("#navToogle");
const menu = document.getElementsByClassName("containerHeader");
const navIcon = document.querySelectorAll(".navIcon");

navToogle.addEventListener ("click", () => {
    menu[0].classList.toggle("openMenu");
    navIcon.forEach(icon => {
        icon.classList.toggle("hidden");
    })
});

