(function () {
    var tabsList = document.querySelector(".tabs__list");
    var createForm = document.querySelector(".create-article form");
    var managementList = document.querySelector(".management__list");
    var editForm = document.querySelector(".edit-article form");

    if (tabsList) {
        tabsList.addEventListener("click", function (e) {
            if (e.target.classList.contains("btn-create")) {
                document.querySelector(".tabs__item_active").classList.remove("tabs__item_active");
                document.querySelector(".settings_active").classList.remove("settings_active");
                e.target.parentNode.classList.add("tabs__item_active");
                createForm.classList.add("settings_active");
            } else if (e.target.classList.contains("btn-management")) {
                document.querySelector(".tabs__item_active").classList.remove("tabs__item_active");
                document.querySelector(".settings_active").classList.remove("settings_active");
                e.target.parentNode.classList.add("tabs__item_active");
                managementList.classList.add("settings_active");
                showArticles();
            } else if (e.target.classList.contains("btn-edit")) {
                document.querySelector(".tabs__item_active").classList.remove("tabs__item_active");
                document.querySelector(".settings_active").classList.remove("settings_active");
                e.target.parentNode.classList.add("tabs__item_active");
                editForm.classList.add("settings_active");
            }
        });
    };
})();