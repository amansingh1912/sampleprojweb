let burger = document.querySelector(".nav-right");
let navsection = document.querySelector(".nav-section");

burger.addEventListener('click', () => {
    navsection.classList.toggle('show-nav');
})