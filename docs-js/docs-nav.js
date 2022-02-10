btnToggle = document.querySelector("#btn-toggle");
navToggle = document.querySelector("#nav-toggle");

btnToggle.addEventListener('click', () => {
    classes = navToggle.classList;
    result = classes.toggle("show");
});