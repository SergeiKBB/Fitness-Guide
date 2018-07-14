var View;

(function () {

    View = function () {
        this.list = document.getElementById("management__list");
        this.formAdd = document.getElementById("create-article__form");

        this.formAdd.addEventListener("submit", handleAdd.bind(this));
    }

    View.prototype = Object.create(EventEmitter.prototype);
    View.prototype.constructor = EventEmitter;

    View.prototype.addItem = function (article) {
        var listItem = this.createElement(article);
        this.list.appendChild(listItem);
    }

    View.prototype.findListItem = function (id) {
        return this.list.querySelector('[data-id="' + id + '"');
    }

    View.prototype.editItem = function (article) {
        var listItem = this.findListItem(article.id);
        var title = listItem.querySelector(".management__title");

        title.innerHTML = article.title;
    }

    View.prototype.removeItem = function (id) {
        var listItem = this.findListItem(id);

        this.list.removeChild(listItem);
    }

    View.prototype.createElement = function (article) {
        var editBtn = createElement("a", { className: "btn btn__edit" }, "", "Edit");
        var removeBtn = createElement("a", { className: "btn btn__remove" }, "", "Remove");
        var btnWrap = createElement("div", { className: "btn__wrap" }, "", [editBtn, removeBtn]);

        var views = createElement("span", { className: "secondary__views" }, "", article.views);
        var time = createElement("time", { className: "secondary__date", pubdate, datetime: article.date }, "", article.date);
        var secondary = createElement("div", { className: "secondary management__secondary" }, "", [views, time]);

        var title = createElement("h2", { className: "management__title" }, "", article.title);

        var item = createElement("li", { className: "management__item " }, "", [title, secondary, btnWrap]);

        var itemWrap = createElement("div", { className: "management__item-wrap col-l-3 col-t-6 col-m-12", "data-id": article.id }, "", [item]);

        return this.addEventListeners(itemWrap);
    }

    View.prototype.addEventListeners = function (item) {
        var editBtn = item.getElementById("btn_edit"); //???????
        var removeBtn = item.querySelector("btn_remove");

        editBtn.addEventListener("click", this.handleEdit.bind(this));
        removeBtn.addEventListener("click", this.handleRemove.bind(this));

        return item;
    }

    View.prototype.handleAdd = function (event) {
        event.preventDefault();

        var title = e.target.title;
        var category = e.target.category;
        var file = e.target.file;
        var text = e.target.text;

        var data = new FormData();
        data.append("title", title.value);
        data.append("category", category.value);
        data.append("img", file.files[0]);
        data.append("text", text.value);

        var validation = new ValidationArticle({
            title: title,
            category: category,
            file: file,
            text: text
        });

        if(validation.check()) {
                
            var request = sendRequest("POST", createArticleUrl, data);
            request.onreadystatechange = function() {
                if(request.status == 201) {
                    var createArticleMessage = createElement("div", { className: "signup-message" }, "", "You have successfully created an article");
                    document.body.appendChild(createArticleMessage);
                    setTimeout(function(){
                        createArticleMessage.style.top = "-" + getComputedStyle(createArticleMessage).height;
                    },2000);

                    this.emit("add", data);
                }
            };
        }

    }

    View.prototype.handleEdit = function (event) {
        var listItem = findParent(event.target);
        var id = listItem.getAttribute("data-id");

        // data = data from form
        this.emit("edit", {id: id, data: data});

    }

    View.prototype.handleRemove = function (event) {
        var listItem = findParent(event.target);
        var id = listItem.getAttribute("data-id");

        this.emit("remove", id);
    }

    function findParent(element) {
        if (element.parentNode.getAttribute("data-id")) {
            return element.parentNode;
        } else {
            return findParent(element.parentNode);
        }

    }
})();