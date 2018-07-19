(function () {
    function getAllArticles(categoriesIds) {
        var result;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.status == 200 && this.readyState == 4) {
                result = JSON.parse(this.responseText)["Posts"];
            }
        }
        if (categoriesIds) {
            categoriesIds.forEach(function (item, index) {
                if (index == categoriesIds.length - 1) {
                    categoriesIds[index] = "categoriesIds=" + item;
                } else {
                    categoriesIds[index] = "categoriesIds=" + item + "&";
                };
            });
            categoriesIds = categoriesIds.join("");
            console.log(categoriesIds);
            request.open("GET", "http://localhost:50536/api/public/posts?" + categoriesIds, false);
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify(categoriesIds));
        } else {
            request.open("GET", "http://localhost:50536/api/public/posts", false);
            request.send();
        }

        return result;
    }


    window.getAllArticles = getAllArticles;
})();