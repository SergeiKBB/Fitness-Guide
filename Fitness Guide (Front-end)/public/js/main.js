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
(function () {
    function moveCarousel() {
        var items = document.querySelectorAll(".carousel__item-wrap");
        var prev = document.getElementById("carousel__prev");
        var next = document.getElementById("carousel__next");
        var index;
        if (prev) {
            prev.addEventListener("click", function () {
                index = findIndex(items, "carousel__item-active");

                if (index == 0) {
                    items[index].classList.remove("carousel__item-active");
                    items[items.length - 1].classList.add("carousel__item-active");
                    items[items.length - 1].style.transform = "rotateY(-90deg)";

                    setTimeout(function () {
                        items[items.length - 1].style.transform = "rotateY(0deg)";
                    }, 100);
                } else {
                    items[index].classList.remove("carousel__item-active");
                    items[index - 1].classList.add("carousel__item-active");
                    items[index - 1].style.transform = "rotateY(-90deg)";

                    setTimeout(function () {
                        items[index - 1].style.transform = "rotateY(0deg)";
                    }, 100);
                }
            });
        }
        if (next) {
            next.addEventListener("click", function () {
                index = findIndex(items, "carousel__item-active");

                if (index == items.length - 1) {
                    items[index].classList.remove("carousel__item-active");
                    items[0].classList.add("carousel__item-active");
                    items[0].style.transform = "rotateY(90deg)";

                    setTimeout(function () {
                        items[0].style.transform = "rotateY(0deg)";
                    }, 100);
                } else {
                    items[index].classList.remove("carousel__item-active");
                    items[index + 1].classList.add("carousel__item-active");
                    items[index + 1].style.transform = "rotateY(90deg)";

                    setTimeout(function () {
                        items[index + 1].style.transform = "rotateY(0deg)";
                    }, 100);
                }
            });
        }



        function findIndex(arr, className, startPosition) {
            if (startPosition) {
                if (startPosition > 0) {
                    for (var i = startPosition; i < arr.length - startPosition; i++) {
                        if (arr[i].classList.contains(className)) {
                            return i;
                        }
                    }
                } else {
                    for (var i = arr.length + startPosition; i > 0; i--) {
                        if (arr[i].classList.contains(className)) {
                            return i;
                        }
                    }

                }
            } else {
                startPosition = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].classList.contains(className)) {
                        return i;
                    }
                }
            }

            return -1;
        }
    }

    function createItem(obj) {
        var node = '<div class="carousel__item col-l-4 col-t-6 col-m-12">\
                    <img src="'+ obj.img + '" alt="" class="carousel__img">\
                    <div class="carousel__wrap">\
                        <a href="" class="carousel__category carousel__category-' + obj.category + '">' + obj.category[0].toUpperCase() + obj.category.substring(1) + '</a>\
                        <a href="" class="carousel__title">' + obj.title + ' </a>\
                     </div>\
                     </div>';
        return node;
    }

    function createWrap(items, bool) {
        var element = document.createElement("div");
        if (bool) {
            element.className = "carousel__item-wrap carousel__item-active";
        } else {
            element.className = "carousel__item-wrap";
        }
        items.forEach(el => {
            element.innerHTML += createItem(el);
        });
        return element;
    }

    function create(father, size, arrItems) {
        var number = 12 / size;
        for (var i = 0; i < number; i++) {
            if (i == 0) {
                father.appendChild(createWrap(arrItems.slice(i, i + size), true));
            } else {
                father.appendChild(createWrap(arrItems.slice(i, i + size)));
            }
        }
    }


    var obj1 = {
        img: "img/running2.jpg",
        category: "running",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj2 = {
        img: "img/swimming2.jpg",
        category: "swimming",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj3 = {
        img: "img/crossfit2.jpg",
        category: "crossfit",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj4 = {
        img: "img/running2.jpg",
        category: "running",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj5 = {
        img: "img/swimming2.jpg",
        category: "swimming",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj6 = {
        img: "img/crossfit2.jpg",
        category: "crossfit",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj7 = {
        img: "img/running2.jpg",
        category: "running",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj8 = {
        img: "img/swimming2.jpg",
        category: "swimming",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj9 = {
        img: "img/crossfit2.jpg",
        category: "crossfit",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj10 = {
        img: "img/running2.jpg",
        category: "running",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj11 = {
        img: "img/swimming2.jpg",
        category: "swimming",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj12 = {
        img: "img/crossfit2.jpg",
        category: "crossfit",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }


    var allItems = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12];

    var father = window.document.getElementById("carousel__inner");
    if (father) {
        window.onload = function () {
            if (innerWidth < 426) {
                father.innerHTML = "";
                create(father, 1, allItems);
                moveCarousel();
            } else if (innerWidth < 769) {
                father.innerHTML = "";
                create(father, 2, allItems);
                moveCarousel();
            } else {
                father.innerHTML = "";
                create(father, 3, allItems);
                moveCarousel();
            }
        }

        window.addEventListener("resize", function () {
            if (innerWidth < 426) {
                father.innerHTML = "";
                create(father, 1, allItems);
                moveCarousel();
            } else if (innerWidth < 769) {
                father.innerHTML = "";
                create(father, 2, allItems);
                moveCarousel();
            } else {
                father.innerHTML = "";
                create(father, 3, allItems);
                moveCarousel();
            }
        });
    }
})();
(function () {
    var form = document.getElementById("create-article__form");
    var imgInput = document.getElementById("img-input");
    var img = document.getElementById("img");
    var createArticleUrl = "http://localhost:61011/api/public/createArticle";


    if (form) {
        form.addEventListener("submit", function (e) {
            img = document.getElementById("img");
            e.preventDefault();

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
                    }
                };
            }
        });
    }
    if (imgInput) {

        imgInput.addEventListener("change", function (e) {
            uploadImg(e.target.files[0]);
        });
    }
    function uploadImg(file) {
        var reader = new FileReader();
        reader.onload = (function (file) {

            return function (e) {
                if (img) {
                    var parent = img.parentElement;
                    img.remove();
                    var newImg = createElement("img", {src: e.target.result, width: 100, height: 100, id: "img", className: "form__img"});
                    parent.appendChild(newImg);
                }
            };
        })(file);
        reader.readAsDataURL(file);
    }

    

})();
var createElement;
var ValidationArticle;
var EventEmitter;

(function() {
createElement = function(tag, props, styles, child) {
    var element = document.createElement(tag);

    Object.keys(props).forEach(key => {
        if(props[key]) {
            element[key] = props[key];
        } else {
            element.setAttribute(key);
        }
    });

    if(styles) {
        Object.keys(styles).forEach(key => element.style[key] = styles[key]);
    }

    if (typeof child === 'string') {
       element.innerHTML = child;
    } else if(child instanceof Array) {
        child.forEach(el => {
            element.appendChild(el);
        })
    }


    return element;
};

ValidationArticle = function(obj) {
    this.elements = obj;
    this.title = obj.title.value;
    this.category = obj.category.value;
    if(obj.file.files[0]) {
        this.file = obj.file;
    }
    this.text = obj.text.value;
    this.result = true;
}

ValidationArticle.prototype.check = function() {
    if(!this.title) {
        this.elements.title.classList.add("error");
        this.result = false;
    } else {
        this.elements.title.classList.remove("error");
    } 

    if(!this.category) {
        this.elements.category.classList.add("error");
        this.result = false;
    } else {
        this.elements.category.classList.remove("error");
    }

    if(!this.file) {
        this.elements.file.classList.add("error");
        this.result = false;
    } else {
        this.elements.file.classList.remove("error");
    }

    if(!this.text) {
        this.elements.text.classList.add("error");
        this.result = false;
    } else {
        this.elements.text.classList.remove("error");
    }

    return this.result;
};

EventEmitter = function() {
    this.events = {};
}

EventEmitter.prototype.on = function(type, callback) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(callback);
}

EventEmitter.emit = function(type, arg) {
    if(this.events[type]) {
        this.events[type].forEach( callback => callback(arg));
    }
}

})();
var sendRequest;

(function () {
    var tabLoginBtn = document.getElementById("tabLoginBtn");
    var tabSignupBtn = document.getElementById("tabSignupBtn");
    var tabLoginContent = document.getElementById("tabLoginContent");
    var tabSignupContent = document.getElementById("tabSignupContent");
    var modalLogin = document.querySelector(".modal__login");
    var modalWrap = document.querySelector(".modal-wrap");
    var closeBtn = document.querySelector(".modal__close");
    var loginBtn = document.getElementById("login");

    loginBtn.addEventListener("click", function () {
        modalWrap.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", function () {
        modalWrap.style.display = "none";
        document.body.style.overflow = "auto";
    })

    tabLoginBtn.addEventListener("click", function (e) {
        if (!e.target.classList.contains("tab__btn-active")) {
            tabLoginContent.classList.toggle("tab-active");
            tabSignupContent.classList.toggle("tab-active");
            tabSignupBtn.classList.toggle("tab__btn-active");
            tabLoginBtn.classList.toggle("tab__btn-active");
        };
    });

    tabSignupBtn.addEventListener("click", function (e) {
        if (!e.target.classList.contains("tab__btn-active")) {
            tabLoginContent.classList.toggle("tab-active");
            tabSignupContent.classList.toggle("tab-active");
            tabSignupBtn.classList.toggle("tab__btn-active");
            tabLoginBtn.classList.toggle("tab__btn-active");
        };
    });

    var tabInputs = document.querySelectorAll(".tab__input");

    for (var i = 0; i < tabInputs.length; i++) {
        tabInputs[i].addEventListener("keyup", function (e) {
            e.target.nextElementSibling.style.opacity = 1;
        });

        tabInputs[i].addEventListener("keyup", function (e) {
            if (!e.target.value) {
                e.target.nextElementSibling.style.opacity = 0;
            }
        });
    };

    //SUBMIT


    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");
    var createArticle = document.getElementById("create-article");
    var loginUrl = "http://localhost:61011/api/public/login";
    var signupUrl = "http://localhost:61011/api/public/register";


    var signupRequest = new XMLHttpRequest();


    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = e.target.email;
        var password = e.target.password;

        var data = new FormData();
        data.append("email", email.value);
        data.append("password", password.value);

        var validLogin = new Validation({
            email: email,
            password: password
        });

        if (validLogin.check()) {
            var request = sendRequest("POST", loginUrl, data);
            request.onreadystatechange = function () {
                if (request.status == 200 && request.readyState == 4) {
                    modalWrap.style.display = "none";
                    setCookie("admin", true, 1);
                    setCookie("name", "Admin", 1);
                    document.location.reload();
                }
            }

        };

    });

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var firstName = e.target.firstName;
        var lastName = e.target.lastName;
        var email = e.target.email;
        var password = e.target.password;

        var data = new FormData();
        data.append("firstName", firstName.value);
        data.append("lastName", lastName.value);
        data.append("email", email.value);
        data.append("password", password.value);

        var validSignup = new Validation({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }, "signup");

        if (validSignup.check()) {
            var request = sendRequest("POST", signupUrl, data);
            request.onreadystatechange = function () {
                if (request.status == 204) {
                    var signupMessage = createElement("div", { className: "signup-message" }, "", "You have successfully registered");
                    document.body.appendChild(signupMessage);
                    modalWrap.style.display = "none";
                    setTimeout(function () {
                        signupMessage.style.top = "-" + getComputedStyle(signupMessage).height;
                    }, 2000);
                }
            }
        }
    });


    if (getCookie("admin")) {
        var loginLink = document.getElementById("login");
        var loginLinkText = document.querySelector(".user-nav__text");
        var createArticle = createElement("a", { href: "createArticle.html", className: "user-nav__link" }, "", '<span class="user-nav__icon icon-add"></span><span class="user-nav__text">Article</span>');
        loginLink.parentElement.appendChild(createArticle);
        loginLinkText.innerHTML = getCookie("name");
    } else {
        console.log(getCookie("email"));
    }

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }


    sendRequest = function (method, url, data) {
        var dataObj = {};
        data.forEach(function (value, key) {
            dataObj[key] = value;
        });
        var request = new XMLHttpRequest();
        request.open(method, url);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(dataObj));
        return request;
    };



    function Validation(obj, type) {
        this._emailReg = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
        this._passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z]){4}).{8,20}$/;
        this._name = /^[A-Z]{1}[a-z]{1,10}$/;
        this.elements = obj;
        this.type = type;
        this.result = true;
        this.email = obj.email.value;
        this.password = obj.password.value;
        if (obj.firstName && obj.lastName) {
            this.firstName = obj.firstName.value;
            this.lastName = obj.lastName.value;
        }
    }

    Validation.prototype.check = function () {
        if (!this._emailReg.test(this.email)) {
            this.elements.email.classList.add("error");
            this.result = false;
        } else {
            this.elements.email.classList.remove("error");
        }

        if (!this._passwordReg.test(this.password)) {
            this.elements.password.classList.add("error");
            this.result = false;
        } else {
            this.elements.password.classList.remove("error");
        }

        if (this.type == "signup") {
            if (!this._name.test(this.firstName)) {
                this.elements.firstName.classList.add("error");
                this.result = false;
            } else {
                this.elements.firstName.classList.remove("error");
            }

            if (!this._name.test(this.lastName)) {
                this.elements.lastName.classList.add("error");
                this.result = false;
            } else {
                this.elements.lastName.classList.remove("error");
            }
        }

        return this.result;
    }
})();
var showArticles = (function(){
    return function() {
        
    };
})();



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
var Controller;

(function() {
    Controller = function(model, view) {
        this.model = model;
        this.view = view;

        view.on("add", this.addArticle.bind(this));
        view.on("remove", this.removeArticle.bind(this));
        view.on("edit", this.editArticle.bind(this));
    };

    Controller.prototype.addArticle = function(data) {
        var article = this.model.addItem(data);
        this.view.addItem(data);
    };

    Controller.prototype.removeArticle = function(id) {
        this.model.removeItem(id);
        this.view.removeItem(id);
    };

    Controller.prototype.editArticle = function(obj) {
        var id = obj.id;
        var data = obj.data;

        var article = this.model.updateItem(id, data);

        this.view.editItem(article);
    }
    
})();
var state = {
    title: "hello world",
    category: "running",
    img: "img5.jpg",
    text: "It is my first test"
};

var model = new Model(state);
model.on('change', state => save(state));

var view = new View();
var controller = new Controller(model, view);

var Article;

(function(){
Article = function(items) {
    this.items = items;
};

Article.prototype = Object.create(EventEmitter.prototype);
Article.prototype.constructor = EventEmitter.prototype;

Article.prototype.getItem = function(id) {
    return this.items.find(item => item.id == id);
};

Article.prototype.addItem = function(item) {
    this.items.push(item);
    this.emit("change", this.item);
    return item;
};

Article.prototype.updateItem = function(id, data) {
    var item = this.getItem(id);

    Object.keys(data).forEach(prop => item[prop] = data[prop]);

    this.emit("change", this.item);
    return item;
};

Article.prototype.removeItem = function(id) {
    var index = this.items.findIndex(item => item.id == id);

    if(index > -1) {
        this.items.splice(index,1);
        this.emit("change", this.items)
    }
};
})(); 
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLmpzIiwiY2Fyb3VzZWwuanMiLCJjcmVhdGVBcnRpY2xlLmpzIiwiaGVscGVycy5qcyIsImxvZ2luLmpzIiwibWFuYWdlbWVudEFydGljbGVzLmpzIiwibWVudS5qcyIsInNldHRpbmdzLmpzIiwiYXJ0aWNsZXMvY29udHJvbGxlci5qcyIsImFydGljbGVzL2luZGV4LmpzIiwiYXJ0aWNsZXMvbW9kZWwuanMiLCJhcnRpY2xlcy92aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBhc2lkZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGVfX2J0blwiKTtcclxuICAgIHZhciBhc2lkZVdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlLXdyYXBcIik7XHJcbiAgICB2YXIgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlXCIpO1xyXG4gICAgdmFyIGJvb2wgPSB0cnVlO1xyXG4gICAgaWYgKGFzaWRlQnRuKSB7XHJcbiAgICAgICAgYXNpZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNpdGlvbiA9IFwiMS43c1wiO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoLTE4MGRlZylcIjtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnJpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShhc2lkZSkud2lkdGgpICsgMTAgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICBhc2lkZVdyYXAuc3R5bGUucmlnaHQgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGJvb2wgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiMzYWEzZTRcIjtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zaXRpb24gPSBcIjEuN3NcIjtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5yaWdodCA9IFwiMjBweFwiOztcclxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBhc2lkZVdyYXAuc3R5bGUucmlnaHQgPSBcIi0xMDB2d1wiO1xyXG4gICAgICAgICAgICAgICAgYm9vbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIG1vdmVDYXJvdXNlbCgpIHtcclxuICAgICAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcm91c2VsX19pdGVtLXdyYXBcIik7XHJcbiAgICAgICAgdmFyIHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsX19wcmV2XCIpO1xyXG4gICAgICAgIHZhciBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbF9fbmV4dFwiKTtcclxuICAgICAgICB2YXIgaW5kZXg7XHJcbiAgICAgICAgaWYgKHByZXYpIHtcclxuICAgICAgICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBmaW5kSW5kZXgoaXRlbXMsIFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoLTkwZGVnKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXggLSAxXS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4IC0gMV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKC05MGRlZylcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4IC0gMV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gZmluZEluZGV4KGl0ZW1zLCBcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gaXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zWzBdLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbMF0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDkwZGVnKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbMF0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXggKyAxXS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4ICsgMV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDkwZGVnKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXggKyAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMGRlZylcIjtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZmluZEluZGV4KGFyciwgY2xhc3NOYW1lLCBzdGFydFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRQb3NpdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRQb3NpdGlvbjsgaSA8IGFyci5sZW5ndGggLSBzdGFydFBvc2l0aW9uOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycltpXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBhcnIubGVuZ3RoICsgc3RhcnRQb3NpdGlvbjsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW2ldLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycltpXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlSXRlbShvYmopIHtcclxuICAgICAgICB2YXIgbm9kZSA9ICc8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX2l0ZW0gY29sLWwtNCBjb2wtdC02IGNvbC1tLTEyXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIicrIG9iai5pbWcgKyAnXCIgYWx0PVwiXCIgY2xhc3M9XCJjYXJvdXNlbF9faW1nXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX3dyYXBcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJjYXJvdXNlbF9fY2F0ZWdvcnkgY2Fyb3VzZWxfX2NhdGVnb3J5LScgKyBvYmouY2F0ZWdvcnkgKyAnXCI+JyArIG9iai5jYXRlZ29yeVswXS50b1VwcGVyQ2FzZSgpICsgb2JqLmNhdGVnb3J5LnN1YnN0cmluZygxKSArICc8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiY2Fyb3VzZWxfX3RpdGxlXCI+JyArIG9iai50aXRsZSArICcgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlV3JhcChpdGVtcywgYm9vbCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiY2Fyb3VzZWxfX2l0ZW0td3JhcCBjYXJvdXNlbF9faXRlbS1hY3RpdmVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiY2Fyb3VzZWxfX2l0ZW0td3JhcFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY3JlYXRlSXRlbShlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlKGZhdGhlciwgc2l6ZSwgYXJySXRlbXMpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gMTIgLyBzaXplO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZVdyYXAoYXJySXRlbXMuc2xpY2UoaSwgaSArIHNpemUpLCB0cnVlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcChhcnJJdGVtcy5zbGljZShpLCBpICsgc2l6ZSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIG9iajEgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9ydW5uaW5nMi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJydW5uaW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICAgIHZhciBvYmoyID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvc3dpbW1pbmcyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInN3aW1taW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICAgIHZhciBvYmozID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvY3Jvc3NmaXQyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImNyb3NzZml0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICAgIHZhciBvYmo0ID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvcnVubmluZzIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicnVubmluZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqNSA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL3N3aW1taW5nMi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJzd2ltbWluZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqNiA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL2Nyb3NzZml0Mi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJjcm9zc2ZpdFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqNyA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL3J1bm5pbmcyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInJ1bm5pbmdcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajggPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9zd2ltbWluZzIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwic3dpbW1pbmdcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajkgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9jcm9zc2ZpdDIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiY3Jvc3NmaXRcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajEwID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvcnVubmluZzIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicnVubmluZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqMTEgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9zd2ltbWluZzIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwic3dpbW1pbmdcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajEyID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvY3Jvc3NmaXQyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImNyb3NzZml0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIGFsbEl0ZW1zID0gW29iajEsIG9iajIsIG9iajMsIG9iajQsIG9iajUsIG9iajYsIG9iajcsIG9iajgsIG9iajksIG9iajEwLCBvYmoxMSwgb2JqMTJdO1xyXG5cclxuICAgIHZhciBmYXRoZXIgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbF9faW5uZXJcIik7XHJcbiAgICBpZiAoZmF0aGVyKSB7XHJcbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGlubmVyV2lkdGggPCA0MjYpIHtcclxuICAgICAgICAgICAgICAgIGZhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlKGZhdGhlciwgMSwgYWxsSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgbW92ZUNhcm91c2VsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5uZXJXaWR0aCA8IDc2OSkge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGUoZmF0aGVyLCAyLCBhbGxJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ2Fyb3VzZWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlKGZhdGhlciwgMywgYWxsSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgbW92ZUNhcm91c2VsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKGlubmVyV2lkdGggPCA0MjYpIHtcclxuICAgICAgICAgICAgICAgIGZhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlKGZhdGhlciwgMSwgYWxsSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgbW92ZUNhcm91c2VsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5uZXJXaWR0aCA8IDc2OSkge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGUoZmF0aGVyLCAyLCBhbGxJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ2Fyb3VzZWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlKGZhdGhlciwgMywgYWxsSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgbW92ZUNhcm91c2VsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1hcnRpY2xlX19mb3JtXCIpO1xyXG4gICAgdmFyIGltZ0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWctaW5wdXRcIik7XHJcbiAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdcIik7XHJcbiAgICB2YXIgY3JlYXRlQXJ0aWNsZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo2MTAxMS9hcGkvcHVibGljL2NyZWF0ZUFydGljbGVcIjtcclxuXHJcblxyXG4gICAgaWYgKGZvcm0pIHtcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0aXRsZSA9IGUudGFyZ2V0LnRpdGxlO1xyXG4gICAgICAgICAgICB2YXIgY2F0ZWdvcnkgPSBlLnRhcmdldC5jYXRlZ29yeTtcclxuICAgICAgICAgICAgdmFyIGZpbGUgPSBlLnRhcmdldC5maWxlO1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IGUudGFyZ2V0LnRleHQ7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlLnZhbHVlKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJjYXRlZ29yeVwiLCBjYXRlZ29yeS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiaW1nXCIsIGZpbGUuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZChcInRleHRcIiwgdGV4dC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IG5ldyBWYWxpZGF0aW9uQXJ0aWNsZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBmaWxlOiBmaWxlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogdGV4dFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmKHZhbGlkYXRpb24uY2hlY2soKSkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBjcmVhdGVBcnRpY2xlVXJsLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVxdWVzdC5zdGF0dXMgPT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjcmVhdGVBcnRpY2xlTWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2lnbnVwLW1lc3NhZ2VcIiB9LCBcIlwiLCBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIGFuIGFydGljbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQXJ0aWNsZU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVBcnRpY2xlTWVzc2FnZS5zdHlsZS50b3AgPSBcIi1cIiArIGdldENvbXB1dGVkU3R5bGUoY3JlYXRlQXJ0aWNsZU1lc3NhZ2UpLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW1nSW5wdXQpIHtcclxuXHJcbiAgICAgICAgaW1nSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB1cGxvYWRJbWcoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBsb2FkSW1nKGZpbGUpIHtcclxuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gKGZ1bmN0aW9uIChmaWxlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gaW1nLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IGUudGFyZ2V0LnJlc3VsdCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIGlkOiBcImltZ1wiLCBjbGFzc05hbWU6IFwiZm9ybV9faW1nXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3SW1nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KShmaWxlKTtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbn0pKCk7IiwidmFyIGNyZWF0ZUVsZW1lbnQ7XHJcbnZhciBWYWxpZGF0aW9uQXJ0aWNsZTtcclxudmFyIEV2ZW50RW1pdHRlcjtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKHRhZywgcHJvcHMsIHN0eWxlcywgY2hpbGQpIHtcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgaWYocHJvcHNba2V5XSkge1xyXG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSBwcm9wc1trZXldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoc3R5bGVzKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGtleSA9PiBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY2hpbGQ7XHJcbiAgICB9IGVsc2UgaWYoY2hpbGQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIGNoaWxkLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcblZhbGlkYXRpb25BcnRpY2xlID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRzID0gb2JqO1xyXG4gICAgdGhpcy50aXRsZSA9IG9iai50aXRsZS52YWx1ZTtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSBvYmouY2F0ZWdvcnkudmFsdWU7XHJcbiAgICBpZihvYmouZmlsZS5maWxlc1swXSkge1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG9iai5maWxlO1xyXG4gICAgfVxyXG4gICAgdGhpcy50ZXh0ID0gb2JqLnRleHQudmFsdWU7XHJcbiAgICB0aGlzLnJlc3VsdCA9IHRydWU7XHJcbn1cclxuXHJcblZhbGlkYXRpb25BcnRpY2xlLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYoIXRoaXMudGl0bGUpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgIH0gXHJcblxyXG4gICAgaWYoIXRoaXMuY2F0ZWdvcnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmNhdGVnb3J5LmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZighdGhpcy5maWxlKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5maWxlLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmZpbGUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCF0aGlzLnRleHQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnRleHQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMudGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xyXG59O1xyXG5cclxuRXZlbnRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG59XHJcblxyXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24odHlwZSwgY2FsbGJhY2spIHtcclxuICAgIHRoaXMuZXZlbnRzW3R5cGVdID0gdGhpcy5ldmVudHNbdHlwZV0gfHwgW107XHJcbiAgICB0aGlzLmV2ZW50c1t0eXBlXS5wdXNoKGNhbGxiYWNrKTtcclxufVxyXG5cclxuRXZlbnRFbWl0dGVyLmVtaXQgPSBmdW5jdGlvbih0eXBlLCBhcmcpIHtcclxuICAgIGlmKHRoaXMuZXZlbnRzW3R5cGVdKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHNbdHlwZV0uZm9yRWFjaCggY2FsbGJhY2sgPT4gY2FsbGJhY2soYXJnKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbn0pKCk7IiwidmFyIHNlbmRSZXF1ZXN0O1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0YWJMb2dpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiTG9naW5CdG5cIik7XHJcbiAgICB2YXIgdGFiU2lnbnVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJTaWdudXBCdG5cIik7XHJcbiAgICB2YXIgdGFiTG9naW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJMb2dpbkNvbnRlbnRcIik7XHJcbiAgICB2YXIgdGFiU2lnbnVwQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiU2lnbnVwQ29udGVudFwiKTtcclxuICAgIHZhciBtb2RhbExvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fbG9naW5cIik7XHJcbiAgICB2YXIgbW9kYWxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC13cmFwXCIpO1xyXG4gICAgdmFyIGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcbiAgICB2YXIgbG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xyXG5cclxuICAgIGxvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbW9kYWxXcmFwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vZGFsV3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgfSlcclxuXHJcbiAgICB0YWJMb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhYl9fYnRuLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICB0YWJMb2dpbkNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcInRhYi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHRhYlNpZ251cENvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcInRhYi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHRhYlNpZ251cEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwidGFiX19idG4tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB0YWJMb2dpbkJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwidGFiX19idG4tYWN0aXZlXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICB0YWJTaWdudXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJfX2J0bi1hY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgdGFiTG9naW5Db250ZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ0YWItYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB0YWJTaWdudXBDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ0YWItYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB0YWJTaWdudXBCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRhYl9fYnRuLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgdGFiTG9naW5CdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRhYl9fYnRuLWFjdGl2ZVwiKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHRhYklucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiX19pbnB1dFwiKTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYklucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRhYklucHV0c1tpXS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0YWJJbnB1dHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmICghZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvL1NVQk1JVFxyXG5cclxuXHJcbiAgICB2YXIgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbkZvcm1cIik7XHJcbiAgICB2YXIgc2lnbnVwRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbnVwRm9ybVwiKTtcclxuICAgIHZhciBjcmVhdGVBcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtYXJ0aWNsZVwiKTtcclxuICAgIHZhciBsb2dpblVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo2MTAxMS9hcGkvcHVibGljL2xvZ2luXCI7XHJcbiAgICB2YXIgc2lnbnVwVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjYxMDExL2FwaS9wdWJsaWMvcmVnaXN0ZXJcIjtcclxuXHJcblxyXG4gICAgdmFyIHNpZ251cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblxyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGVtYWlsID0gZS50YXJnZXQuZW1haWw7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gZS50YXJnZXQucGFzc3dvcmQ7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJlbWFpbFwiLCBlbWFpbC52YWx1ZSk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJwYXNzd29yZFwiLCBwYXNzd29yZC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHZhciB2YWxpZExvZ2luID0gbmV3IFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodmFsaWRMb2dpbi5jaGVjaygpKSB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gc2VuZFJlcXVlc3QoXCJQT1NUXCIsIGxvZ2luVXJsLCBkYXRhKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT0gMjAwICYmIHJlcXVlc3QucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxXcmFwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJhZG1pblwiLCB0cnVlLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJuYW1lXCIsIFwiQWRtaW5cIiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaWdudXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBmaXJzdE5hbWUgPSBlLnRhcmdldC5maXJzdE5hbWU7XHJcbiAgICAgICAgdmFyIGxhc3ROYW1lID0gZS50YXJnZXQubGFzdE5hbWU7XHJcbiAgICAgICAgdmFyIGVtYWlsID0gZS50YXJnZXQuZW1haWw7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gZS50YXJnZXQucGFzc3dvcmQ7XHJcblxyXG4gICAgICAgIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJmaXJzdE5hbWVcIiwgZmlyc3ROYW1lLnZhbHVlKTtcclxuICAgICAgICBkYXRhLmFwcGVuZChcImxhc3ROYW1lXCIsIGxhc3ROYW1lLnZhbHVlKTtcclxuICAgICAgICBkYXRhLmFwcGVuZChcImVtYWlsXCIsIGVtYWlsLnZhbHVlKTtcclxuICAgICAgICBkYXRhLmFwcGVuZChcInBhc3N3b3JkXCIsIHBhc3N3b3JkLnZhbHVlKTtcclxuXHJcbiAgICAgICAgdmFyIHZhbGlkU2lnbnVwID0gbmV3IFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgIH0sIFwic2lnbnVwXCIpO1xyXG5cclxuICAgICAgICBpZiAodmFsaWRTaWdudXAuY2hlY2soKSkge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBzaWdudXBVcmwsIGRhdGEpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2lnbnVwTWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2lnbnVwLW1lc3NhZ2VcIiB9LCBcIlwiLCBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lnbnVwTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxXcmFwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbnVwTWVzc2FnZS5zdHlsZS50b3AgPSBcIi1cIiArIGdldENvbXB1dGVkU3R5bGUoc2lnbnVwTWVzc2FnZSkuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGlmIChnZXRDb29raWUoXCJhZG1pblwiKSkge1xyXG4gICAgICAgIHZhciBsb2dpbkxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xyXG4gICAgICAgIHZhciBsb2dpbkxpbmtUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLW5hdl9fdGV4dFwiKTtcclxuICAgICAgICB2YXIgY3JlYXRlQXJ0aWNsZSA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogXCJjcmVhdGVBcnRpY2xlLmh0bWxcIiwgY2xhc3NOYW1lOiBcInVzZXItbmF2X19saW5rXCIgfSwgXCJcIiwgJzxzcGFuIGNsYXNzPVwidXNlci1uYXZfX2ljb24gaWNvbi1hZGRcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJ1c2VyLW5hdl9fdGV4dFwiPkFydGljbGU8L3NwYW4+Jyk7XHJcbiAgICAgICAgbG9naW5MaW5rLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQXJ0aWNsZSk7XHJcbiAgICAgICAgbG9naW5MaW5rVGV4dC5pbm5lckhUTUwgPSBnZXRDb29raWUoXCJuYW1lXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhnZXRDb29raWUoXCJlbWFpbFwiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q29va2llKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cykge1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgICAgIHZhciBleHBpcmVzID0gXCJleHBpcmVzPVwiICsgZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNuYW1lICsgXCI9XCIgKyBjdmFsdWUgKyBcIjtcIiArIGV4cGlyZXMgKyBcIjtwYXRoPS9cIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDb29raWUoY25hbWUpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IGNuYW1lICsgXCI9XCI7XHJcbiAgICAgICAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICAgICAgICB2YXIgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICBjID0gYy5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2VuZFJlcXVlc3QgPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwsIGRhdGEpIHtcclxuICAgICAgICB2YXIgZGF0YU9iaiA9IHt9O1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICBkYXRhT2JqW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub3BlbihtZXRob2QsIHVybCk7XHJcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YU9iaikpO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIFZhbGlkYXRpb24ob2JqLCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5fZW1haWxSZWcgPSAvXlstXFx3Ll0rQChbQS16MC05XVstQS16MC05XStcXC4pK1tBLXpdezIsNH0kLztcclxuICAgICAgICB0aGlzLl9wYXNzd29yZFJlZyA9IC9eKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PSguKlthLXpBLVpdKXs0fSkuezgsMjB9JC87XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IC9eW0EtWl17MX1bYS16XXsxLDEwfSQvO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBvYmo7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lbWFpbCA9IG9iai5lbWFpbC52YWx1ZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gb2JqLnBhc3N3b3JkLnZhbHVlO1xyXG4gICAgICAgIGlmIChvYmouZmlyc3ROYW1lICYmIG9iai5sYXN0TmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IG9iai5maXJzdE5hbWUudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdE5hbWUgPSBvYmoubGFzdE5hbWUudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFZhbGlkYXRpb24ucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZW1haWxSZWcudGVzdCh0aGlzLmVtYWlsKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmVtYWlsLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmVtYWlsLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fcGFzc3dvcmRSZWcudGVzdCh0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnBhc3N3b3JkLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnBhc3N3b3JkLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJzaWdudXBcIikge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUudGVzdCh0aGlzLmZpcnN0TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZmlyc3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmZpcnN0TmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZS50ZXN0KHRoaXMubGFzdE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmxhc3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmxhc3ROYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xyXG4gICAgfVxyXG59KSgpOyIsInZhciBzaG93QXJ0aWNsZXMgPSAoZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICBcclxuICAgIH07XHJcbn0pKCk7XHJcblxyXG5cclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW5hdlwiKTtcclxuICAgIHZhciBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcclxuXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwibWFpbi1uYXZfYWN0aXZlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwibWFpbi1uYXZfYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGFic0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX2xpc3RcIik7XHJcbiAgICB2YXIgY3JlYXRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLWFydGljbGUgZm9ybVwiKTtcclxuICAgIHZhciBtYW5hZ2VtZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFuYWdlbWVudF9fbGlzdFwiKTtcclxuICAgIHZhciBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1hcnRpY2xlIGZvcm1cIik7XHJcblxyXG4gICAgaWYgKHRhYnNMaXN0KSB7XHJcbiAgICAgICAgdGFic0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY3JlYXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX2l0ZW1fYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ3NfYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZXR0aW5nc19hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUZvcm0uY2xhc3NMaXN0LmFkZChcInNldHRpbmdzX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tbWFuYWdlbWVudFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX19pdGVtX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidGFic19faXRlbV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdzX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2V0dGluZ3NfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwidGFic19faXRlbV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VtZW50TGlzdC5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0FydGljbGVzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWVkaXRcIikpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19faXRlbV9hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcInRhYnNfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5nc19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcInNldHRpbmdzX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInRhYnNfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZChcInNldHRpbmdzX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufSkoKTsiLCJ2YXIgQ29udHJvbGxlcjtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAgIENvbnRyb2xsZXIgPSBmdW5jdGlvbihtb2RlbCwgdmlldykge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgICAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgICAgICB2aWV3Lm9uKFwiYWRkXCIsIHRoaXMuYWRkQXJ0aWNsZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB2aWV3Lm9uKFwicmVtb3ZlXCIsIHRoaXMucmVtb3ZlQXJ0aWNsZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB2aWV3Lm9uKFwiZWRpdFwiLCB0aGlzLmVkaXRBcnRpY2xlLmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDb250cm9sbGVyLnByb3RvdHlwZS5hZGRBcnRpY2xlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIHZhciBhcnRpY2xlID0gdGhpcy5tb2RlbC5hZGRJdGVtKGRhdGEpO1xyXG4gICAgICAgIHRoaXMudmlldy5hZGRJdGVtKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVBcnRpY2xlID0gZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLnJlbW92ZUl0ZW0oaWQpO1xyXG4gICAgICAgIHRoaXMudmlldy5yZW1vdmVJdGVtKGlkKTtcclxuICAgIH07XHJcblxyXG4gICAgQ29udHJvbGxlci5wcm90b3R5cGUuZWRpdEFydGljbGUgPSBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICB2YXIgaWQgPSBvYmouaWQ7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBvYmouZGF0YTtcclxuXHJcbiAgICAgICAgdmFyIGFydGljbGUgPSB0aGlzLm1vZGVsLnVwZGF0ZUl0ZW0oaWQsIGRhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXcuZWRpdEl0ZW0oYXJ0aWNsZSk7XHJcbiAgICB9XHJcbiAgICBcclxufSkoKTsiLCJ2YXIgc3RhdGUgPSB7XHJcbiAgICB0aXRsZTogXCJoZWxsbyB3b3JsZFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwicnVubmluZ1wiLFxyXG4gICAgaW1nOiBcImltZzUuanBnXCIsXHJcbiAgICB0ZXh0OiBcIkl0IGlzIG15IGZpcnN0IHRlc3RcIlxyXG59O1xyXG5cclxudmFyIG1vZGVsID0gbmV3IE1vZGVsKHN0YXRlKTtcclxubW9kZWwub24oJ2NoYW5nZScsIHN0YXRlID0+IHNhdmUoc3RhdGUpKTtcclxuXHJcbnZhciB2aWV3ID0gbmV3IFZpZXcoKTtcclxudmFyIGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihtb2RlbCwgdmlldyk7XHJcbiIsInZhciBBcnRpY2xlO1xyXG5cclxuKGZ1bmN0aW9uKCl7XHJcbkFydGljbGUgPSBmdW5jdGlvbihpdGVtcykge1xyXG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xyXG59O1xyXG5cclxuQXJ0aWNsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50RW1pdHRlci5wcm90b3R5cGUpO1xyXG5BcnRpY2xlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGU7XHJcblxyXG5BcnRpY2xlLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09IGlkKTtcclxufTtcclxuXHJcbkFydGljbGUucHJvdG90eXBlLmFkZEl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB0aGlzLmVtaXQoXCJjaGFuZ2VcIiwgdGhpcy5pdGVtKTtcclxuICAgIHJldHVybiBpdGVtO1xyXG59O1xyXG5cclxuQXJ0aWNsZS5wcm90b3R5cGUudXBkYXRlSXRlbSA9IGZ1bmN0aW9uKGlkLCBkYXRhKSB7XHJcbiAgICB2YXIgaXRlbSA9IHRoaXMuZ2V0SXRlbShpZCk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChwcm9wID0+IGl0ZW1bcHJvcF0gPSBkYXRhW3Byb3BdKTtcclxuXHJcbiAgICB0aGlzLmVtaXQoXCJjaGFuZ2VcIiwgdGhpcy5pdGVtKTtcclxuICAgIHJldHVybiBpdGVtO1xyXG59O1xyXG5cclxuQXJ0aWNsZS5wcm90b3R5cGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT0gaWQpO1xyXG5cclxuICAgIGlmKGluZGV4ID4gLTEpIHtcclxuICAgICAgICB0aGlzLml0ZW1zLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICB0aGlzLmVtaXQoXCJjaGFuZ2VcIiwgdGhpcy5pdGVtcylcclxuICAgIH1cclxufTtcclxufSkoKTsgIiwidmFyIFZpZXc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIFZpZXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYW5hZ2VtZW50X19saXN0XCIpO1xyXG4gICAgICAgIHRoaXMuZm9ybUFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWFydGljbGVfX2Zvcm1cIik7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybUFkZC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUFkZC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRFbWl0dGVyLnByb3RvdHlwZSk7XHJcbiAgICBWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5hZGRJdGVtID0gZnVuY3Rpb24gKGFydGljbGUpIHtcclxuICAgICAgICB2YXIgbGlzdEl0ZW0gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoYXJ0aWNsZSk7XHJcbiAgICAgICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5maW5kTGlzdEl0ZW0gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiJyArIGlkICsgJ1wiJyk7XHJcbiAgICB9XHJcblxyXG4gICAgVmlldy5wcm90b3R5cGUuZWRpdEl0ZW0gPSBmdW5jdGlvbiAoYXJ0aWNsZSkge1xyXG4gICAgICAgIHZhciBsaXN0SXRlbSA9IHRoaXMuZmluZExpc3RJdGVtKGFydGljbGUuaWQpO1xyXG4gICAgICAgIHZhciB0aXRsZSA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIubWFuYWdlbWVudF9fdGl0bGVcIik7XHJcblxyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGFydGljbGUudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgVmlldy5wcm90b3R5cGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHZhciBsaXN0SXRlbSA9IHRoaXMuZmluZExpc3RJdGVtKGlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0LnJlbW92ZUNoaWxkKGxpc3RJdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKGFydGljbGUpIHtcclxuICAgICAgICB2YXIgZWRpdEJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImJ0biBidG5fX2VkaXRcIiB9LCBcIlwiLCBcIkVkaXRcIik7XHJcbiAgICAgICAgdmFyIHJlbW92ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3NOYW1lOiBcImJ0biBidG5fX3JlbW92ZVwiIH0sIFwiXCIsIFwiUmVtb3ZlXCIpO1xyXG4gICAgICAgIHZhciBidG5XcmFwID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidG5fX3dyYXBcIiB9LCBcIlwiLCBbZWRpdEJ0biwgcmVtb3ZlQnRuXSk7XHJcblxyXG4gICAgICAgIHZhciB2aWV3cyA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcInNlY29uZGFyeV9fdmlld3NcIiB9LCBcIlwiLCBhcnRpY2xlLnZpZXdzKTtcclxuICAgICAgICB2YXIgdGltZSA9IGNyZWF0ZUVsZW1lbnQoXCJ0aW1lXCIsIHsgY2xhc3NOYW1lOiBcInNlY29uZGFyeV9fZGF0ZVwiLCBwdWJkYXRlLCBkYXRldGltZTogYXJ0aWNsZS5kYXRlIH0sIFwiXCIsIGFydGljbGUuZGF0ZSk7XHJcbiAgICAgICAgdmFyIHNlY29uZGFyeSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2Vjb25kYXJ5IG1hbmFnZW1lbnRfX3NlY29uZGFyeVwiIH0sIFwiXCIsIFt2aWV3cywgdGltZV0pO1xyXG5cclxuICAgICAgICB2YXIgdGl0bGUgPSBjcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6IFwibWFuYWdlbWVudF9fdGl0bGVcIiB9LCBcIlwiLCBhcnRpY2xlLnRpdGxlKTtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW0gPSBjcmVhdGVFbGVtZW50KFwibGlcIiwgeyBjbGFzc05hbWU6IFwibWFuYWdlbWVudF9faXRlbSBcIiB9LCBcIlwiLCBbdGl0bGUsIHNlY29uZGFyeSwgYnRuV3JhcF0pO1xyXG5cclxuICAgICAgICB2YXIgaXRlbVdyYXAgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcIm1hbmFnZW1lbnRfX2l0ZW0td3JhcCBjb2wtbC0zIGNvbC10LTYgY29sLW0tMTJcIiwgXCJkYXRhLWlkXCI6IGFydGljbGUuaWQgfSwgXCJcIiwgW2l0ZW1dKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoaXRlbVdyYXApO1xyXG4gICAgfVxyXG5cclxuICAgIFZpZXcucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICB2YXIgZWRpdEJ0biA9IGl0ZW0uZ2V0RWxlbWVudEJ5SWQoXCJidG5fZWRpdFwiKTsgLy8/Pz8/Pz8/XHJcbiAgICAgICAgdmFyIHJlbW92ZUJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcImJ0bl9yZW1vdmVcIik7XHJcblxyXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlRWRpdC5iaW5kKHRoaXMpKTtcclxuICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlUmVtb3ZlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5oYW5kbGVBZGQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgdGl0bGUgPSBlLnRhcmdldC50aXRsZTtcclxuICAgICAgICB2YXIgY2F0ZWdvcnkgPSBlLnRhcmdldC5jYXRlZ29yeTtcclxuICAgICAgICB2YXIgZmlsZSA9IGUudGFyZ2V0LmZpbGU7XHJcbiAgICAgICAgdmFyIHRleHQgPSBlLnRhcmdldC50ZXh0O1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwidGl0bGVcIiwgdGl0bGUudmFsdWUpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiY2F0ZWdvcnlcIiwgY2F0ZWdvcnkudmFsdWUpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiaW1nXCIsIGZpbGUuZmlsZXNbMF0pO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwidGV4dFwiLCB0ZXh0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgdmFyIHZhbGlkYXRpb24gPSBuZXcgVmFsaWRhdGlvbkFydGljbGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcclxuICAgICAgICAgICAgZmlsZTogZmlsZSxcclxuICAgICAgICAgICAgdGV4dDogdGV4dFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZih2YWxpZGF0aW9uLmNoZWNrKCkpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBjcmVhdGVBcnRpY2xlVXJsLCBkYXRhKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcXVlc3Quc3RhdHVzID09IDIwMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjcmVhdGVBcnRpY2xlTWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2lnbnVwLW1lc3NhZ2VcIiB9LCBcIlwiLCBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIGFuIGFydGljbGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVBcnRpY2xlTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVBcnRpY2xlTWVzc2FnZS5zdHlsZS50b3AgPSBcIi1cIiArIGdldENvbXB1dGVkU3R5bGUoY3JlYXRlQXJ0aWNsZU1lc3NhZ2UpLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9LDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoXCJhZGRcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5oYW5kbGVFZGl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGxpc3RJdGVtID0gZmluZFBhcmVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIHZhciBpZCA9IGxpc3RJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XHJcblxyXG4gICAgICAgIC8vIGRhdGEgPSBkYXRhIGZyb20gZm9ybVxyXG4gICAgICAgIHRoaXMuZW1pdChcImVkaXRcIiwge2lkOiBpZCwgZGF0YTogZGF0YX0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5oYW5kbGVSZW1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgbGlzdEl0ZW0gPSBmaW5kUGFyZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgdmFyIGlkID0gbGlzdEl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KFwicmVtb3ZlXCIsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kUGFyZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmluZFBhcmVudChlbGVtZW50LnBhcmVudE5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0pKCk7Il19
