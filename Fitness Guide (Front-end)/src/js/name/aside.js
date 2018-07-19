(function () {
    (function () {
        var asideBtn = document.querySelector(".aside__btn");
        var asideWrap = document.querySelector(".aside-wrap");
        var aside = document.querySelector(".aside");
        var bool = true;
        if (asideBtn) {
            asideBtn.addEventListener("click", function (e) {
                if (bool) {
                    document.body.style.overflow = "hidden";
                    e.target.style.color = "white";
                    e.target.style.transition = "1.7s";
                    e.target.style.transform = "rotate(-180deg)";
                    e.target.style.right = parseInt(getComputedStyle(aside).width) + 10 + "px";
                    asideWrap.style.right = "0";
                    bool = false;
                } else {
                    document.body.style.overflow = "auto";
                    e.target.style.transform = "none";
                    e.target.style.color = "#3aa3e4";
                    setTimeout(function () {
                        e.target.style.transition = "1.7s";
                        e.target.style.right = "20px";;
                    }, 100);
                    asideWrap.style.right = "-100vw";
                    bool = true;
                }
            });
        };
    })();

    function displayCategories(){
        var asideCategories = document.querySelector(".category.aside__element");
        if(asideCategories) {
            var list = asideCategories.querySelector(".category__list");
    
            var categories = getAllCategories();
            categories.forEach(element => {
                var link = _createElement("a", {class: "category__link aside__link aside__link-" + (element.Name).toLowerCase()}, "", element.Name);
                link.addEventListener("click", redirect.bind(null, [element.Id, "index.html"]));
                var li = _createElement("li", {class: "category__item aside__item"}, "", [link]);
                list.appendChild(li);
            });
        }
    }

    displayCategories();
})();