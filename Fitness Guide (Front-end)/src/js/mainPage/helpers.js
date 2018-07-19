(function () {
    function displayArticles() {
        var catalog = document.querySelector(".catalog__items");
        if (window.location.search.replace("?", "").split("=")[1]) {
            var articles = getAllArticles([window.location.search.replace("?", "").split("=")[1]]);

            if(catalog) {
                catalog.innerHTML = "";
                articles.reverse();
                    articles.forEach(element => {
                        var item = createItem(element);
                        catalog.appendChild(item);
                    });
            }

        } else {
            if (arguments.length) {
                var articles = getAllArticles(arguments[0]);

                if (catalog) {
                    catalog.innerHTML = "";
                    articles.reverse();
                    articles.forEach(element => {
                        var item = createItem(element);
                        catalog.appendChild(item);
                    });
                }
            } else {
                var articles = getAllArticles();

                var catalog = document.querySelector(".catalog__items");
                if (catalog) {
                    catalog.innerHTML = "";
                    articles.reverse();
                    articles.forEach(element => {
                        var item = createItem(element);
                        catalog.appendChild(item);
                    });
                }
            }
        }
    }

    function redirect(arg) {
        console.log();
        if (arg[0]) {
            window.location.href = arg[1] + "?id=" + arg[0];
        } else {
            document.location.href = arg[1];
        }
    }

    window.displayArticles = displayArticles;
    window.redirect = redirect;
})();