(function() {
    var article = document.getElementById("articlePage");
    
    if(article) {
        var id = window.location.search.replace("?", "").split("=")[1];
        var articleData = getArticle(id);

        var title = article.querySelector(".article__title");
        var category = article.querySelector(".article__category");
        var time = article.querySelector(".article__date");
        var text = article.querySelector(".article__text");
        var img = document.createElement("img");
        img.classList.add("article__img");
        img.src = articleData.Image.ImageTransforms[2].Url;
        console.log(articleData.Image);
        title.innerHTML = articleData.Title;
        category.innerHTML = articleData.Categories[0].Name;
        category.classList.add("article__category-" + (articleData.Categories[0].Name).toLowerCase());
        time.innerHTML = formatDate(articleData.CreationDate);
        time.setAttribute("datetime", formatDate(articleData.CreationDate));
        text.appendChild(img);
        text.innerHTML += articleData.Description;

    }

})();
