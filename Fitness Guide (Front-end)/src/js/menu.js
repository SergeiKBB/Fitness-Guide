(function () {
    var menu = document.querySelector(".main-nav");
    var burger = document.querySelector(".burger");

    burger.addEventListener("click", function (e) {
        menu.classList.toggle("main-nav_active");
    });

    menu.addEventListener("click", function (e) {
        if (e.target.nextElementSibling) {
            e.preventDefault();

        } else {
            menu.classList.toggle("main-nav_active");
        }
    });
})();