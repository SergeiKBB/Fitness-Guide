(function() {

    function createItem(data) {
        console.log(data);
        data.category = {id:data.Categories[0].Id, name: data.Categories[0].Name};

        var views = _createElement("span", {class: "secondary__views"}, "", ""+data.ViewsCount);
        var time = _createElement("time", {class: "secondary__date", pubdate: "", datetime: formatDate(data.CreationDate) }, "", formatDate(data.CreationDate));
        
        var secondary = _createElement("div", {class: "secondary catalog__secondary"}, "", [views, time]);
        var preview = _createElement("p", { class: "catalog__preview"}, "" , data.Description);
        var category = _createElement("a", {class: "catalog__category catalog__category-"+ data.category.name.toLowerCase(), "data-id": data.category.id}, "", data.category.name);
        var title = _createElement("a", {class: "catalog__title"}, "", data.Title);

        var wrap = _createElement("div", {class: "catalog__wrap"}, "", [title, category, preview, secondary]);
        var img = _createElement("img", {class: "catalog__img", src: data.ImageUrl});

        var item = _createElement("div", {class: "catalog__item col-l-4 col-t-6 col-m-12", "data-id": data.Id}, "", [img, wrap]);

        return addEventListeners(item);

    }

    function addEventListeners(item) {
        var category = item.querySelector(".catalog__category");
        var title = item.querySelector(".catalog__title");
        category.addEventListener("click", displayArticles.bind(null, [category.dataset.id]));
        title.addEventListener("click", redirect.bind(null, [item.dataset.id, "article.html"]));
        return item;
    }

    window.createItem = createItem;
    window.addEventListeners = addEventListeners;
})();
