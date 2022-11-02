const navToogle = document.querySelector("#navToogle");
const menu = document.getElementsByClassName("containerHeader");
const navIcon = document.querySelectorAll(".navIcon");
const navLi = document.querySelectorAll("li");
const scrollTop = document.getElementById("scrollTop");

/* --------------------- Open and Close Responsive Menu --------------------- */

navToogle.addEventListener ("click", () => {
    menu[0].classList.toggle("openMenu");
    menu[0].classList.add("transitionMenu");
    navIcon.forEach(icon => {
        icon.classList.toggle("hidden");
    })
    scrollTop.classList.toggle("hideScroll");
});

/* ---------------------- Close menu after click in li ---------------------- */

for(let navLink of navLi) {
    navLink.addEventListener ("click", () => {
        menu[0].classList.remove("openMenu");
        menu[0].classList.remove("transitionMenu");
        navIcon.forEach(icon => {
            icon.classList.toggle("hidden");
        })
        scrollTop.classList.remove("hideScroll");
    });
};



