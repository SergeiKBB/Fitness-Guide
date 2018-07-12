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