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
        title: "Lorem ipsum "
    }
    var obj2 = {
        img: "img/swimming2.jpg",
        category: "swimming",
        title: "Lorem ipsum "
    }
    var obj3 = {
        img: "img/crossfit2.jpg",
        category: "crossfit",
        title: "Lorem ipsum "
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
    var loginForm = document.getElementById("cmsLoginForm");
    var closeBtn = document.querySelector(".modal__close");
    console.log(loginForm);
    var loginUrl = "http://localhost:50536/api/public/cms-login";

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var email = e.target.email;
            var password = e.target.password;

            var data = new FormData();
            data.append("email", email.value);
            data.append("password", password.value);
            data = dataFormToObj(data);


            var request = sendRequest("POST", loginUrl, data);
            request.onreadystatechange = function () {
                if (this.status == 200 && this.readyState == 4) {
                    localStorage.setItem("token", JSON.parse(this.responseText)["AccessToken"]);
                    setCookie("admin", true, 1);
                    setCookie("name", "Admin", 1);
                    window.location.replace("index.html");
                } else if (this.status == 400 && this.readyState == 4) {
                    alert("Incorrect login or password");
                }
            }

            function setCookie(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            }
        });
    }
})();


(function () {
    var imgInput = document.getElementById("img-input");
    

    
    if (imgInput) {
        
        imgInput.addEventListener("change", function (e) {
            uploadImg(e.target);
        });
    }
    function uploadImg(file) {
        var img = file.nextElementSibling;
        file =file.files[0];
        var reader = new FileReader();
        reader.onload = (function (file) {

            return function (e) {
                if (img) {
                    var parent = img.parentElement;
                    img.remove();
                    var newImg = _createElement("img", {src: e.target.result, width: 100, height: 100, id: "img", class: "form__img"});
                    parent.appendChild(newImg);
                }
            };
        })(file);
        reader.readAsDataURL(file);
    }

    
    window.uploadImg = uploadImg;
})();
(function () {
    function createElement(tag, props, styles, child) {
        var element = document.createElement(tag);

        Object.keys(props).forEach(key => {
            element.setAttribute(key, props[key]);
        });

        if (styles) {
            Object.keys(styles).forEach(key => element.style[key] = styles[key]);
        }

        if (typeof child === 'string') {
            element.innerHTML = child;
        } else if (child instanceof Array) {
            child.forEach(el => {
                element.appendChild(el);
            })
        }

        return element;
    };

    function formatDate(date) {
        var result = "";
        var newDate = new Date(date);

        result += newDate.getDate() + "-0" + (newDate.getMonth() + 1) + "-" + newDate.getFullYear();

        return result;
    };

    function showMessage(message) {
        var createArticleMessage = createElement("div", { class: "message" }, "", message);
        document.body.appendChild(createArticleMessage);
        setTimeout(function () {
            createArticleMessage.style.top = "-" + getComputedStyle(createArticleMessage).height;
        }, 2000);
    };

    window._createElement = createElement;
    window.formatDate = formatDate;
    window.showMessage = showMessage;
})();

(function () {
    var tabLoginBtn = document.getElementById("tabLoginBtn");
    var tabSignupBtn = document.getElementById("tabSignupBtn");
    var tabLoginContent = document.getElementById("tabLoginContent");
    var tabSignupContent = document.getElementById("tabSignupContent");
    var modalLogin = document.querySelector(".modal__login");
    var modalWrap = document.querySelector(".modal-wrap");
    var closeBtn = document.querySelector(".modal__close");
    var loginBtn = document.getElementById("login");

    if (loginBtn) {
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
        var loginUrl = "http://localhost:50536/api/public/login";
        var signupUrl = "http://localhost:50536/api/public/register";


        var signupRequest = new XMLHttpRequest();


        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            var email = e.target.email;
            var password = e.target.password;

            var data = new FormData();
            data.append("email", email.value);
            data.append("password", password.value);
            data = dataFormToObj(data);

            var validLogin = new Validation({
                email: email,
                password: password
            });

            if (validLogin.check()) {
                var request = sendRequest("POST", loginUrl, data);
                request.onreadystatechange = function () {
                    if (this.status == 200 && this.readyState == 4) {
                        localStorage.setItem("token", JSON.parse(this.responseText)["AccessToken"]);
                        modalWrap.style.display = "none";
                        setCookie("email", email.value, 1);
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
            data = dataFormToObj(data);

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
                        var signupMessage = createElement("div", { class: "signup-message" }, "", "You have successfully registered");
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
            var createArticle = _createElement("a", { href: "createArticle.html", class: "user-nav__link" }, "", '<span class="user-nav__icon icon-add"></span><span class="user-nav__text">Article</span>');
            loginLink.parentElement.appendChild(createArticle);
            loginLinkText.innerHTML = getCookie("name");
        } else {
            var loginLinkText = document.querySelector(".user-nav__text");
            loginLinkText.innerHTML = getCookie("email")
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
    }

})();
var showArticles = (function(){
    return function() {
        
    };
})();



(function () {
    var menu = document.querySelector(".main-nav");
    var burger = document.querySelector(".burger");

    if (menu) {
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
    }
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
var token = localStorage.getItem("token");

(function () {
    function addRequest(dataObj) {
        dataObj.categoriesIds = [dataObj.categoriesIds];
        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:50536/api/cms/posts");
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Authorization", token);
        request.send(JSON.stringify(dataObj));

        return request;
    };

    function addImage(file) {
        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:50536/api/cms/images/upload");
        request.setRequestHeader("Content-Type", "image/jpeg");
        request.setRequestHeader("Authorization", token);
        request.send(file);
        return request;
    }

    function editRequest(dataObj) {
        var request = new XMLHttpRequest();
        request.open("PUT", "http://localhost:50536/api/cms/posts");
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Authorization", token);
        request.send(JSON.stringify(dataObj));
        return request;
    };


    function removeRequest(id) {
        var obj = { "Id": id };
        var request = new XMLHttpRequest();
        request.open("DELETE", "http://localhost:50536/api/cms/posts");
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Authorization", token);
        request.send(JSON.stringify(obj));

        return request;
    };

    function getArticle(id) {
        var element;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                element = JSON.parse(this.responseText);
            }
        };
        request.open("GET", "http://localhost:50536/api/public/posts/" + id, false);
        request.send();
        return element;
    };

    function sendRequest(method, url, dataObj) {
        var request = new XMLHttpRequest();
        request.open(method, url);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(dataObj));
        return request;
    };

    function dataFormToObj(dataForm) {
        var obj = {};
        dataForm.forEach(function (value, key) {
            obj[key] = value;
        });
        return obj;
    };

    function getCategoryId(name) {

        var request = new XMLHttpRequest();
        var id;
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var categories = JSON.parse(this.responseText);
                categories["Categories"].forEach(function (element) {
                    if (element.Name == name) {
                        console.log(element.Id);
                        id = element.Id;
                    }
                });
            }
        }
        request.open("GET", "http://localhost:50536/api/public/categories", false);
        request.send();

        return id;
    };

    function getCategoryName(id) {
        var name;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var categories = JSON.parse(this.responseText);
                categories["Categories"].forEach(function (element) {
                    if (element.Id == id) {
                        name = element.Name;
                    }
                });
            }
        }
        request.open("GET", "http://localhost:50536/api/public/categories", false);
        request.send();
        return name;
    };

    function getAllCategories() {
        var categories;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                categories = JSON.parse(this.responseText)["Categories"];
            }
        }
        request.open("GET", "http://localhost:50536/api/public/categories", false);
        request.send();
        return categories;
    }

    function createSelectCategory(element) {
        var categories = getAllCategories();
        if (categories) {
            categories.forEach(function (item) {
                var option = _createElement("option", { value: item.Id }, "", item.Name);
                element.appendChild(option);
            });
        }
    };


    function ValidationArticle(obj) {
        this.elements = obj;
        this.title = obj.title.value;
        this.category = obj.category.value;
        if (obj.file && obj.file.files[0]) {
            this.file = obj.file;
        }
        this.text = obj.text.value;
        this.result = true;
    }


    ValidationArticle.prototype.check = function () {
        if (!this.title) {
            this.elements.title.classList.add("error");
            this.result = false;
        } else {
            this.elements.title.classList.remove("error");
        }

        if (!this.category) {
            this.elements.category.classList.add("error");
            this.result = false;
        } else {
            this.elements.category.classList.remove("error");
        }

        if (!this.file) {
            this.elements.file.classList.add("error");
            this.result = false;
        } else {
            this.elements.file.classList.remove("error");
        }

        if (!this.text) {
            this.elements.text.classList.add("error");
            this.result = false;
        } else {
            this.elements.text.classList.remove("error");
        }

        return this.result;
    };


    function EventEmitter() {
        this.events = {};
    };

    EventEmitter.prototype.on = function (type, callback) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }

    EventEmitter.prototype.emit = function (type, arg) {
        if (this.events[type]) {
            this.events[type].forEach(callback => callback(arg));
        }
    }
    window.EventEmitter = EventEmitter;

    window.addRequest = addRequest;
    window.addImage = addImage;
    window.editRequest = editRequest;
    window.removeRequest = removeRequest;
    window.getArticle = getArticle;
    window.sendRequest = sendRequest;
    window.dataFormToObj = dataFormToObj;
    window.getCategoryId = getCategoryId;
    window.getCategoryName = getCategoryName;
    window.getAllCategories = getAllCategories;
    window.createSelectCategory = createSelectCategory;
    window.ValidationArticle = ValidationArticle;
})();


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

function Controller(model, view) {
    this.model = model;
    this.view = view;

    view.on("add", this.addArticle.bind(this));
    view.on("remove", this.removeArticle.bind(this));
    view.on("edit", this.editArticle.bind(this));

    model.on("change", this.changeView.bind(this));
};

(function() {
    

    Controller.prototype.addArticle = function(data) {
        var result = this.model.addItem(data.file);
        this.view.addItem(data, result);
    };

    Controller.prototype.removeArticle = function(id) {
        var result = this.model.removeItem(id);
        this.view.removeItem(id, result);
    };

    Controller.prototype.editArticle = function(data) {
        var result = this.model.updateItem(data);

        this.view.editItem(data, result);
    }

    Controller.prototype.changeView = function(id) {
        this.view.removeItem(id);
    }
    
})();
function Model() {
    this.item;
    EventEmitter.apply(this);
}

(function () {
    Model.prototype = Object.create(EventEmitter.prototype);
    Model.prototype.constructor = EventEmitter;

    Model.prototype.getAllArticles = function () {
        return
    };

    Model.prototype.addItem = function (item) {
        console.log(item);
        return addImage(item);
    };

    Model.prototype.updateItem = function (data) {
        return editRequest(data);
    };

    Model.prototype.removeItem = function (id) {
        
        return removeRequest(id);
    };

    Model.prototype.addImage = function(file) {

    }
})(); 
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

        if (request) {
            request.onreadystatechange = function () {


                if (this.status == 200 && this.readyState == 4) {
                    var imageId = JSON.parse(this.responseText)["ImageId"];
                    data.imageId = imageId;
                    addRequest(data).onreadystatechange = function () {
                        if (this.status == 204 && this.readyState == 4) {
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

            console.log(e.target);
            var data = new FormData();
            data.append("title", title.value);
            data.append("categoriesIds", category.value);
            data.append("img", file.files[0]);
            data.append("text", text.value);
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
var state = undefined;

var list = document.getElementById("management__list");
var selectCategory = document.querySelectorAll(".select-category");
Array.prototype.slice.call(selectCategory).forEach(element => createSelectCategory(element));

var model = new Model(state || undefined);


var view = new View();
var controller = new Controller(model, view);

view.showAllArticles();



(function() {

    function createItem(data) {
        console.log(data);
        data.category = {id:"393053dd-3388-e811-809c-e03f49c25dda", name: "Running"};

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
displayArticles();


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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmpzIiwiY21zTG9naW4uanMiLCJjcmVhdGVBcnRpY2xlLmpzIiwiaGVscGVycy5qcyIsImxvZ2luLmpzIiwibWFuYWdlbWVudEFydGljbGVzLmpzIiwibWVudS5qcyIsInNldHRpbmdzLmpzIiwiX2hlbHBlcnNBcnRpY2xlcy5qcyIsImFydGljbGVQYWdlL19pbmRleC5qcyIsImNtc0FydGljbGVzL2NvbnRyb2xsZXIuanMiLCJjbXNBcnRpY2xlcy9tb2RlbC5qcyIsImNtc0FydGljbGVzL3ZpZXcuanMiLCJjbXNBcnRpY2xlcy9faW5kZXguanMiLCJtYWluUGFnZS9jYXRhbG9nSXRlbS5qcyIsIm1haW5QYWdlL2hlbHBlcnMuanMiLCJtYWluUGFnZS9yZXF1ZXN0cy5qcyIsIm1haW5QYWdlL19pbmRleC5qcyIsIm5hbWUvYXNpZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbk5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gbW92ZUNhcm91c2VsKCkge1xyXG4gICAgICAgIHZhciBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2Fyb3VzZWxfX2l0ZW0td3JhcFwiKTtcclxuICAgICAgICB2YXIgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxfX3ByZXZcIik7XHJcbiAgICAgICAgdmFyIG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsX19uZXh0XCIpO1xyXG4gICAgICAgIHZhciBpbmRleDtcclxuICAgICAgICBpZiAocHJldikge1xyXG4gICAgICAgICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGZpbmRJbmRleChpdGVtcywgXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgtOTBkZWcpXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMGRlZylcIjtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleCAtIDFdLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXggLSAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoLTkwZGVnKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXggLSAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMGRlZylcIjtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5leHQpIHtcclxuICAgICAgICAgICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBmaW5kSW5kZXgoaXRlbXMsIFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSBpdGVtcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbMF0uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1swXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoOTBkZWcpXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1swXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMGRlZylcIjtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleCArIDFdLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXggKyAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoOTBkZWcpXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleCArIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgwZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCBjbGFzc05hbWUsIHN0YXJ0UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGFydFBvc2l0aW9uID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydFBvc2l0aW9uOyBpIDwgYXJyLmxlbmd0aCAtIHN0YXJ0UG9zaXRpb247IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW2ldLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGFyci5sZW5ndGggKyBzdGFydFBvc2l0aW9uOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW2ldLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtKG9iaikge1xyXG4gICAgICAgIHZhciBub2RlID0gJzxkaXYgY2xhc3M9XCJjYXJvdXNlbF9faXRlbSBjb2wtbC00IGNvbC10LTYgY29sLW0tMTJcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJysgb2JqLmltZyArICdcIiBhbHQ9XCJcIiBjbGFzcz1cImNhcm91c2VsX19pbWdcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbF9fd3JhcFwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImNhcm91c2VsX19jYXRlZ29yeSBjYXJvdXNlbF9fY2F0ZWdvcnktJyArIG9iai5jYXRlZ29yeSArICdcIj4nICsgb2JqLmNhdGVnb3J5WzBdLnRvVXBwZXJDYXNlKCkgKyBvYmouY2F0ZWdvcnkuc3Vic3RyaW5nKDEpICsgJzwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJjYXJvdXNlbF9fdGl0bGVcIj4nICsgb2JqLnRpdGxlICsgJyA8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVXcmFwKGl0ZW1zLCBib29sKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjYXJvdXNlbF9faXRlbS13cmFwIGNhcm91c2VsX19pdGVtLWFjdGl2ZVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gXCJjYXJvdXNlbF9faXRlbS13cmFwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBjcmVhdGVJdGVtKGVsKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUoZmF0aGVyLCBzaXplLCBhcnJJdGVtcykge1xyXG4gICAgICAgIHZhciBudW1iZXIgPSAxMiAvIHNpemU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcChhcnJJdGVtcy5zbGljZShpLCBpICsgc2l6ZSksIHRydWUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVXcmFwKGFyckl0ZW1zLnNsaWNlKGksIGkgKyBzaXplKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgb2JqMSA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL3J1bm5pbmcyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInJ1bm5pbmdcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBcIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajIgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9zd2ltbWluZzIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwic3dpbW1pbmdcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBcIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajMgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9jcm9zc2ZpdDIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiY3Jvc3NmaXRcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBcIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajQgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9ydW5uaW5nMi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJydW5uaW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICAgIHZhciBvYmo1ID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvc3dpbW1pbmcyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInN3aW1taW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICAgIHZhciBvYmo2ID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvY3Jvc3NmaXQyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImNyb3NzZml0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICAgIHZhciBvYmo3ID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvcnVubmluZzIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicnVubmluZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqOCA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL3N3aW1taW5nMi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJzd2ltbWluZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqOSA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL2Nyb3NzZml0Mi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJjcm9zc2ZpdFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqMTAgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9ydW5uaW5nMi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJydW5uaW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICAgIHZhciBvYmoxMSA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL3N3aW1taW5nMi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJzd2ltbWluZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqMTIgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9jcm9zc2ZpdDIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiY3Jvc3NmaXRcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgYWxsSXRlbXMgPSBbb2JqMSwgb2JqMiwgb2JqMywgb2JqNCwgb2JqNSwgb2JqNiwgb2JqNywgb2JqOCwgb2JqOSwgb2JqMTAsIG9iajExLCBvYmoxMl07XHJcblxyXG4gICAgdmFyIGZhdGhlciA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsX19pbm5lclwiKTtcclxuICAgIGlmIChmYXRoZXIpIHtcclxuICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaW5uZXJXaWR0aCA8IDQyNikge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGUoZmF0aGVyLCAxLCBhbGxJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ2Fyb3VzZWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbm5lcldpZHRoIDwgNzY5KSB7XHJcbiAgICAgICAgICAgICAgICBmYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZShmYXRoZXIsIDIsIGFsbEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG1vdmVDYXJvdXNlbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGUoZmF0aGVyLCAzLCBhbGxJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ2Fyb3VzZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaW5uZXJXaWR0aCA8IDQyNikge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGUoZmF0aGVyLCAxLCBhbGxJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ2Fyb3VzZWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbm5lcldpZHRoIDwgNzY5KSB7XHJcbiAgICAgICAgICAgICAgICBmYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZShmYXRoZXIsIDIsIGFsbEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG1vdmVDYXJvdXNlbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGUoZmF0aGVyLCAzLCBhbGxJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ2Fyb3VzZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbXNMb2dpbkZvcm1cIik7XHJcbiAgICB2YXIgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKGxvZ2luRm9ybSk7XHJcbiAgICB2YXIgbG9naW5VcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MzYvYXBpL3B1YmxpYy9jbXMtbG9naW5cIjtcclxuXHJcbiAgICBpZiAobG9naW5Gb3JtKSB7XHJcblxyXG4gICAgICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gZS50YXJnZXQuZW1haWw7XHJcbiAgICAgICAgICAgIHZhciBwYXNzd29yZCA9IGUudGFyZ2V0LnBhc3N3b3JkO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJlbWFpbFwiLCBlbWFpbC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicGFzc3dvcmRcIiwgcGFzc3dvcmQudmFsdWUpO1xyXG4gICAgICAgICAgICBkYXRhID0gZGF0YUZvcm1Ub09iaihkYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBsb2dpblVybCwgZGF0YSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCAmJiB0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dClbXCJBY2Nlc3NUb2tlblwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwiYWRtaW5cIiwgdHJ1ZSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwibmFtZVwiLCBcIkFkbWluXCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiaW5kZXguaHRtbFwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gNDAwICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJJbmNvcnJlY3QgbG9naW4gb3IgcGFzc3dvcmRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNldENvb2tpZShjbmFtZSwgY3ZhbHVlLCBleGRheXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIChleGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIiArIGQudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNuYW1lICsgXCI9XCIgKyBjdmFsdWUgKyBcIjtcIiArIGV4cGlyZXMgKyBcIjtwYXRoPS9cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpbWdJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWlucHV0XCIpO1xyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICBpZiAoaW1nSW5wdXQpIHtcclxuICAgICAgICBcclxuICAgICAgICBpbWdJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHVwbG9hZEltZyhlLnRhcmdldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGxvYWRJbWcoZmlsZSkge1xyXG4gICAgICAgIHZhciBpbWcgPSBmaWxlLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICBmaWxlID1maWxlLmZpbGVzWzBdO1xyXG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZnVuY3Rpb24gKGZpbGUpIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGltZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBpbWcucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICBpbWcucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0ltZyA9IF9jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IGUudGFyZ2V0LnJlc3VsdCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIGlkOiBcImltZ1wiLCBjbGFzczogXCJmb3JtX19pbWdcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChuZXdJbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pKGZpbGUpO1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgd2luZG93LnVwbG9hZEltZyA9IHVwbG9hZEltZztcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIHByb3BzLCBzdHlsZXMsIGNoaWxkKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcHJvcHNba2V5XSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChzdHlsZXMpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGtleSA9PiBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNoaWxkO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBjaGlsZC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIHZhciBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcblxyXG4gICAgICAgIHJlc3VsdCArPSBuZXdEYXRlLmdldERhdGUoKSArIFwiLTBcIiArIChuZXdEYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93TWVzc2FnZShtZXNzYWdlKSB7XHJcbiAgICAgICAgdmFyIGNyZWF0ZUFydGljbGVNZXNzYWdlID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1lc3NhZ2VcIiB9LCBcIlwiLCBtZXNzYWdlKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUFydGljbGVNZXNzYWdlKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY3JlYXRlQXJ0aWNsZU1lc3NhZ2Uuc3R5bGUudG9wID0gXCItXCIgKyBnZXRDb21wdXRlZFN0eWxlKGNyZWF0ZUFydGljbGVNZXNzYWdlKS5oZWlnaHQ7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5fY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XHJcbiAgICB3aW5kb3cuZm9ybWF0RGF0ZSA9IGZvcm1hdERhdGU7XHJcbiAgICB3aW5kb3cuc2hvd01lc3NhZ2UgPSBzaG93TWVzc2FnZTtcclxufSkoKTsiLCJcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0YWJMb2dpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiTG9naW5CdG5cIik7XHJcbiAgICB2YXIgdGFiU2lnbnVwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJTaWdudXBCdG5cIik7XHJcbiAgICB2YXIgdGFiTG9naW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJMb2dpbkNvbnRlbnRcIik7XHJcbiAgICB2YXIgdGFiU2lnbnVwQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiU2lnbnVwQ29udGVudFwiKTtcclxuICAgIHZhciBtb2RhbExvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fbG9naW5cIik7XHJcbiAgICB2YXIgbW9kYWxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC13cmFwXCIpO1xyXG4gICAgdmFyIGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9fY2xvc2VcIik7XHJcbiAgICB2YXIgbG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2luXCIpO1xyXG5cclxuICAgIGlmIChsb2dpbkJ0bikge1xyXG4gICAgICAgIGxvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1vZGFsV3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1vZGFsV3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0YWJMb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJfX2J0bi1hY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgIHRhYkxvZ2luQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwidGFiLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRhYlNpZ251cENvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcInRhYi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB0YWJTaWdudXBCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRhYl9fYnRuLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRhYkxvZ2luQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0YWJfX2J0bi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRhYlNpZ251cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJfX2J0bi1hY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgICAgIHRhYkxvZ2luQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwidGFiLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRhYlNpZ251cENvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZShcInRhYi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB0YWJTaWdudXBCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRhYl9fYnRuLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRhYkxvZ2luQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0YWJfX2J0bi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciB0YWJJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYl9faW5wdXRcIik7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFiSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRhYklucHV0c1tpXS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0YWJJbnB1dHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL1NVQk1JVFxyXG5cclxuXHJcbiAgICAgICAgdmFyIGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5Gb3JtXCIpO1xyXG4gICAgICAgIHZhciBzaWdudXBGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWdudXBGb3JtXCIpO1xyXG4gICAgICAgIHZhciBjcmVhdGVBcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtYXJ0aWNsZVwiKTtcclxuICAgICAgICB2YXIgbG9naW5VcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MzYvYXBpL3B1YmxpYy9sb2dpblwiO1xyXG4gICAgICAgIHZhciBzaWdudXBVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MzYvYXBpL3B1YmxpYy9yZWdpc3RlclwiO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHNpZ251cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblxyXG4gICAgICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gZS50YXJnZXQuZW1haWw7XHJcbiAgICAgICAgICAgIHZhciBwYXNzd29yZCA9IGUudGFyZ2V0LnBhc3N3b3JkO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJlbWFpbFwiLCBlbWFpbC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwicGFzc3dvcmRcIiwgcGFzc3dvcmQudmFsdWUpO1xyXG4gICAgICAgICAgICBkYXRhID0gZGF0YUZvcm1Ub09iaihkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2YWxpZExvZ2luID0gbmV3IFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbGlkTG9naW4uY2hlY2soKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBzZW5kUmVxdWVzdChcIlBPU1RcIiwgbG9naW5VcmwsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCAmJiB0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpW1wiQWNjZXNzVG9rZW5cIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbFdyYXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJlbWFpbFwiLCBlbWFpbC52YWx1ZSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzaWdudXBGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZpcnN0TmFtZSA9IGUudGFyZ2V0LmZpcnN0TmFtZTtcclxuICAgICAgICAgICAgdmFyIGxhc3ROYW1lID0gZS50YXJnZXQubGFzdE5hbWU7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbCA9IGUudGFyZ2V0LmVtYWlsO1xyXG4gICAgICAgICAgICB2YXIgcGFzc3dvcmQgPSBlLnRhcmdldC5wYXNzd29yZDtcclxuXHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiZmlyc3ROYW1lXCIsIGZpcnN0TmFtZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwibGFzdE5hbWVcIiwgbGFzdE5hbWUudmFsdWUpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZChcImVtYWlsXCIsIGVtYWlsLnZhbHVlKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwYXNzd29yZFwiLCBwYXNzd29yZC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhRm9ybVRvT2JqKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZhbGlkU2lnbnVwID0gbmV3IFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogbGFzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICAgICAgfSwgXCJzaWdudXBcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWRTaWdudXAuY2hlY2soKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBzZW5kUmVxdWVzdChcIlBPU1RcIiwgc2lnbnVwVXJsLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PSAyMDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNpZ251cE1lc3NhZ2UgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwic2lnbnVwLW1lc3NhZ2VcIiB9LCBcIlwiLCBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpZ251cE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbFdyYXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ251cE1lc3NhZ2Uuc3R5bGUudG9wID0gXCItXCIgKyBnZXRDb21wdXRlZFN0eWxlKHNpZ251cE1lc3NhZ2UpLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBpZiAoZ2V0Q29va2llKFwiYWRtaW5cIikpIHtcclxuICAgICAgICAgICAgdmFyIGxvZ2luTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIik7XHJcbiAgICAgICAgICAgIHZhciBsb2dpbkxpbmtUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLW5hdl9fdGV4dFwiKTtcclxuICAgICAgICAgICAgdmFyIGNyZWF0ZUFydGljbGUgPSBfY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBcImNyZWF0ZUFydGljbGUuaHRtbFwiLCBjbGFzczogXCJ1c2VyLW5hdl9fbGlua1wiIH0sIFwiXCIsICc8c3BhbiBjbGFzcz1cInVzZXItbmF2X19pY29uIGljb24tYWRkXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwidXNlci1uYXZfX3RleHRcIj5BcnRpY2xlPC9zcGFuPicpO1xyXG4gICAgICAgICAgICBsb2dpbkxpbmsucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVBcnRpY2xlKTtcclxuICAgICAgICAgICAgbG9naW5MaW5rVGV4dC5pbm5lckhUTUwgPSBnZXRDb29raWUoXCJuYW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBsb2dpbkxpbmtUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLW5hdl9fdGV4dFwiKTtcclxuICAgICAgICAgICAgbG9naW5MaW5rVGV4dC5pbm5lckhUTUwgPSBnZXRDb29raWUoXCJlbWFpbFwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0Q29va2llKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cykge1xyXG4gICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArIChleGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIHZhciBleHBpcmVzID0gXCJleHBpcmVzPVwiICsgZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjbmFtZSArIFwiPVwiICsgY3ZhbHVlICsgXCI7XCIgKyBleHBpcmVzICsgXCI7cGF0aD0vXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRDb29raWUoY25hbWUpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWUgPSBjbmFtZSArIFwiPVwiO1xyXG4gICAgICAgICAgICB2YXIgZGVjb2RlZENvb2tpZSA9IGRlY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5jb29raWUpO1xyXG4gICAgICAgICAgICB2YXIgY2EgPSBkZWNvZGVkQ29va2llLnNwbGl0KCc7Jyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBjID0gY2FbaV07XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCkgPT0gJyAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIFZhbGlkYXRpb24ob2JqLCB0eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VtYWlsUmVnID0gL15bLVxcdy5dK0AoW0EtejAtOV1bLUEtejAtOV0rXFwuKStbQS16XXsyLDR9JC87XHJcbiAgICAgICAgICAgIHRoaXMuX3Bhc3N3b3JkUmVnID0gL14oPz0uKlxcZCkoPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89KC4qW2EtekEtWl0pezR9KS57OCwyMH0kLztcclxuICAgICAgICAgICAgdGhpcy5fbmFtZSA9IC9eW0EtWl17MX1bYS16XXsxLDEwfSQvO1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzID0gb2JqO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwgPSBvYmouZW1haWwudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmQgPSBvYmoucGFzc3dvcmQudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChvYmouZmlyc3ROYW1lICYmIG9iai5sYXN0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBvYmouZmlyc3ROYW1lLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0TmFtZSA9IG9iai5sYXN0TmFtZS52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgVmFsaWRhdGlvbi5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZW1haWxSZWcudGVzdCh0aGlzLmVtYWlsKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5lbWFpbC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5lbWFpbC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fcGFzc3dvcmRSZWcudGVzdCh0aGlzLnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5wYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5wYXNzd29yZC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT0gXCJzaWdudXBcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lLnRlc3QodGhpcy5maXJzdE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5maXJzdE5hbWUuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZmlyc3ROYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUudGVzdCh0aGlzLmxhc3ROYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMubGFzdE5hbWUuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMubGFzdE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSkoKTsiLCJ2YXIgc2hvd0FydGljbGVzID0gKGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuXHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1uYXZcIik7XHJcbiAgICB2YXIgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XHJcblxyXG4gICAgaWYgKG1lbnUpIHtcclxuICAgICAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm1haW4tbmF2X2FjdGl2ZVwiKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm1haW4tbmF2X2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGFic0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX2xpc3RcIik7XHJcbiAgICB2YXIgY3JlYXRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLWFydGljbGUgZm9ybVwiKTtcclxuICAgIHZhciBtYW5hZ2VtZW50TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFuYWdlbWVudF9fbGlzdFwiKTtcclxuICAgIHZhciBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1hcnRpY2xlIGZvcm1cIik7XHJcblxyXG4gICAgaWYgKHRhYnNMaXN0KSB7XHJcbiAgICAgICAgdGFic0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY3JlYXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX2l0ZW1fYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ3NfYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZXR0aW5nc19hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUZvcm0uY2xhc3NMaXN0LmFkZChcInNldHRpbmdzX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tbWFuYWdlbWVudFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX19pdGVtX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidGFic19faXRlbV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdzX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2V0dGluZ3NfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwidGFic19faXRlbV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VtZW50TGlzdC5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0FydGljbGVzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWVkaXRcIikpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19faXRlbV9hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcInRhYnNfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5nc19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcInNldHRpbmdzX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInRhYnNfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgZWRpdEZvcm0uY2xhc3NMaXN0LmFkZChcInNldHRpbmdzX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcblxyXG59KSgpOyIsInZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gYWRkUmVxdWVzdChkYXRhT2JqKSB7XHJcbiAgICAgICAgZGF0YU9iai5jYXRlZ29yaWVzSWRzID0gW2RhdGFPYmouY2F0ZWdvcmllc0lkc107XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo1MDUzNi9hcGkvY21zL3Bvc3RzXCIpO1xyXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCB0b2tlbik7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFPYmopKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEltYWdlKGZpbGUpIHtcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vbG9jYWxob3N0OjUwNTM2L2FwaS9jbXMvaW1hZ2VzL3VwbG9hZFwiKTtcclxuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgdG9rZW4pO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZChmaWxlKTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0UmVxdWVzdChkYXRhT2JqKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJQVVRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjUwNTM2L2FwaS9jbXMvcG9zdHNcIik7XHJcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIHRva2VuKTtcclxuICAgICAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkoZGF0YU9iaikpO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUmVxdWVzdChpZCkge1xyXG4gICAgICAgIHZhciBvYmogPSB7IFwiSWRcIjogaWQgfTtcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub3BlbihcIkRFTEVURVwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MzYvYXBpL2Ntcy9wb3N0c1wiKTtcclxuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgdG9rZW4pO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShvYmopKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEFydGljbGUoaWQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudDtcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MzYvYXBpL3B1YmxpYy9wb3N0cy9cIiArIGlkLCBmYWxzZSk7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNlbmRSZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhT2JqKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xyXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFPYmopKTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZGF0YUZvcm1Ub09iaihkYXRhRm9ybSkge1xyXG4gICAgICAgIHZhciBvYmogPSB7fTtcclxuICAgICAgICBkYXRhRm9ybS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIG9ialtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2F0ZWdvcnlJZChuYW1lKSB7XHJcblxyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgdmFyIGlkO1xyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcmllcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc1tcIkNhdGVnb3JpZXNcIl0uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lk5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50LklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBlbGVtZW50LklkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MzYvYXBpL3B1YmxpYy9jYXRlZ29yaWVzXCIsIGZhbHNlKTtcclxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDYXRlZ29yeU5hbWUoaWQpIHtcclxuICAgICAgICB2YXIgbmFtZTtcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2F0ZWdvcmllcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllc1tcIkNhdGVnb3JpZXNcIl0uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LklkID09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBlbGVtZW50Lk5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo1MDUzNi9hcGkvcHVibGljL2NhdGVnb3JpZXNcIiwgZmFsc2UpO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxDYXRlZ29yaWVzKCkge1xyXG4gICAgICAgIHZhciBjYXRlZ29yaWVzO1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KVtcIkNhdGVnb3JpZXNcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo1MDUzNi9hcGkvcHVibGljL2NhdGVnb3JpZXNcIiwgZmFsc2UpO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdENhdGVnb3J5KGVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgY2F0ZWdvcmllcyA9IGdldEFsbENhdGVnb3JpZXMoKTtcclxuICAgICAgICBpZiAoY2F0ZWdvcmllcykge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBfY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiBpdGVtLklkIH0sIFwiXCIsIGl0ZW0uTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIFZhbGlkYXRpb25BcnRpY2xlKG9iaikge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBvYmo7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IG9iai50aXRsZS52YWx1ZTtcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gb2JqLmNhdGVnb3J5LnZhbHVlO1xyXG4gICAgICAgIGlmIChvYmouZmlsZSAmJiBvYmouZmlsZS5maWxlc1swXSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGUgPSBvYmouZmlsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gb2JqLnRleHQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBWYWxpZGF0aW9uQXJ0aWNsZS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRpdGxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMudGl0bGUuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMudGl0bGUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuY2F0ZWdvcnkuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmZpbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5maWxlLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmZpbGUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy50ZXh0LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnRleHQuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAodHlwZSwgY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmV2ZW50c1t0eXBlXSA9IHRoaXMuZXZlbnRzW3R5cGVdIHx8IFtdO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzW3R5cGVdLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIEV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uICh0eXBlLCBhcmcpIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudHNbdHlwZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudHNbdHlwZV0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayhhcmcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIHdpbmRvdy5hZGRSZXF1ZXN0ID0gYWRkUmVxdWVzdDtcclxuICAgIHdpbmRvdy5hZGRJbWFnZSA9IGFkZEltYWdlO1xyXG4gICAgd2luZG93LmVkaXRSZXF1ZXN0ID0gZWRpdFJlcXVlc3Q7XHJcbiAgICB3aW5kb3cucmVtb3ZlUmVxdWVzdCA9IHJlbW92ZVJlcXVlc3Q7XHJcbiAgICB3aW5kb3cuZ2V0QXJ0aWNsZSA9IGdldEFydGljbGU7XHJcbiAgICB3aW5kb3cuc2VuZFJlcXVlc3QgPSBzZW5kUmVxdWVzdDtcclxuICAgIHdpbmRvdy5kYXRhRm9ybVRvT2JqID0gZGF0YUZvcm1Ub09iajtcclxuICAgIHdpbmRvdy5nZXRDYXRlZ29yeUlkID0gZ2V0Q2F0ZWdvcnlJZDtcclxuICAgIHdpbmRvdy5nZXRDYXRlZ29yeU5hbWUgPSBnZXRDYXRlZ29yeU5hbWU7XHJcbiAgICB3aW5kb3cuZ2V0QWxsQ2F0ZWdvcmllcyA9IGdldEFsbENhdGVnb3JpZXM7XHJcbiAgICB3aW5kb3cuY3JlYXRlU2VsZWN0Q2F0ZWdvcnkgPSBjcmVhdGVTZWxlY3RDYXRlZ29yeTtcclxuICAgIHdpbmRvdy5WYWxpZGF0aW9uQXJ0aWNsZSA9IFZhbGlkYXRpb25BcnRpY2xlO1xyXG59KSgpO1xyXG5cclxuIiwiKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFydGljbGVQYWdlXCIpO1xyXG4gICAgXHJcbiAgICBpZihhcnRpY2xlKSB7XHJcbiAgICAgICAgdmFyIGlkID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFwiP1wiLCBcIlwiKS5zcGxpdChcIj1cIilbMV07XHJcbiAgICAgICAgdmFyIGFydGljbGVEYXRhID0gZ2V0QXJ0aWNsZShpZCk7XHJcblxyXG4gICAgICAgIHZhciB0aXRsZSA9IGFydGljbGUucXVlcnlTZWxlY3RvcihcIi5hcnRpY2xlX190aXRsZVwiKTtcclxuICAgICAgICB2YXIgY2F0ZWdvcnkgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZV9fY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgdmFyIHRpbWUgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZV9fZGF0ZVwiKTtcclxuICAgICAgICB2YXIgdGV4dCA9IGFydGljbGUucXVlcnlTZWxlY3RvcihcIi5hcnRpY2xlX190ZXh0XCIpO1xyXG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiYXJ0aWNsZV9faW1nXCIpO1xyXG4gICAgICAgIGltZy5zcmMgPSBhcnRpY2xlRGF0YS5JbWFnZS5JbWFnZVRyYW5zZm9ybXNbMl0uVXJsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFydGljbGVEYXRhLkltYWdlKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBhcnRpY2xlRGF0YS5UaXRsZTtcclxuICAgICAgICBjYXRlZ29yeS5pbm5lckhUTUwgPSBhcnRpY2xlRGF0YS5DYXRlZ29yaWVzWzBdLk5hbWU7XHJcbiAgICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImFydGljbGVfX2NhdGVnb3J5LVwiICsgKGFydGljbGVEYXRhLkNhdGVnb3JpZXNbMF0uTmFtZSkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgdGltZS5pbm5lckhUTUwgPSBmb3JtYXREYXRlKGFydGljbGVEYXRhLkNyZWF0aW9uRGF0ZSk7XHJcbiAgICAgICAgdGltZS5zZXRBdHRyaWJ1dGUoXCJkYXRldGltZVwiLCBmb3JtYXREYXRlKGFydGljbGVEYXRhLkNyZWF0aW9uRGF0ZSkpO1xyXG4gICAgICAgIHRleHQuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICB0ZXh0LmlubmVySFRNTCArPSBhcnRpY2xlRGF0YS5EZXNjcmlwdGlvbjtcclxuXHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG4iLCJmdW5jdGlvbiBDb250cm9sbGVyKG1vZGVsLCB2aWV3KSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgIHZpZXcub24oXCJhZGRcIiwgdGhpcy5hZGRBcnRpY2xlLmJpbmQodGhpcykpO1xyXG4gICAgdmlldy5vbihcInJlbW92ZVwiLCB0aGlzLnJlbW92ZUFydGljbGUuYmluZCh0aGlzKSk7XHJcbiAgICB2aWV3Lm9uKFwiZWRpdFwiLCB0aGlzLmVkaXRBcnRpY2xlLmJpbmQodGhpcykpO1xyXG5cclxuICAgIG1vZGVsLm9uKFwiY2hhbmdlXCIsIHRoaXMuY2hhbmdlVmlldy5iaW5kKHRoaXMpKTtcclxufTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAgIFxyXG5cclxuICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmFkZEFydGljbGUgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMubW9kZWwuYWRkSXRlbShkYXRhLmZpbGUpO1xyXG4gICAgICAgIHRoaXMudmlldy5hZGRJdGVtKGRhdGEsIHJlc3VsdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIENvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUFydGljbGUgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLm1vZGVsLnJlbW92ZUl0ZW0oaWQpO1xyXG4gICAgICAgIHRoaXMudmlldy5yZW1vdmVJdGVtKGlkLCByZXN1bHQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBDb250cm9sbGVyLnByb3RvdHlwZS5lZGl0QXJ0aWNsZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5tb2RlbC51cGRhdGVJdGVtKGRhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLnZpZXcuZWRpdEl0ZW0oZGF0YSwgcmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICBDb250cm9sbGVyLnByb3RvdHlwZS5jaGFuZ2VWaWV3ID0gZnVuY3Rpb24oaWQpIHtcclxuICAgICAgICB0aGlzLnZpZXcucmVtb3ZlSXRlbShpZCk7XHJcbiAgICB9XHJcbiAgICBcclxufSkoKTsiLCJmdW5jdGlvbiBNb2RlbCgpIHtcclxuICAgIHRoaXMuaXRlbTtcclxuICAgIEV2ZW50RW1pdHRlci5hcHBseSh0aGlzKTtcclxufVxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIE1vZGVsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRFbWl0dGVyLnByb3RvdHlwZSk7XHJcbiAgICBNb2RlbC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBFdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgTW9kZWwucHJvdG90eXBlLmdldEFsbEFydGljbGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfTtcclxuXHJcbiAgICBNb2RlbC5wcm90b3R5cGUuYWRkSXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgcmV0dXJuIGFkZEltYWdlKGl0ZW0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBNb2RlbC5wcm90b3R5cGUudXBkYXRlSXRlbSA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIGVkaXRSZXF1ZXN0KGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBNb2RlbC5wcm90b3R5cGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByZW1vdmVSZXF1ZXN0KGlkKTtcclxuICAgIH07XHJcblxyXG4gICAgTW9kZWwucHJvdG90eXBlLmFkZEltYWdlID0gZnVuY3Rpb24oZmlsZSkge1xyXG5cclxuICAgIH1cclxufSkoKTsgIiwiZnVuY3Rpb24gVmlldygpIHtcclxuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFuYWdlbWVudF9fbGlzdFwiKTtcclxuICAgIHRoaXMuZm9ybUFkZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWFydGljbGVfX2Zvcm1cIik7XHJcbiAgICB0aGlzLmZvcm1FZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWFydGljbGVfX2Zvcm1cIik7XHJcbiAgICB0aGlzLmJ0blJlbW92ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVtb3ZlLWJ0blwiKTtcclxuXHJcbiAgICBpZiAodGhpcy5idG5SZW1vdmUpIHtcclxuICAgICAgICB0aGlzLmJ0blJlbW92ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVSZW1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZm9ybUFkZCkge1xyXG4gICAgICAgIHRoaXMuZm9ybUFkZC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuaGFuZGxlQWRkLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIEV2ZW50RW1pdHRlci5hcHBseSh0aGlzKTtcclxufTtcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRFbWl0dGVyLnByb3RvdHlwZSk7XHJcbiAgICBWaWV3LnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5zaG93QWxsQXJ0aWNsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFydGljbGVzO1xyXG5cclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlcyA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpW1wiUG9zdHNcIl07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo1MDUzNi9hcGkvcHVibGljL3Bvc3RzXCIsIGZhbHNlKTtcclxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICBpZiAodGhpcy5saXN0KSB7XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5saXN0LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgIGFydGljbGVzLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnRpY2xlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5jcmVhdGVFbGVtZW50KGFydGljbGVzW2ldKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgVmlldy5wcm90b3R5cGUuYWRkSXRlbSA9IGZ1bmN0aW9uIChkYXRhLCByZXF1ZXN0KSB7XHJcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmb3JtID0gdGhpcy5mb3JtQWRkO1xyXG4gICAgICAgIHZhciBmaWxlID0gZm9ybS5maWxlO1xyXG4gICAgICAgIHZhciB0aXRsZSA9IGZvcm0udGl0bGU7XHJcbiAgICAgICAgdmFyIHRleHQgPSBmb3JtLnRleHQ7XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5ID0gZm9ybS5jYXRlZ29yeTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZGlzcGxheUFsbEFydGljbGVzKCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50SW1nID0gZmlsZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBwYXJlbnRJbWcucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbWdcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHZhciBuZXdJbWcgPSBfY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCJpbWcvaW1nX2RlZmF1bHQuanBnXCIsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwLCBpZDogXCJpbWdcIiwgY2xhc3M6IFwiZm9ybV9faW1nIGltZ19kZWZhdWx0XCIgfSk7XHJcbiAgICAgICAgICAgIHBhcmVudEltZy5hcHBlbmRDaGlsZChuZXdJbWcpO1xyXG5cclxuICAgICAgICAgICAgdGl0bGUudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB0ZXh0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgY2F0ZWdvcnkub3B0aW9uc1swXS5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuc2hvd0FsbEFydGljbGVzKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3QpIHtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDAgJiYgdGhpcy5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VJZCA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpW1wiSW1hZ2VJZFwiXTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmltYWdlSWQgPSBpbWFnZUlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZFJlcXVlc3QoZGF0YSkub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjA0ICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShcIkFydGljbGUgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUFsbEFydGljbGVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gNDAwICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSBzaG91bGQgc2lnbiBpbiBhcyBhZG1pblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc3BvbnNlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpID09IFwiYmxvZy0wMDA1XCIgJiYgdGhpcy5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSBzaG91bGQgc2lnbiBpbiBhcyBhZG1pblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09IDQwMCAmJiB0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IHNob3VsZCBzaWduIGluIGFzIGFkbWluXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc3BvbnNlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KSA9PSBcImJsb2ctMDAwNVwiICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IHNob3VsZCBzaWduIGluIGFzIGFkbWluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5maW5kTGlzdEl0ZW0gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5saXN0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiJyArIGlkICsgJ1wiJyk7XHJcbiAgICB9XHJcblxyXG4gICAgVmlldy5wcm90b3R5cGUuZWRpdEl0ZW0gPSBmdW5jdGlvbiAoZGF0YSwgcmVxdWVzdCkge1xyXG5cclxuICAgICAgICB2YXIgbGlzdEl0ZW0gPSB0aGlzLmZpbmRMaXN0SXRlbShkYXRhLmlkKTtcclxuICAgICAgICB2YXIgdGl0bGUgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKFwiLm1hbmFnZW1lbnRfX3RpdGxlXCIpO1xyXG4gICAgICAgIHZhciB2aWV3cyA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kYXJ5X192aWV3c1wiKTtcclxuICAgICAgICB2YXIgZGF0ZSA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kYXJ5X19kYXRlXCIpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjA0ICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGdldEFydGljbGUoZGF0YS5pZCk7XHJcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShcIkFydGljbGUgc3VjY2Vzc2Z1bGx5IHVwZGF0ZSFcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IGl0ZW0uVGl0bGU7XHJcbiAgICAgICAgICAgICAgICB2aWV3cy5pbm5lckhUTUwgPSBpdGVtLlZpZXdzQ291bnQ7XHJcbiAgICAgICAgICAgICAgICBkYXRlLmlubmVySFRNTCA9IGZvcm1hdERhdGUoaXRlbS5DcmVhdGlvbkRhdGUpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJkYXRldGltZVwiLCBkYXRlLkNyZWF0aW9uRGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gNDAwICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIllvdSBzaG91bGQgc2lnbiBpbiBhcyBhZG1pblwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc3BvbnNlVGV4dCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KSA9PSBcImJsb2ctMDAwNVwiICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3Ugc2hvdWxkIHNpZ24gaW4gYXMgYWRtaW5cIik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gKGlkLCByZXF1ZXN0KSB7XHJcbiAgICAgICAgdmFyIGxpc3RJdGVtID0gdGhpcy5maW5kTGlzdEl0ZW0oaWQpO1xyXG4gICAgICAgIHZhciBsaXN0ID0gdGhpcy5saXN0O1xyXG5cclxuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwNCAmJiB0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoXCJBcnRpY2xlIHN1Y2Nlc3NmdWxseSByZW1vdmVkIVwiKTtcclxuICAgICAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdHVzID09IDQwMCAmJiB0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJZb3Ugc2hvdWxkIHNpZ24gaW4gYXMgYWRtaW5cIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNwb25zZVRleHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KSA9PSBcImJsb2ctMDAwNVwiICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3Ugc2hvdWxkIHNpZ24gaW4gYXMgYWRtaW5cIik7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKGFydGljbGUpIHtcclxuICAgICAgICB2YXIgZWRpdEJ0biA9IF9jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGNsYXNzOiBcImJ0biBidG5fX2VkaXRcIiB9LCBcIlwiLCBcIkVkaXRcIik7XHJcbiAgICAgICAgdmFyIHJlbW92ZUJ0biA9IF9jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGNsYXNzOiBcImJ0biBidG5fX3JlbW92ZVwiIH0sIFwiXCIsIFwiUmVtb3ZlXCIpO1xyXG4gICAgICAgIHZhciBidG5XcmFwID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJidG5fX3dyYXBcIiB9LCBcIlwiLCBbZWRpdEJ0biwgcmVtb3ZlQnRuXSk7XHJcblxyXG4gICAgICAgIHZhciB2aWV3cyA9IF9jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzOiBcInNlY29uZGFyeV9fdmlld3NcIiB9LCBcIlwiLCBhcnRpY2xlLlZpZXdzQ291bnQgKyBcIlwiKTtcclxuICAgICAgICB2YXIgdGltZSA9IF9jcmVhdGVFbGVtZW50KFwidGltZVwiLCB7IGNsYXNzOiBcInNlY29uZGFyeV9fZGF0ZVwiLCBwdWJkYXRlOiBcIlwiLCBkYXRldGltZTogZm9ybWF0RGF0ZShhcnRpY2xlLkNyZWF0aW9uRGF0ZSkgfSwgXCJcIiwgZm9ybWF0RGF0ZShhcnRpY2xlLkNyZWF0aW9uRGF0ZSkpO1xyXG4gICAgICAgIHZhciBzZWNvbmRhcnkgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcInNlY29uZGFyeSBtYW5hZ2VtZW50X19zZWNvbmRhcnlcIiB9LCBcIlwiLCBbdmlld3MsIHRpbWVdKTtcclxuXHJcbiAgICAgICAgdmFyIHRpdGxlID0gX2NyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzOiBcIm1hbmFnZW1lbnRfX3RpdGxlXCIgfSwgXCJcIiwgYXJ0aWNsZS5UaXRsZSk7XHJcblxyXG4gICAgICAgIHZhciBpdGVtID0gX2NyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGNsYXNzOiBcIm1hbmFnZW1lbnRfX2l0ZW0gXCIgfSwgXCJcIiwgW3RpdGxlLCBzZWNvbmRhcnksIGJ0bldyYXBdKTtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW1XcmFwID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJtYW5hZ2VtZW50X19pdGVtLXdyYXAgY29sLWwtMyBjb2wtdC02IGNvbC1tLTEyXCIsIFwiZGF0YS1pZFwiOiBhcnRpY2xlLklkIH0sIFwiXCIsIFtpdGVtXSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKGl0ZW1XcmFwKTtcclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgdmFyIGVkaXRCdG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19lZGl0XCIpO1xyXG4gICAgICAgIHZhciByZW1vdmVCdG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19yZW1vdmVcIik7XHJcblxyXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlRWRpdC5iaW5kKHRoaXMpKTtcclxuICAgICAgICByZW1vdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlUmVtb3ZlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5oYW5kbGVBZGQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgdGl0bGUgPSBldmVudC50YXJnZXQudGl0bGU7XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5ID0gZXZlbnQudGFyZ2V0LmNhdGVnb3J5O1xyXG4gICAgICAgIHZhciBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGU7XHJcbiAgICAgICAgdmFyIHRleHQgPSBldmVudC50YXJnZXQudGV4dDtcclxuXHJcbiAgICAgICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBkYXRhLmFwcGVuZChcInRpdGxlXCIsIHRpdGxlLnZhbHVlKTtcclxuICAgICAgICBkYXRhLmFwcGVuZChcImNhdGVnb3JpZXNJZHNcIiwgY2F0ZWdvcnkudmFsdWUpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlLmZpbGVzWzBdKTtcclxuICAgICAgICBkYXRhLmFwcGVuZChcImRlc2NyaXB0aW9uXCIsIHRleHQudmFsdWUpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHZhbGlkYXRpb24gPSBuZXcgVmFsaWRhdGlvbkFydGljbGUoe1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcclxuICAgICAgICAgICAgZmlsZTogZmlsZSxcclxuICAgICAgICAgICAgdGV4dDogdGV4dFxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KFwiYWRkXCIsIGRhdGFGb3JtVG9PYmooZGF0YSkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5oYW5kbGVFZGl0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGxpc3RJdGVtID0gZmluZFBhcmVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIHZhciBpZCA9IGxpc3RJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XHJcbiAgICAgICAgdmFyIGVkaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0LWFydGljbGVfX2Zvcm1cIik7XHJcbiAgICAgICAgdmFyIGl0ZW1PYmogPSBnZXRBcnRpY2xlKGlkKTtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxFdmVudChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZW1pdChcImVkaXRcIiwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlZGl0Rm9ybS5maWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdXBsb2FkSW1nKGUudGFyZ2V0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHBhcmVudEltZyA9IGVkaXRGb3JtLmZpbGUucGFyZW50Tm9kZTtcclxuICAgICAgICBwYXJlbnRJbWcucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbWdcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgdmFyIG5ld0ltZyA9IF9jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBpdGVtT2JqLkltYWdlLlVybCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIGlkOiBcImltZ1wiLCBjbGFzczogXCJmb3JtX19pbWcgaW1nX2RlZmF1bHRcIiB9KTtcclxuICAgICAgICBwYXJlbnRJbWcuYXBwZW5kQ2hpbGQobmV3SW1nKTtcclxuICAgICAgICBlZGl0Rm9ybS50aXRsZS52YWx1ZSA9IGl0ZW1PYmouVGl0bGU7XHJcbiAgICAgICAgZWRpdEZvcm0udGV4dC52YWx1ZSA9IGl0ZW1PYmouRGVzY3JpcHRpb247XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWRpdEZvcm0uY2F0ZWdvcnkub3B0aW9ucykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUgPT0gaXRlbU9iai5DYXRlZ29yaWVzWzBdLklkKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX2l0ZW1fYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdzX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2V0dGluZ3NfYWN0aXZlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWVkaXRcIikucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwidGFic19faXRlbV9hY3RpdmVcIik7XHJcbiAgICAgICAgdGhpcy5mb3JtRWRpdC5jbGFzc0xpc3QuYWRkKFwic2V0dGluZ3NfYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICBlZGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIHRpdGxlID0gZS50YXJnZXQudGl0bGU7XHJcbiAgICAgICAgICAgIHZhciBjYXRlZ29yeSA9IGUudGFyZ2V0LmNhdGVnb3J5O1xyXG4gICAgICAgICAgICB2YXIgZmlsZSA9IGUudGFyZ2V0LmZpbGU7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gZS50YXJnZXQudGV4dDtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiY2F0ZWdvcmllc0lkc1wiLCBjYXRlZ29yeS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiaW1nXCIsIGZpbGUuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZChcInRleHRcIiwgdGV4dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiaWRcIiwgaWQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSBuZXcgVmFsaWRhdGlvbkFydGljbGUoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgLy8gZmlsZTogZmlsZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5jaGVjaygpKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsRXZlbnQoZGF0YUZvcm1Ub09iaihkYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgVmlldy5wcm90b3R5cGUuaGFuZGxlUmVtb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGxpc3RJdGVtID0gZmluZFBhcmVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgIHZhciBpZCA9IGxpc3RJdGVtLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdChcInJlbW92ZVwiLCBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZFBhcmVudChlbGVtZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbmRQYXJlbnQoZWxlbWVudC5wYXJlbnROb2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59KSgpOyIsInZhciBzdGF0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYW5hZ2VtZW50X19saXN0XCIpO1xyXG52YXIgc2VsZWN0Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdC1jYXRlZ29yeVwiKTtcclxuQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoc2VsZWN0Q2F0ZWdvcnkpLmZvckVhY2goZWxlbWVudCA9PiBjcmVhdGVTZWxlY3RDYXRlZ29yeShlbGVtZW50KSk7XHJcblxyXG52YXIgbW9kZWwgPSBuZXcgTW9kZWwoc3RhdGUgfHwgdW5kZWZpbmVkKTtcclxuXHJcblxyXG52YXIgdmlldyA9IG5ldyBWaWV3KCk7XHJcbnZhciBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIobW9kZWwsIHZpZXcpO1xyXG5cclxudmlldy5zaG93QWxsQXJ0aWNsZXMoKTtcclxuXHJcblxyXG4iLCIoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlSXRlbShkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgZGF0YS5jYXRlZ29yeSA9IHtpZDpcIjM5MzA1M2RkLTMzODgtZTgxMS04MDljLWUwM2Y0OWMyNWRkYVwiLCBuYW1lOiBcIlJ1bm5pbmdcIn07XHJcblxyXG4gICAgICAgIHZhciB2aWV3cyA9IF9jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3M6IFwic2Vjb25kYXJ5X192aWV3c1wifSwgXCJcIiwgXCJcIitkYXRhLlZpZXdzQ291bnQpO1xyXG4gICAgICAgIHZhciB0aW1lID0gX2NyZWF0ZUVsZW1lbnQoXCJ0aW1lXCIsIHtjbGFzczogXCJzZWNvbmRhcnlfX2RhdGVcIiwgcHViZGF0ZTogXCJcIiwgZGF0ZXRpbWU6IGZvcm1hdERhdGUoZGF0YS5DcmVhdGlvbkRhdGUpIH0sIFwiXCIsIGZvcm1hdERhdGUoZGF0YS5DcmVhdGlvbkRhdGUpKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgc2Vjb25kYXJ5ID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzOiBcInNlY29uZGFyeSBjYXRhbG9nX19zZWNvbmRhcnlcIn0sIFwiXCIsIFt2aWV3cywgdGltZV0pO1xyXG4gICAgICAgIHZhciBwcmV2aWV3ID0gX2NyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiY2F0YWxvZ19fcHJldmlld1wifSwgXCJcIiAsIGRhdGEuRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHZhciBjYXRlZ29yeSA9IF9jcmVhdGVFbGVtZW50KFwiYVwiLCB7Y2xhc3M6IFwiY2F0YWxvZ19fY2F0ZWdvcnkgY2F0YWxvZ19fY2F0ZWdvcnktXCIrIGRhdGEuY2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpLCBcImRhdGEtaWRcIjogZGF0YS5jYXRlZ29yeS5pZH0sIFwiXCIsIGRhdGEuY2F0ZWdvcnkubmFtZSk7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gX2NyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzczogXCJjYXRhbG9nX190aXRsZVwifSwgXCJcIiwgZGF0YS5UaXRsZSk7XHJcblxyXG4gICAgICAgIHZhciB3cmFwID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzOiBcImNhdGFsb2dfX3dyYXBcIn0sIFwiXCIsIFt0aXRsZSwgY2F0ZWdvcnksIHByZXZpZXcsIHNlY29uZGFyeV0pO1xyXG4gICAgICAgIHZhciBpbWcgPSBfY3JlYXRlRWxlbWVudChcImltZ1wiLCB7Y2xhc3M6IFwiY2F0YWxvZ19faW1nXCIsIHNyYzogZGF0YS5JbWFnZVVybH0pO1xyXG5cclxuICAgICAgICB2YXIgaXRlbSA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzczogXCJjYXRhbG9nX19pdGVtIGNvbC1sLTQgY29sLXQtNiBjb2wtbS0xMlwiLCBcImRhdGEtaWRcIjogZGF0YS5JZH0sIFwiXCIsIFtpbWcsIHdyYXBdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFkZEV2ZW50TGlzdGVuZXJzKGl0ZW0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhpdGVtKSB7XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmNhdGFsb2dfX2NhdGVnb3J5XCIpO1xyXG4gICAgICAgIHZhciB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5jYXRhbG9nX190aXRsZVwiKTtcclxuICAgICAgICBjYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUFydGljbGVzLmJpbmQobnVsbCwgW2NhdGVnb3J5LmRhdGFzZXQuaWRdKSk7XHJcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlZGlyZWN0LmJpbmQobnVsbCwgW2l0ZW0uZGF0YXNldC5pZCwgXCJhcnRpY2xlLmh0bWxcIl0pKTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcnMgPSBhZGRFdmVudExpc3RlbmVycztcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBcnRpY2xlcygpIHtcclxuICAgICAgICB2YXIgY2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0YWxvZ19faXRlbXNcIik7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9cIiwgXCJcIikuc3BsaXQoXCI9XCIpWzFdKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnRpY2xlcyA9IGdldEFsbEFydGljbGVzKFt3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXCI/XCIsIFwiXCIpLnNwbGl0KFwiPVwiKVsxXV0pO1xyXG5cclxuICAgICAgICAgICAgaWYoY2F0YWxvZykge1xyXG4gICAgICAgICAgICAgICAgY2F0YWxvZy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZXMucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gY3JlYXRlSXRlbShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0YWxvZy5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFydGljbGVzID0gZ2V0QWxsQXJ0aWNsZXMoYXJndW1lbnRzWzBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0YWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGFsb2cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBjcmVhdGVJdGVtKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRhbG9nLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFydGljbGVzID0gZ2V0QWxsQXJ0aWNsZXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0YWxvZ19faXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0YWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGFsb2cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBjcmVhdGVJdGVtKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRhbG9nLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KGFyZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgICAgICAgaWYgKGFyZ1swXSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFyZ1sxXSArIFwiP2lkPVwiICsgYXJnWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBhcmdbMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5kaXNwbGF5QXJ0aWNsZXMgPSBkaXNwbGF5QXJ0aWNsZXM7XHJcbiAgICB3aW5kb3cucmVkaXJlY3QgPSByZWRpcmVjdDtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gZ2V0QWxsQXJ0aWNsZXMoY2F0ZWdvcmllc0lkcykge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCAmJiB0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dClbXCJQb3N0c1wiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2F0ZWdvcmllc0lkcykge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzSWRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gY2F0ZWdvcmllc0lkcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllc0lkc1tpbmRleF0gPSBcImNhdGVnb3JpZXNJZHM9XCIgKyBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzSWRzW2luZGV4XSA9IFwiY2F0ZWdvcmllc0lkcz1cIiArIGl0ZW0gKyBcIiZcIjtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzSWRzID0gY2F0ZWdvcmllc0lkcy5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzSWRzKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo1MDUzNi9hcGkvcHVibGljL3Bvc3RzP1wiICsgY2F0ZWdvcmllc0lkcywgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllc0lkcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MzYvYXBpL3B1YmxpYy9wb3N0c1wiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgd2luZG93LmdldEFsbEFydGljbGVzID0gZ2V0QWxsQXJ0aWNsZXM7XHJcbn0pKCk7IiwiZGlzcGxheUFydGljbGVzKCk7XHJcblxyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXNpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlX19idG5cIik7XHJcbiAgICAgICAgdmFyIGFzaWRlV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGUtd3JhcFwiKTtcclxuICAgICAgICB2YXIgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlXCIpO1xyXG4gICAgICAgIHZhciBib29sID0gdHJ1ZTtcclxuICAgICAgICBpZiAoYXNpZGVCdG4pIHtcclxuICAgICAgICAgICAgYXNpZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zaXRpb24gPSBcIjEuN3NcIjtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgtMTgwZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnJpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShhc2lkZSkud2lkdGgpICsgMTAgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNpZGVXcmFwLnN0eWxlLnJpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiMzYWEzZTRcIjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNpdGlvbiA9IFwiMS43c1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5yaWdodCA9IFwiMjBweFwiOztcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGFzaWRlV3JhcC5zdHlsZS5yaWdodCA9IFwiLTEwMHZ3XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDYXRlZ29yaWVzKCl7XHJcbiAgICAgICAgdmFyIGFzaWRlQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnkuYXNpZGVfX2VsZW1lbnRcIik7XHJcbiAgICAgICAgaWYoYXNpZGVDYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gYXNpZGVDYXRlZ29yaWVzLnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnlfX2xpc3RcIik7XHJcbiAgICBcclxuICAgICAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSBnZXRBbGxDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gX2NyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzczogXCJjYXRlZ29yeV9fbGluayBhc2lkZV9fbGluayBhc2lkZV9fbGluay1cIiArIChlbGVtZW50Lk5hbWUpLnRvTG93ZXJDYXNlKCl9LCBcIlwiLCBlbGVtZW50Lk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVkaXJlY3QuYmluZChudWxsLCBbZWxlbWVudC5JZCwgXCJpbmRleC5odG1sXCJdKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSBfY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzczogXCJjYXRlZ29yeV9faXRlbSBhc2lkZV9faXRlbVwifSwgXCJcIiwgW2xpbmtdKTtcclxuICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUNhdGVnb3JpZXMoKTtcclxufSkoKTsiXX0=
