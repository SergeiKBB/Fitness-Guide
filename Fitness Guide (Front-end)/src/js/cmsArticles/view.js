function View() {
    this.list = document.getElementById("management__list");
    this.formAdd = document.getElementById("create-article__form");
    this.formEdit = document.getElementById("edit-article__form");
    this.btnRemove = document.getElementById("remove-btn");

    if (this.btnRemove) {
        this.btnRemove.addEventListener("click", this.handleRemove.bind(this));
    }

    if (this.formAdd) {
        this.formAdd.addEventListener("submit", this.handleAdd.bind(this));
    }

    EventEmitter.apply(this);
};

(function () {



    View.prototype = Object.create(EventEmitter.prototype);
    View.prototype.constructor = EventEmitter;

    View.prototype.showAllArticles = function () {
        var articles;

        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                articles = JSON.parse(this.responseText)["Posts"];
            }
        }
        request.open("GET", "http://localhost:50536/api/public/posts", false);
        request.send();
        if (this.list) {


            this.list.innerHTML = "";
            articles.reverse();
            for (var i = 0; i < articles.length; i++) {
                var child = this.createElement(articles[i]);
                this.list.appendChild(child);
            }
        };

    };

    View.prototype.addItem = function (data, request) {
        var context = this;
        var form = this.formAdd;
        var file = form.file;
        var title = form.title;
        var text = form.text;
        var category = form.category;

        function displayAllArticles() {
            var parentImg = file.parentNode;
            parentImg.querySelector(".form__img").remove();
            var newImg = _createElement("img", { src: "img/img_default.jpg", width: 100, height: 100, id: "img", class: "form__img img_default" });
            parentImg.appendChild(newImg);

            title.value = "";
            text.value = "";
            category.options[0].setAttribute("selected", "");

            context.showAllArticles();
        };
        console.log(request);
        if (request) {
            request.onreadystatechange = function () {

                console.log("123");
                if (this.status == 200 && this.readyState == 4) {
                    var imageId = JSON.parse(this.responseText)["ImageId"];
                    data.imageId = imageId;
                    addRequest(data).onreadystatechange = function () {
                        if (this.status == 200 && this.readyState == 4) {
                            showMessage("Article successfully created!");
                            displayAllArticles();
                        } else if (this.status == 400 && this.readyState == 4) {
                            alert("You should sign in as admin");
                        } else if (this.responseText) {
                            if (JSON.parse(this.responseText) == "blog-0005" && this.readyState == 4) {
                                alert("You should sign in as admin");
                            };
                        }
                    }
                } else if (this.status == 400 && this.readyState == 4) {
                    alert("You should sign in as admin");
                } else if (this.responseText) {
                    if (JSON.parse(this.responseText) == "blog-0005" && this.readyState == 4) {
                        alert("You should sign in as admin");
                    };
                }
            }
        }

    };

    View.prototype.findListItem = function (id) {
        return this.list.querySelector('[data-id="' + id + '"');
    }

    View.prototype.editItem = function (data, request) {

        var listItem = this.findListItem(data.id);
        var title = listItem.querySelector(".management__title");
        var views = listItem.querySelector(".secondary__views");
        var date = listItem.querySelector(".secondary__date");



        request.onreadystatechange = function () {
            if (this.status == 204 && this.readyState == 4) {
                var item = getArticle(data.id);
                showMessage("Article successfully update!");
                console.log(item);
                title.innerHTML = item.Title;
                views.innerHTML = item.ViewsCount;
                date.innerHTML = formatDate(item.CreationDate);
                date.setAttribute("datetime", date.CreationDate);
            } else if (this.status == 400 && this.readyState == 4) {
                alert("You should sign in as admin");
            } else if (this.responseText) {

                if (JSON.parse(this.responseText) == "blog-0005" && this.readyState == 4) {
                    alert("You should sign in as admin");
                };
            }
        }

    }

    View.prototype.removeItem = function (id, request) {
        var listItem = this.findListItem(id);
        var list = this.list;

        request.onreadystatechange = function () {
            if (this.status == 204 && this.readyState == 4) {
                showMessage("Article successfully removed!");
                list.removeChild(listItem);
            } else if (this.status == 400 && this.readyState == 4) {
                alert("You should sign in as admin");
            } else if (this.responseText) {
                if (JSON.parse(this.responseText) == "blog-0005" && this.readyState == 4) {
                    alert("You should sign in as admin");
                };
            }
        };
    }

    View.prototype.createElement = function (article) {
        var editBtn = _createElement("a", { class: "btn btn__edit" }, "", "Edit");
        var removeBtn = _createElement("a", { class: "btn btn__remove" }, "", "Remove");
        var btnWrap = _createElement("div", { class: "btn__wrap" }, "", [editBtn, removeBtn]);

        var views = _createElement("span", { class: "secondary__views" }, "", article.ViewsCount + "");
        var time = _createElement("time", { class: "secondary__date", pubdate: "", datetime: formatDate(article.CreationDate) }, "", formatDate(article.CreationDate));
        var secondary = _createElement("div", { class: "secondary management__secondary" }, "", [views, time]);

        var title = _createElement("h2", { class: "management__title" }, "", article.Title);

        var item = _createElement("li", { class: "management__item " }, "", [title, secondary, btnWrap]);

        var itemWrap = _createElement("div", { class: "management__item-wrap col-l-3 col-t-6 col-m-12", "data-id": article.Id }, "", [item]);

        return this.addEventListeners(itemWrap);
    }

    View.prototype.addEventListeners = function (item) {
        var editBtn = item.querySelector(".btn__edit");
        var removeBtn = item.querySelector(".btn__remove");

        editBtn.addEventListener("click", this.handleEdit.bind(this));
        removeBtn.addEventListener("click", this.handleRemove.bind(this));

        return item;
    }

    View.prototype.handleAdd = function (event) {
        event.preventDefault();

        var title = event.target.title;
        var category = event.target.category;
        var file = event.target.file;
        var text = event.target.text;

        var data = new FormData();
        data.append("title", title.value);
        data.append("categoriesIds", category.value);
        data.append("file", file.files[0]);
        data.append("description", text.value);


        var validation = new ValidationArticle({
            title: title,
            category: category,
            file: file,
            text: text
        });


        this.emit("add", dataFormToObj(data));

    }

    View.prototype.handleEdit = function (event) {
        var listItem = findParent(event.target);
        var id = listItem.getAttribute("data-id");
        var editForm = document.getElementById("edit-article__form");
        var itemObj = getArticle(id);
        var context = this;

        function callEvent(data) {
            context.emit("edit", data);
        }

        editForm.file.addEventListener("change", function (e) {
            uploadImg(e.target);
        });

        var parentImg = editForm.file.parentNode;
        parentImg.querySelector(".form__img").remove();
        var newImg = _createElement("img", { src: itemObj.Image.Url, width: 100, height: 100, id: "img", class: "form__img img_default" });
        parentImg.appendChild(newImg);
        editForm.title.value = itemObj.Title;
        editForm.text.value = itemObj.Description;
        Array.prototype.slice.call(editForm.category.options).forEach(element => {
            if (element.value == itemObj.Categories[0].Id) {
                element.setAttribute("selected", "");
            }
        });


        document.querySelector(".tabs__item_active").classList.remove("tabs__item_active");
        document.querySelector(".settings_active").classList.remove("settings_active");
        document.querySelector(".btn-edit").parentNode.classList.add("tabs__item_active");
        this.formEdit.classList.add("settings_active");

        editForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var title = e.target.title;
            var category = e.target.category;
            var file = e.target.file;
            var text = e.target.text;

            var data = new FormData();
            data.append("title", title.value);
            data.append("categoriesIds", category.value);
            data.append("ImageId", file.files[0]);
            data.append("Description", text.value);
            data.append("id", id);

            var validation = new ValidationArticle({
                title: title,
                category: category,
                // file: file,
                text: text
            });

            if (validation.check()) {
                callEvent(dataFormToObj(data));
            }
        });

    }

    View.prototype.handleRemove = function (event) {
        var listItem = findParent(event.target);
        var id = listItem.getAttribute("data-id");

        this.emit("remove", id);
    }

    function findParent(element) {
        console.log(element);
        if (element.parentNode.getAttribute("data-id")) {
            return element.parentNode;
        } else {
            return findParent(element.parentNode);
        }

    }
})();