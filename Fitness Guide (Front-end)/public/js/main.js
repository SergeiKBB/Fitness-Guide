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
        var number = 9 / size;
        for (var i = 0; i < number; i++) {
            if (i == 0) {
                father.appendChild(createWrap(arrItems.slice(i, i + size), true));
            } else {
                father.appendChild(createWrap(arrItems.slice(i * size, (i *size)+3)));
            }
        }
    }


    var obj1 = {
        img: "img/running.jpg",
        category: "running",
        title: "Lorem ipsum "
    }
    var obj2 = {
        img: "img/swimming.jpg",
        category: "swimming",
        title: "Lorem ipsum "
    }
    var obj3 = {
        img: "img/crossfit.jpg",
        category: "crossfit",
        title: "Lorem ipsum "
    }
    var obj4 = {
        img: "img/running2.jpg",
        category: "running",
        title: "Lorem ipsum ."
    }
    var obj5 = {
        img: "img/swimming2.jpg",
        category: "swimming",
        title: "Lorem ipsum "
    }
    var obj6 = {
        img: "img/crossfit2.jpg",
        category: "crossfit",
        title: "Lorem ipsum "
    }
    var obj7 = {
        img: "img/running3.jpg",
        category: "running",
        title: "Lorem ipsum "
    }
    var obj8 = {
        img: "img/swimming3.jpg",
        category: "swimming",
        title: "Lorem ipsum "
    }
    var obj9 = {
        img: "img/crossfit3.jpg",
        category: "crossfit",
        title: "Lorem ipsum "
    }
    // var obj10 = {
    //     img: "img/running.jpg",
    //     category: "mma",
    //     title: "Lorem ipsum "
    // }
    // var obj11 = {
    //     img: "img/running4.jpg",
    //     category: "running",
    //     title: "Lorem ipsum "
    // }
    // var obj12 = {
    //     img: "img/swimming4.jpg",
    //     category: "swimming",
    //     title: "Lorem ipsum"
    // }


    var allItems = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9];

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
    var newCategory = document.getElementById("newCategory");
    var modalWrap = document.querySelector(".modal__category");
    var btnClose = document.querySelector(".close__category");
    var btnAdd = document.querySelector(".btn__add-category");
    var form = document.querySelector(".form__new-category");
    if(modalWrap) {
        var modal = modalWrap.querySelector(".modal");
    }

    if (imgInput) {
        
        imgInput.addEventListener("change", function (e) {
            uploadImg(e.target);
        });
    }

    if(newCategory) {
        newCategory.addEventListener("click", function() {
            modalWrap.style.display = "block";
            modal.style.backgroundColor = "rgb(167, 164, 255)";
        });
        btnClose.addEventListener("click", function() {
            modalWrap.style.display = "none";
        });
        btnAdd.addEventListener("click", function() {
            var request = addCategory(form.querySelector("#newCategory").value);
            request.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 204) {
                    modalWrap.style.display = "none";
                    showMessage("Category successfully created");
                }
            };
        });
    };
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
        } else if(getCookie("email")) {
            var loginLinkText = document.querySelector(".user-nav__text");
            loginLinkText.innerHTML = getCookie("email");
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

    function addCategory(name) {
        name = {"Name" : name};
        var request = new XMLHttpRequest();
        request.open("POST", "http://localhost:50536/api/cms/categories");
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Authorization", token);
        request.send(JSON.stringify(name));
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

        // if (!this.file) {
        //     this.elements.file.classList.add("error");
        //     this.result = false;
        // } else {
        //     this.elements.file.classList.remove("error");
        // }

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
    window.addCategory =addCategory;
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
        console.log(result);
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
var state = undefined;

var list = document.getElementById("management__list");
var selectCategory = document.querySelectorAll(".select-category");
Array.prototype.slice.call(selectCategory).forEach(element => createSelectCategory(element));

var model = new Model(state || undefined);


var view = new View();
var controller = new Controller(model, view);

view.showAllArticles();



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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmpzIiwiY21zTG9naW4uanMiLCJjcmVhdGVBcnRpY2xlLmpzIiwiaGVscGVycy5qcyIsImxvZ2luLmpzIiwibWFuYWdlbWVudEFydGljbGVzLmpzIiwibWVudS5qcyIsInNldHRpbmdzLmpzIiwiX2hlbHBlcnNBcnRpY2xlcy5qcyIsImNtc0FydGljbGVzL2NvbnRyb2xsZXIuanMiLCJjbXNBcnRpY2xlcy9tb2RlbC5qcyIsImNtc0FydGljbGVzL3ZpZXcuanMiLCJjbXNBcnRpY2xlcy9faW5kZXguanMiLCJhcnRpY2xlUGFnZS9faW5kZXguanMiLCJtYWluUGFnZS9jYXRhbG9nSXRlbS5qcyIsIm1haW5QYWdlL2hlbHBlcnMuanMiLCJtYWluUGFnZS9yZXF1ZXN0cy5qcyIsIm1haW5QYWdlL19pbmRleC5qcyIsIm5hbWUvYXNpZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIG1vdmVDYXJvdXNlbCgpIHtcclxuICAgICAgICB2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhcm91c2VsX19pdGVtLXdyYXBcIik7XHJcbiAgICAgICAgdmFyIHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsX19wcmV2XCIpO1xyXG4gICAgICAgIHZhciBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbF9fbmV4dFwiKTtcclxuICAgICAgICB2YXIgaW5kZXg7XHJcbiAgICAgICAgaWYgKHByZXYpIHtcclxuICAgICAgICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSBmaW5kSW5kZXgoaXRlbXMsIFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoLTkwZGVnKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXggLSAxXS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4IC0gMV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKC05MGRlZylcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4IC0gMV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gZmluZEluZGV4KGl0ZW1zLCBcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gaXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zWzBdLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbMF0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDkwZGVnKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbMF0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXggKyAxXS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4ICsgMV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDkwZGVnKVwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXggKyAxXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZVkoMGRlZylcIjtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZmluZEluZGV4KGFyciwgY2xhc3NOYW1lLCBzdGFydFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhcnRQb3NpdGlvbiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRQb3NpdGlvbjsgaSA8IGFyci5sZW5ndGggLSBzdGFydFBvc2l0aW9uOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycltpXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSBhcnIubGVuZ3RoICsgc3RhcnRQb3NpdGlvbjsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJyW2ldLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycltpXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlSXRlbShvYmopIHtcclxuICAgICAgICB2YXIgbm9kZSA9ICc8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX2l0ZW0gY29sLWwtNCBjb2wtdC02IGNvbC1tLTEyXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIicrIG9iai5pbWcgKyAnXCIgYWx0PVwiXCIgY2xhc3M9XCJjYXJvdXNlbF9faW1nXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWxfX3dyYXBcIj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3M9XCJjYXJvdXNlbF9fY2F0ZWdvcnkgY2Fyb3VzZWxfX2NhdGVnb3J5LScgKyBvYmouY2F0ZWdvcnkgKyAnXCI+JyArIG9iai5jYXRlZ29yeVswXS50b1VwcGVyQ2FzZSgpICsgb2JqLmNhdGVnb3J5LnN1YnN0cmluZygxKSArICc8L2E+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiY2Fyb3VzZWxfX3RpdGxlXCI+JyArIG9iai50aXRsZSArICcgPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlV3JhcChpdGVtcywgYm9vbCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiY2Fyb3VzZWxfX2l0ZW0td3JhcCBjYXJvdXNlbF9faXRlbS1hY3RpdmVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IFwiY2Fyb3VzZWxfX2l0ZW0td3JhcFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgKz0gY3JlYXRlSXRlbShlbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlKGZhdGhlciwgc2l6ZSwgYXJySXRlbXMpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gOSAvIHNpemU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBmYXRoZXIuYXBwZW5kQ2hpbGQoY3JlYXRlV3JhcChhcnJJdGVtcy5zbGljZShpLCBpICsgc2l6ZSksIHRydWUpKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVXcmFwKGFyckl0ZW1zLnNsaWNlKGkgKiBzaXplLCAoaSAqc2l6ZSkrMykpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdmFyIG9iajEgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9ydW5uaW5nLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInJ1bm5pbmdcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBcIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajIgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9zd2ltbWluZy5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJzd2ltbWluZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIFwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqMyA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL2Nyb3NzZml0LmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImNyb3NzZml0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gXCJcclxuICAgIH1cclxuICAgIHZhciBvYmo0ID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvcnVubmluZzIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicnVubmluZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIC5cIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajUgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9zd2ltbWluZzIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwic3dpbW1pbmdcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBcIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajYgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9jcm9zc2ZpdDIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiY3Jvc3NmaXRcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBcIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajcgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9ydW5uaW5nMy5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJydW5uaW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gXCJcclxuICAgIH1cclxuICAgIHZhciBvYmo4ID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvc3dpbW1pbmczLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInN3aW1taW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gXCJcclxuICAgIH1cclxuICAgIHZhciBvYmo5ID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvY3Jvc3NmaXQzLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImNyb3NzZml0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gXCJcclxuICAgIH1cclxuICAgIC8vIHZhciBvYmoxMCA9IHtcclxuICAgIC8vICAgICBpbWc6IFwiaW1nL3J1bm5pbmcuanBnXCIsXHJcbiAgICAvLyAgICAgY2F0ZWdvcnk6IFwibW1hXCIsXHJcbiAgICAvLyAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gXCJcclxuICAgIC8vIH1cclxuICAgIC8vIHZhciBvYmoxMSA9IHtcclxuICAgIC8vICAgICBpbWc6IFwiaW1nL3J1bm5pbmc0LmpwZ1wiLFxyXG4gICAgLy8gICAgIGNhdGVnb3J5OiBcInJ1bm5pbmdcIixcclxuICAgIC8vICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBcIlxyXG4gICAgLy8gfVxyXG4gICAgLy8gdmFyIG9iajEyID0ge1xyXG4gICAgLy8gICAgIGltZzogXCJpbWcvc3dpbW1pbmc0LmpwZ1wiLFxyXG4gICAgLy8gICAgIGNhdGVnb3J5OiBcInN3aW1taW5nXCIsXHJcbiAgICAvLyAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW1cIlxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICB2YXIgYWxsSXRlbXMgPSBbb2JqMSwgb2JqMiwgb2JqMywgb2JqNCwgb2JqNSwgb2JqNiwgb2JqNywgb2JqOCwgb2JqOV07XHJcblxyXG4gICAgdmFyIGZhdGhlciA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcm91c2VsX19pbm5lclwiKTtcclxuICAgIGlmIChmYXRoZXIpIHtcclxuICAgICAgICB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaW5uZXJXaWR0aCA8IDQyNikge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGUoZmF0aGVyLCAxLCBhbGxJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ2Fyb3VzZWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbm5lcldpZHRoIDwgNzY5KSB7XHJcbiAgICAgICAgICAgICAgICBmYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZShmYXRoZXIsIDIsIGFsbEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG1vdmVDYXJvdXNlbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGUoZmF0aGVyLCAzLCBhbGxJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ2Fyb3VzZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoaW5uZXJXaWR0aCA8IDQyNikge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGUoZmF0aGVyLCAxLCBhbGxJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ2Fyb3VzZWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpbm5lcldpZHRoIDwgNzY5KSB7XHJcbiAgICAgICAgICAgICAgICBmYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZShmYXRoZXIsIDIsIGFsbEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG1vdmVDYXJvdXNlbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGUoZmF0aGVyLCAzLCBhbGxJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBtb3ZlQ2Fyb3VzZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbXNMb2dpbkZvcm1cIik7XHJcbiAgICB2YXIgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZVwiKTtcclxuICAgIHZhciBsb2dpblVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUzNi9hcGkvcHVibGljL2Ntcy1sb2dpblwiO1xyXG5cclxuICAgIGlmIChsb2dpbkZvcm0pIHtcclxuXHJcbiAgICAgICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgZW1haWwgPSBlLnRhcmdldC5lbWFpbDtcclxuICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gZS50YXJnZXQucGFzc3dvcmQ7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZChcImVtYWlsXCIsIGVtYWlsLnZhbHVlKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwYXNzd29yZFwiLCBwYXNzd29yZC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhRm9ybVRvT2JqKGRhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gc2VuZFJlcXVlc3QoXCJQT1NUXCIsIGxvZ2luVXJsLCBkYXRhKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KVtcIkFjY2Vzc1Rva2VuXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJhZG1pblwiLCB0cnVlLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDb29raWUoXCJuYW1lXCIsIFwiQWRtaW5cIiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCJpbmRleC5odG1sXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PSA0MDAgJiYgdGhpcy5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkluY29ycmVjdCBsb2dpbiBvciBwYXNzd29yZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc2V0Q29va2llKGNuYW1lLCBjdmFsdWUsIGV4ZGF5cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKGV4ZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgICAgICAgICAgICAgIHZhciBleHBpcmVzID0gXCJleHBpcmVzPVwiICsgZC50b1VUQ1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY25hbWUgKyBcIj1cIiArIGN2YWx1ZSArIFwiO1wiICsgZXhwaXJlcyArIFwiO3BhdGg9L1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG4iLCJcclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpbWdJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWlucHV0XCIpO1xyXG4gICAgdmFyIG5ld0NhdGVnb3J5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdDYXRlZ29yeVwiKTtcclxuICAgIHZhciBtb2RhbFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jYXRlZ29yeVwiKTtcclxuICAgIHZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VfX2NhdGVnb3J5XCIpO1xyXG4gICAgdmFyIGJ0bkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuX19hZGQtY2F0ZWdvcnlcIik7XHJcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fbmV3LWNhdGVnb3J5XCIpO1xyXG4gICAgaWYobW9kYWxXcmFwKSB7XHJcbiAgICAgICAgdmFyIG1vZGFsID0gbW9kYWxXcmFwLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGltZ0lucHV0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1nSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB1cGxvYWRJbWcoZS50YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKG5ld0NhdGVnb3J5KSB7XHJcbiAgICAgICAgbmV3Q2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBtb2RhbFdyYXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgbW9kYWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTY3LCAxNjQsIDI1NSlcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG1vZGFsV3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYnRuQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBhZGRDYXRlZ29yeShmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjbmV3Q2F0ZWdvcnlcIikudmFsdWUpO1xyXG4gICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxXcmFwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShcIkNhdGVnb3J5IHN1Y2Nlc3NmdWxseSBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIHVwbG9hZEltZyhmaWxlKSB7XHJcbiAgICAgICAgdmFyIGltZyA9IGZpbGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIGZpbGUgPWZpbGUuZmlsZXNbMF07XHJcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChmdW5jdGlvbiAoZmlsZSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW1nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGltZy5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SW1nID0gX2NyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge3NyYzogZS50YXJnZXQucmVzdWx0LCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgaWQ6IFwiaW1nXCIsIGNsYXNzOiBcImZvcm1fX2ltZ1wifSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5ld0ltZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkoZmlsZSk7XHJcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICB3aW5kb3cudXBsb2FkSW1nID0gdXBsb2FkSW1nO1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZywgcHJvcHMsIHN0eWxlcywgY2hpbGQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHN0eWxlcykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goa2V5ID0+IGVsZW1lbnQuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY2hpbGQ7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlbWVudDtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuXHJcbiAgICAgICAgcmVzdWx0ICs9IG5ld0RhdGUuZ2V0RGF0ZSgpICsgXCItMFwiICsgKG5ld0RhdGUuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlKG1lc3NhZ2UpIHtcclxuICAgICAgICB2YXIgY3JlYXRlQXJ0aWNsZU1lc3NhZ2UgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwibWVzc2FnZVwiIH0sIFwiXCIsIG1lc3NhZ2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQXJ0aWNsZU1lc3NhZ2UpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjcmVhdGVBcnRpY2xlTWVzc2FnZS5zdHlsZS50b3AgPSBcIi1cIiArIGdldENvbXB1dGVkU3R5bGUoY3JlYXRlQXJ0aWNsZU1lc3NhZ2UpLmhlaWdodDtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93Ll9jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudDtcclxuICAgIHdpbmRvdy5mb3JtYXREYXRlID0gZm9ybWF0RGF0ZTtcclxuICAgIHdpbmRvdy5zaG93TWVzc2FnZSA9IHNob3dNZXNzYWdlO1xyXG59KSgpOyIsIlxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRhYkxvZ2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJMb2dpbkJ0blwiKTtcclxuICAgIHZhciB0YWJTaWdudXBCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYlNpZ251cEJ0blwiKTtcclxuICAgIHZhciB0YWJMb2dpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYkxvZ2luQ29udGVudFwiKTtcclxuICAgIHZhciB0YWJTaWdudXBDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJTaWdudXBDb250ZW50XCIpO1xyXG4gICAgdmFyIG1vZGFsTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19sb2dpblwiKTtcclxuICAgIHZhciBtb2RhbFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLXdyYXBcIik7XHJcbiAgICB2YXIgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZVwiKTtcclxuICAgIHZhciBsb2dpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5cIik7XHJcblxyXG4gICAgaWYgKGxvZ2luQnRuKSB7XHJcbiAgICAgICAgbG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbW9kYWxXcmFwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbW9kYWxXcmFwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRhYkxvZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhYl9fYnRuLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGFiTG9naW5Db250ZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ0YWItYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFiU2lnbnVwQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwidGFiLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRhYlNpZ251cEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwidGFiX19idG4tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFiTG9naW5CdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRhYl9fYnRuLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGFiU2lnbnVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInRhYl9fYnRuLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdGFiTG9naW5Db250ZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ0YWItYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFiU2lnbnVwQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwidGFiLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHRhYlNpZ251cEJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwidGFiX19idG4tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGFiTG9naW5CdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRhYl9fYnRuLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHRhYklucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiX19pbnB1dFwiKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGFiSW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRhYklucHV0c1tpXS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghZS50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vU1VCTUlUXHJcblxyXG5cclxuICAgICAgICB2YXIgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbkZvcm1cIik7XHJcbiAgICAgICAgdmFyIHNpZ251cEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ251cEZvcm1cIik7XHJcbiAgICAgICAgdmFyIGNyZWF0ZUFydGljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1hcnRpY2xlXCIpO1xyXG4gICAgICAgIHZhciBsb2dpblVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUzNi9hcGkvcHVibGljL2xvZ2luXCI7XHJcbiAgICAgICAgdmFyIHNpZ251cFVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDUzNi9hcGkvcHVibGljL3JlZ2lzdGVyXCI7XHJcblxyXG5cclxuICAgICAgICB2YXIgc2lnbnVwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHJcbiAgICAgICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgZW1haWwgPSBlLnRhcmdldC5lbWFpbDtcclxuICAgICAgICAgICAgdmFyIHBhc3N3b3JkID0gZS50YXJnZXQucGFzc3dvcmQ7XHJcblxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZChcImVtYWlsXCIsIGVtYWlsLnZhbHVlKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJwYXNzd29yZFwiLCBwYXNzd29yZC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhRm9ybVRvT2JqKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZhbGlkTG9naW4gPSBuZXcgVmFsaWRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWRMb2dpbi5jaGVjaygpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBsb2dpblVybCwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjAwICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dClbXCJBY2Nlc3NUb2tlblwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsV3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldENvb2tpZShcImVtYWlsXCIsIGVtYWlsLnZhbHVlLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNpZ251cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmlyc3ROYW1lID0gZS50YXJnZXQuZmlyc3ROYW1lO1xyXG4gICAgICAgICAgICB2YXIgbGFzdE5hbWUgPSBlLnRhcmdldC5sYXN0TmFtZTtcclxuICAgICAgICAgICAgdmFyIGVtYWlsID0gZS50YXJnZXQuZW1haWw7XHJcbiAgICAgICAgICAgIHZhciBwYXNzd29yZCA9IGUudGFyZ2V0LnBhc3N3b3JkO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJmaXJzdE5hbWVcIiwgZmlyc3ROYW1lLnZhbHVlKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJsYXN0TmFtZVwiLCBsYXN0TmFtZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiZW1haWxcIiwgZW1haWwudmFsdWUpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZChcInBhc3N3b3JkXCIsIHBhc3N3b3JkLnZhbHVlKTtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGFGb3JtVG9PYmooZGF0YSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmFsaWRTaWdudXAgPSBuZXcgVmFsaWRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IGZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxyXG4gICAgICAgICAgICB9LCBcInNpZ251cFwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWxpZFNpZ251cC5jaGVjaygpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBzaWdudXBVcmwsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDIwNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2lnbnVwTWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzczogXCJzaWdudXAtbWVzc2FnZVwiIH0sIFwiXCIsIFwiWW91IGhhdmUgc3VjY2Vzc2Z1bGx5IHJlZ2lzdGVyZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lnbnVwTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsV3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2lnbnVwTWVzc2FnZS5zdHlsZS50b3AgPSBcIi1cIiArIGdldENvbXB1dGVkU3R5bGUoc2lnbnVwTWVzc2FnZSkuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGlmIChnZXRDb29raWUoXCJhZG1pblwiKSkge1xyXG4gICAgICAgICAgICB2YXIgbG9naW5MaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKTtcclxuICAgICAgICAgICAgdmFyIGxvZ2luTGlua1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVzZXItbmF2X190ZXh0XCIpO1xyXG4gICAgICAgICAgICB2YXIgY3JlYXRlQXJ0aWNsZSA9IF9jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiY3JlYXRlQXJ0aWNsZS5odG1sXCIsIGNsYXNzOiBcInVzZXItbmF2X19saW5rXCIgfSwgXCJcIiwgJzxzcGFuIGNsYXNzPVwidXNlci1uYXZfX2ljb24gaWNvbi1hZGRcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJ1c2VyLW5hdl9fdGV4dFwiPkFydGljbGU8L3NwYW4+Jyk7XHJcbiAgICAgICAgICAgIGxvZ2luTGluay5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUFydGljbGUpO1xyXG4gICAgICAgICAgICBsb2dpbkxpbmtUZXh0LmlubmVySFRNTCA9IGdldENvb2tpZShcIm5hbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKGdldENvb2tpZShcImVtYWlsXCIpKSB7XHJcbiAgICAgICAgICAgIHZhciBsb2dpbkxpbmtUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51c2VyLW5hdl9fdGV4dFwiKTtcclxuICAgICAgICAgICAgbG9naW5MaW5rVGV4dC5pbm5lckhUTUwgPSBnZXRDb29raWUoXCJlbWFpbFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldENvb2tpZShjbmFtZSwgY3ZhbHVlLCBleGRheXMpIHtcclxuICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xyXG4gICAgICAgICAgICB2YXIgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIiArIGQudG9VVENTdHJpbmcoKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY25hbWUgKyBcIj1cIiArIGN2YWx1ZSArIFwiO1wiICsgZXhwaXJlcyArIFwiO3BhdGg9L1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gY25hbWUgKyBcIj1cIjtcclxuICAgICAgICAgICAgdmFyIGRlY29kZWRDb29raWUgPSBkZWNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQuY29va2llKTtcclxuICAgICAgICAgICAgdmFyIGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGNhW2ldO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhuYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBWYWxpZGF0aW9uKG9iaiwgdHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbWFpbFJlZyA9IC9eWy1cXHcuXStAKFtBLXowLTldWy1BLXowLTldK1xcLikrW0Etel17Miw0fSQvO1xyXG4gICAgICAgICAgICB0aGlzLl9wYXNzd29yZFJlZyA9IC9eKD89LipcXGQpKD89LipbYS16XSkoPz0uKltBLVpdKSg/PSguKlthLXpBLVpdKXs0fSkuezgsMjB9JC87XHJcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSAvXltBLVpdezF9W2Etel17MSwxMH0kLztcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cyA9IG9iajtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVtYWlsID0gb2JqLmVtYWlsLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkID0gb2JqLnBhc3N3b3JkLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAob2JqLmZpcnN0TmFtZSAmJiBvYmoubGFzdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3ROYW1lID0gb2JqLmZpcnN0TmFtZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdE5hbWUgPSBvYmoubGFzdE5hbWUudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFZhbGlkYXRpb24ucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2VtYWlsUmVnLnRlc3QodGhpcy5lbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZW1haWwuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZW1haWwuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3Bhc3N3b3JkUmVnLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMucGFzc3dvcmQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMucGFzc3dvcmQuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09IFwic2lnbnVwXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fbmFtZS50ZXN0KHRoaXMuZmlyc3ROYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZmlyc3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmZpcnN0TmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lLnRlc3QodGhpcy5sYXN0TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmxhc3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmxhc3ROYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pKCk7IiwidmFyIHNob3dBcnRpY2xlcyA9IChmdW5jdGlvbigpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgfTtcclxufSkoKTtcclxuXHJcblxyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbmF2XCIpO1xyXG4gICAgdmFyIGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xyXG5cclxuICAgIGlmIChtZW51KSB7XHJcbiAgICAgICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJtYWluLW5hdl9hY3RpdmVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJtYWluLW5hdl9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRhYnNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX19saXN0XCIpO1xyXG4gICAgdmFyIGNyZWF0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1hcnRpY2xlIGZvcm1cIik7XHJcbiAgICB2YXIgbWFuYWdlbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hbmFnZW1lbnRfX2xpc3RcIik7XHJcbiAgICB2YXIgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtYXJ0aWNsZSBmb3JtXCIpO1xyXG5cclxuICAgIGlmICh0YWJzTGlzdCkge1xyXG4gICAgICAgIHRhYnNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWNyZWF0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX19pdGVtX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidGFic19faXRlbV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdzX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2V0dGluZ3NfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwidGFic19faXRlbV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVGb3JtLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc19hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLW1hbmFnZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19faXRlbV9hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcInRhYnNfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5nc19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcInNldHRpbmdzX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInRhYnNfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgbWFuYWdlbWVudExpc3QuY2xhc3NMaXN0LmFkZChcInNldHRpbmdzX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHNob3dBcnRpY2xlcygpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ0bi1lZGl0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX2l0ZW1fYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ3NfYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZXR0aW5nc19hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc19hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG5cclxufSkoKTsiLCJ2YXIgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGFkZFJlcXVlc3QoZGF0YU9iaikge1xyXG4gICAgICAgIGRhdGFPYmouY2F0ZWdvcmllc0lkcyA9IFtkYXRhT2JqLmNhdGVnb3JpZXNJZHNdO1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiUE9TVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MzYvYXBpL2Ntcy9wb3N0c1wiKTtcclxuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgdG9rZW4pO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShkYXRhT2JqKSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRJbWFnZShmaWxlKSB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJQT1NUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo1MDUzNi9hcGkvY21zL2ltYWdlcy91cGxvYWRcIik7XHJcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiaW1hZ2UvanBlZ1wiKTtcclxuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIHRva2VuKTtcclxuICAgICAgICByZXF1ZXN0LnNlbmQoZmlsZSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ2F0ZWdvcnkobmFtZSkge1xyXG4gICAgICAgIG5hbWUgPSB7XCJOYW1lXCIgOiBuYW1lfTtcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub3BlbihcIlBPU1RcIiwgXCJodHRwOi8vbG9jYWxob3N0OjUwNTM2L2FwaS9jbXMvY2F0ZWdvcmllc1wiKTtcclxuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgdG9rZW4pO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShuYW1lKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZWRpdFJlcXVlc3QoZGF0YU9iaikge1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKFwiUFVUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo1MDUzNi9hcGkvY21zL3Bvc3RzXCIpO1xyXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCB0b2tlbik7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFPYmopKTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVJlcXVlc3QoaWQpIHtcclxuICAgICAgICB2YXIgb2JqID0geyBcIklkXCI6IGlkIH07XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJERUxFVEVcIiwgXCJodHRwOi8vbG9jYWxob3N0OjUwNTM2L2FwaS9jbXMvcG9zdHNcIik7XHJcbiAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIHRva2VuKTtcclxuICAgICAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkob2JqKSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBcnRpY2xlKGlkKSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudCA9IEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjUwNTM2L2FwaS9wdWJsaWMvcG9zdHMvXCIgKyBpZCwgZmFsc2UpO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZW5kUmVxdWVzdChtZXRob2QsIHVybCwgZGF0YU9iaikge1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5vcGVuKG1ldGhvZCwgdXJsKTtcclxuICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZChKU09OLnN0cmluZ2lmeShkYXRhT2JqKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGRhdGFGb3JtVG9PYmooZGF0YUZvcm0pIHtcclxuICAgICAgICB2YXIgb2JqID0ge307XHJcbiAgICAgICAgZGF0YUZvcm0uZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENhdGVnb3J5SWQobmFtZSkge1xyXG5cclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHZhciBpZDtcclxuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNbXCJDYXRlZ29yaWVzXCJdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5OYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudC5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gZWxlbWVudC5JZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjUwNTM2L2FwaS9wdWJsaWMvY2F0ZWdvcmllc1wiLCBmYWxzZSk7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2F0ZWdvcnlOYW1lKGlkKSB7XHJcbiAgICAgICAgdmFyIG5hbWU7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PSA0ICYmIHRoaXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKHRoaXMucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXNbXCJDYXRlZ29yaWVzXCJdLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5JZCA9PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gZWxlbWVudC5OYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MzYvYXBpL3B1YmxpYy9jYXRlZ29yaWVzXCIsIGZhbHNlKTtcclxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QWxsQ2F0ZWdvcmllcygpIHtcclxuICAgICAgICB2YXIgY2F0ZWdvcmllcztcclxuICAgICAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09IDQgJiYgdGhpcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dClbXCJDYXRlZ29yaWVzXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MzYvYXBpL3B1YmxpYy9jYXRlZ29yaWVzXCIsIGZhbHNlKTtcclxuICAgICAgICByZXF1ZXN0LnNlbmQoKTtcclxuICAgICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTZWxlY3RDYXRlZ29yeShlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSBnZXRBbGxDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3JpZXMpIHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3B0aW9uID0gX2NyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyB2YWx1ZTogaXRlbS5JZCB9LCBcIlwiLCBpdGVtLk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBWYWxpZGF0aW9uQXJ0aWNsZShvYmopIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gb2JqO1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBvYmoudGl0bGUudmFsdWU7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IG9iai5jYXRlZ29yeS52YWx1ZTtcclxuICAgICAgICBpZiAob2JqLmZpbGUgJiYgb2JqLmZpbGUuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgdGhpcy5maWxlID0gb2JqLmZpbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGV4dCA9IG9iai50ZXh0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgVmFsaWRhdGlvbkFydGljbGUucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhpcy50aXRsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jYXRlZ29yeSkge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmNhdGVnb3J5LmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmICghdGhpcy5maWxlKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZWxlbWVudHMuZmlsZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5lbGVtZW50cy5maWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy50ZXh0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMudGV4dC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy50ZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKHR5cGUsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudHNbdHlwZV0gPSB0aGlzLmV2ZW50c1t0eXBlXSB8fCBbXTtcclxuICAgICAgICB0aGlzLmV2ZW50c1t0eXBlXS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAodHlwZSwgYXJnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW3R5cGVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW3R5cGVdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soYXJnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICB3aW5kb3cuYWRkUmVxdWVzdCA9IGFkZFJlcXVlc3Q7XHJcbiAgICB3aW5kb3cuYWRkSW1hZ2UgPSBhZGRJbWFnZTtcclxuICAgIHdpbmRvdy5hZGRDYXRlZ29yeSA9YWRkQ2F0ZWdvcnk7XHJcbiAgICB3aW5kb3cuZWRpdFJlcXVlc3QgPSBlZGl0UmVxdWVzdDtcclxuICAgIHdpbmRvdy5yZW1vdmVSZXF1ZXN0ID0gcmVtb3ZlUmVxdWVzdDtcclxuICAgIHdpbmRvdy5nZXRBcnRpY2xlID0gZ2V0QXJ0aWNsZTtcclxuICAgIHdpbmRvdy5zZW5kUmVxdWVzdCA9IHNlbmRSZXF1ZXN0O1xyXG4gICAgd2luZG93LmRhdGFGb3JtVG9PYmogPSBkYXRhRm9ybVRvT2JqO1xyXG4gICAgd2luZG93LmdldENhdGVnb3J5SWQgPSBnZXRDYXRlZ29yeUlkO1xyXG4gICAgd2luZG93LmdldENhdGVnb3J5TmFtZSA9IGdldENhdGVnb3J5TmFtZTtcclxuICAgIHdpbmRvdy5nZXRBbGxDYXRlZ29yaWVzID0gZ2V0QWxsQ2F0ZWdvcmllcztcclxuICAgIHdpbmRvdy5jcmVhdGVTZWxlY3RDYXRlZ29yeSA9IGNyZWF0ZVNlbGVjdENhdGVnb3J5O1xyXG4gICAgd2luZG93LlZhbGlkYXRpb25BcnRpY2xlID0gVmFsaWRhdGlvbkFydGljbGU7XHJcbn0pKCk7XHJcblxyXG4iLCJmdW5jdGlvbiBDb250cm9sbGVyKG1vZGVsLCB2aWV3KSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xyXG5cclxuICAgIHZpZXcub24oXCJhZGRcIiwgdGhpcy5hZGRBcnRpY2xlLmJpbmQodGhpcykpO1xyXG4gICAgdmlldy5vbihcInJlbW92ZVwiLCB0aGlzLnJlbW92ZUFydGljbGUuYmluZCh0aGlzKSk7XHJcbiAgICB2aWV3Lm9uKFwiZWRpdFwiLCB0aGlzLmVkaXRBcnRpY2xlLmJpbmQodGhpcykpO1xyXG5cclxuICAgIG1vZGVsLm9uKFwiY2hhbmdlXCIsIHRoaXMuY2hhbmdlVmlldy5iaW5kKHRoaXMpKTtcclxufTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuICAgIFxyXG5cclxuICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmFkZEFydGljbGUgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMubW9kZWwuYWRkSXRlbShkYXRhLmZpbGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy52aWV3LmFkZEl0ZW0oZGF0YSwgcmVzdWx0KTtcclxuICAgIH07XHJcblxyXG4gICAgQ29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlQXJ0aWNsZSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMubW9kZWwucmVtb3ZlSXRlbShpZCk7XHJcbiAgICAgICAgdGhpcy52aWV3LnJlbW92ZUl0ZW0oaWQsIHJlc3VsdCk7XHJcbiAgICB9O1xyXG5cclxuICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmVkaXRBcnRpY2xlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLm1vZGVsLnVwZGF0ZUl0ZW0oZGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMudmlldy5lZGl0SXRlbShkYXRhLCByZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIENvbnRyb2xsZXIucHJvdG90eXBlLmNoYW5nZVZpZXcgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICAgIHRoaXMudmlldy5yZW1vdmVJdGVtKGlkKTtcclxuICAgIH1cclxuICAgIFxyXG59KSgpOyIsImZ1bmN0aW9uIE1vZGVsKCkge1xyXG4gICAgdGhpcy5pdGVtO1xyXG4gICAgRXZlbnRFbWl0dGVyLmFwcGx5KHRoaXMpO1xyXG59XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgTW9kZWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudEVtaXR0ZXIucHJvdG90eXBlKTtcclxuICAgIE1vZGVsLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBNb2RlbC5wcm90b3R5cGUuZ2V0QWxsQXJ0aWNsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9O1xyXG5cclxuICAgIE1vZGVsLnByb3RvdHlwZS5hZGRJdGVtID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gYWRkSW1hZ2UoaXRlbSk7XHJcbiAgICB9O1xyXG5cclxuICAgIE1vZGVsLnByb3RvdHlwZS51cGRhdGVJdGVtID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICByZXR1cm4gZWRpdFJlcXVlc3QoZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIE1vZGVsLnByb3RvdHlwZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZVJlcXVlc3QoaWQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBNb2RlbC5wcm90b3R5cGUuYWRkSW1hZ2UgPSBmdW5jdGlvbihmaWxlKSB7XHJcblxyXG4gICAgfVxyXG59KSgpOyAiLCJmdW5jdGlvbiBWaWV3KCkge1xyXG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYW5hZ2VtZW50X19saXN0XCIpO1xyXG4gICAgdGhpcy5mb3JtQWRkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtYXJ0aWNsZV9fZm9ybVwiKTtcclxuICAgIHRoaXMuZm9ybUVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYXJ0aWNsZV9fZm9ybVwiKTtcclxuICAgIHRoaXMuYnRuUmVtb3ZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZW1vdmUtYnRuXCIpO1xyXG5cclxuICAgIGlmICh0aGlzLmJ0blJlbW92ZSkge1xyXG4gICAgICAgIHRoaXMuYnRuUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZVJlbW92ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5mb3JtQWRkKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQWRkLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgdGhpcy5oYW5kbGVBZGQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgRXZlbnRFbWl0dGVyLmFwcGx5KHRoaXMpO1xyXG59O1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcblxyXG5cclxuICAgIFZpZXcucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudEVtaXR0ZXIucHJvdG90eXBlKTtcclxuICAgIFZpZXcucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIFZpZXcucHJvdG90eXBlLnNob3dBbGxBcnRpY2xlcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJ0aWNsZXM7XHJcblxyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlYWR5U3RhdGUgPT0gNCAmJiB0aGlzLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGFydGljbGVzID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dClbXCJQb3N0c1wiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjUwNTM2L2FwaS9wdWJsaWMvcG9zdHNcIiwgZmFsc2UpO1xyXG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3QpIHtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLmxpc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgYXJ0aWNsZXMucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoYXJ0aWNsZXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5hZGRJdGVtID0gZnVuY3Rpb24gKGRhdGEsIHJlcXVlc3QpIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGZvcm0gPSB0aGlzLmZvcm1BZGQ7XHJcbiAgICAgICAgdmFyIGZpbGUgPSBmb3JtLmZpbGU7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gZm9ybS50aXRsZTtcclxuICAgICAgICB2YXIgdGV4dCA9IGZvcm0udGV4dDtcclxuICAgICAgICB2YXIgY2F0ZWdvcnkgPSBmb3JtLmNhdGVnb3J5O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBkaXNwbGF5QWxsQXJ0aWNsZXMoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnRJbWcgPSBmaWxlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIHBhcmVudEltZy5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2ltZ1wiKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdmFyIG5ld0ltZyA9IF9jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcImltZy9pbWdfZGVmYXVsdC5qcGdcIiwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIGlkOiBcImltZ1wiLCBjbGFzczogXCJmb3JtX19pbWcgaW1nX2RlZmF1bHRcIiB9KTtcclxuICAgICAgICAgICAgcGFyZW50SW1nLmFwcGVuZENoaWxkKG5ld0ltZyk7XHJcblxyXG4gICAgICAgICAgICB0aXRsZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRleHQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBjYXRlZ29yeS5vcHRpb25zWzBdLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIFwiXCIpO1xyXG5cclxuICAgICAgICAgICAgY29udGV4dC5zaG93QWxsQXJ0aWNsZXMoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xyXG4gICAgICAgIGlmIChyZXF1ZXN0KSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMTIzXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCAmJiB0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWFnZUlkID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dClbXCJJbWFnZUlkXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuaW1hZ2VJZCA9IGltYWdlSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkUmVxdWVzdChkYXRhKS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDAgJiYgdGhpcy5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKFwiQXJ0aWNsZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5QWxsQXJ0aWNsZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PSA0MDAgJiYgdGhpcy5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IHNob3VsZCBzaWduIGluIGFzIGFkbWluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzcG9uc2VUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dCkgPT0gXCJibG9nLTAwMDVcIiAmJiB0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IHNob3VsZCBzaWduIGluIGFzIGFkbWluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gNDAwICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3Ugc2hvdWxkIHNpZ24gaW4gYXMgYWRtaW5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzcG9uc2VUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpID09IFwiYmxvZy0wMDA1XCIgJiYgdGhpcy5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZb3Ugc2hvdWxkIHNpZ24gaW4gYXMgYWRtaW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFZpZXcucHJvdG90eXBlLmZpbmRMaXN0SXRlbSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxpc3QucXVlcnlTZWxlY3RvcignW2RhdGEtaWQ9XCInICsgaWQgKyAnXCInKTtcclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5lZGl0SXRlbSA9IGZ1bmN0aW9uIChkYXRhLCByZXF1ZXN0KSB7XHJcblxyXG4gICAgICAgIHZhciBsaXN0SXRlbSA9IHRoaXMuZmluZExpc3RJdGVtKGRhdGEuaWQpO1xyXG4gICAgICAgIHZhciB0aXRsZSA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoXCIubWFuYWdlbWVudF9fdGl0bGVcIik7XHJcbiAgICAgICAgdmFyIHZpZXdzID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zZWNvbmRhcnlfX3ZpZXdzXCIpO1xyXG4gICAgICAgIHZhciBkYXRlID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihcIi5zZWNvbmRhcnlfX2RhdGVcIik7XHJcblxyXG5cclxuXHJcbiAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXR1cyA9PSAyMDQgJiYgdGhpcy5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZ2V0QXJ0aWNsZShkYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKFwiQXJ0aWNsZSBzdWNjZXNzZnVsbHkgdXBkYXRlIVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gaXRlbS5UaXRsZTtcclxuICAgICAgICAgICAgICAgIHZpZXdzLmlubmVySFRNTCA9IGl0ZW0uVmlld3NDb3VudDtcclxuICAgICAgICAgICAgICAgIGRhdGUuaW5uZXJIVE1MID0gZm9ybWF0RGF0ZShpdGVtLkNyZWF0aW9uRGF0ZSk7XHJcbiAgICAgICAgICAgICAgICBkYXRlLnNldEF0dHJpYnV0ZShcImRhdGV0aW1lXCIsIGRhdGUuQ3JlYXRpb25EYXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXR1cyA9PSA0MDAgJiYgdGhpcy5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IHNob3VsZCBzaWduIGluIGFzIGFkbWluXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucmVzcG9uc2VUZXh0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpID09IFwiYmxvZy0wMDA1XCIgJiYgdGhpcy5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSBzaG91bGQgc2lnbiBpbiBhcyBhZG1pblwiKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFZpZXcucHJvdG90eXBlLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoaWQsIHJlcXVlc3QpIHtcclxuICAgICAgICB2YXIgbGlzdEl0ZW0gPSB0aGlzLmZpbmRMaXN0SXRlbShpZCk7XHJcbiAgICAgICAgdmFyIGxpc3QgPSB0aGlzLmxpc3Q7XHJcblxyXG4gICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT0gMjA0ICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZShcIkFydGljbGUgc3VjY2Vzc2Z1bGx5IHJlbW92ZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5yZW1vdmVDaGlsZChsaXN0SXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0dXMgPT0gNDAwICYmIHRoaXMucmVhZHlTdGF0ZSA9PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIllvdSBzaG91bGQgc2lnbiBpbiBhcyBhZG1pblwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc3BvbnNlVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEpTT04ucGFyc2UodGhpcy5yZXNwb25zZVRleHQpID09IFwiYmxvZy0wMDA1XCIgJiYgdGhpcy5yZWFkeVN0YXRlID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSBzaG91bGQgc2lnbiBpbiBhcyBhZG1pblwiKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIFZpZXcucHJvdG90eXBlLmNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoYXJ0aWNsZSkge1xyXG4gICAgICAgIHZhciBlZGl0QnRuID0gX2NyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3M6IFwiYnRuIGJ0bl9fZWRpdFwiIH0sIFwiXCIsIFwiRWRpdFwiKTtcclxuICAgICAgICB2YXIgcmVtb3ZlQnRuID0gX2NyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgY2xhc3M6IFwiYnRuIGJ0bl9fcmVtb3ZlXCIgfSwgXCJcIiwgXCJSZW1vdmVcIik7XHJcbiAgICAgICAgdmFyIGJ0bldyYXAgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcImJ0bl9fd3JhcFwiIH0sIFwiXCIsIFtlZGl0QnRuLCByZW1vdmVCdG5dKTtcclxuXHJcbiAgICAgICAgdmFyIHZpZXdzID0gX2NyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3M6IFwic2Vjb25kYXJ5X192aWV3c1wiIH0sIFwiXCIsIGFydGljbGUuVmlld3NDb3VudCArIFwiXCIpO1xyXG4gICAgICAgIHZhciB0aW1lID0gX2NyZWF0ZUVsZW1lbnQoXCJ0aW1lXCIsIHsgY2xhc3M6IFwic2Vjb25kYXJ5X19kYXRlXCIsIHB1YmRhdGU6IFwiXCIsIGRhdGV0aW1lOiBmb3JtYXREYXRlKGFydGljbGUuQ3JlYXRpb25EYXRlKSB9LCBcIlwiLCBmb3JtYXREYXRlKGFydGljbGUuQ3JlYXRpb25EYXRlKSk7XHJcbiAgICAgICAgdmFyIHNlY29uZGFyeSA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3M6IFwic2Vjb25kYXJ5IG1hbmFnZW1lbnRfX3NlY29uZGFyeVwiIH0sIFwiXCIsIFt2aWV3cywgdGltZV0pO1xyXG5cclxuICAgICAgICB2YXIgdGl0bGUgPSBfY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3M6IFwibWFuYWdlbWVudF9fdGl0bGVcIiB9LCBcIlwiLCBhcnRpY2xlLlRpdGxlKTtcclxuXHJcbiAgICAgICAgdmFyIGl0ZW0gPSBfY3JlYXRlRWxlbWVudChcImxpXCIsIHsgY2xhc3M6IFwibWFuYWdlbWVudF9faXRlbSBcIiB9LCBcIlwiLCBbdGl0bGUsIHNlY29uZGFyeSwgYnRuV3JhcF0pO1xyXG5cclxuICAgICAgICB2YXIgaXRlbVdyYXAgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzOiBcIm1hbmFnZW1lbnRfX2l0ZW0td3JhcCBjb2wtbC0zIGNvbC10LTYgY29sLW0tMTJcIiwgXCJkYXRhLWlkXCI6IGFydGljbGUuSWQgfSwgXCJcIiwgW2l0ZW1dKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoaXRlbVdyYXApO1xyXG4gICAgfVxyXG5cclxuICAgIFZpZXcucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICB2YXIgZWRpdEJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5idG5fX2VkaXRcIik7XHJcbiAgICAgICAgdmFyIHJlbW92ZUJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5idG5fX3JlbW92ZVwiKTtcclxuXHJcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVFZGl0LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVSZW1vdmUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIFZpZXcucHJvdG90eXBlLmhhbmRsZUFkZCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciB0aXRsZSA9IGV2ZW50LnRhcmdldC50aXRsZTtcclxuICAgICAgICB2YXIgY2F0ZWdvcnkgPSBldmVudC50YXJnZXQuY2F0ZWdvcnk7XHJcbiAgICAgICAgdmFyIGZpbGUgPSBldmVudC50YXJnZXQuZmlsZTtcclxuICAgICAgICB2YXIgdGV4dCA9IGV2ZW50LnRhcmdldC50ZXh0O1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwidGl0bGVcIiwgdGl0bGUudmFsdWUpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiY2F0ZWdvcmllc0lkc1wiLCBjYXRlZ29yeS52YWx1ZSk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGZpbGUuZmlsZXNbMF0pO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiZGVzY3JpcHRpb25cIiwgdGV4dC52YWx1ZSk7XHJcblxyXG5cclxuICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IG5ldyBWYWxpZGF0aW9uQXJ0aWNsZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5LFxyXG4gICAgICAgICAgICBmaWxlOiBmaWxlLFxyXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmVtaXQoXCJhZGRcIiwgZGF0YUZvcm1Ub09iaihkYXRhKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFZpZXcucHJvdG90eXBlLmhhbmRsZUVkaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgbGlzdEl0ZW0gPSBmaW5kUGFyZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgdmFyIGlkID0gbGlzdEl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcclxuICAgICAgICB2YXIgZWRpdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXQtYXJ0aWNsZV9fZm9ybVwiKTtcclxuICAgICAgICB2YXIgaXRlbU9iaiA9IGdldEFydGljbGUoaWQpO1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2FsbEV2ZW50KGRhdGEpIHtcclxuICAgICAgICAgICAgY29udGV4dC5lbWl0KFwiZWRpdFwiLCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVkaXRGb3JtLmZpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB1cGxvYWRJbWcoZS50YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgcGFyZW50SW1nID0gZWRpdEZvcm0uZmlsZS5wYXJlbnROb2RlO1xyXG4gICAgICAgIHBhcmVudEltZy5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX2ltZ1wiKS5yZW1vdmUoKTtcclxuICAgICAgICB2YXIgbmV3SW1nID0gX2NyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGl0ZW1PYmouSW1hZ2UuVXJsLCB3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMCwgaWQ6IFwiaW1nXCIsIGNsYXNzOiBcImZvcm1fX2ltZyBpbWdfZGVmYXVsdFwiIH0pO1xyXG4gICAgICAgIHBhcmVudEltZy5hcHBlbmRDaGlsZChuZXdJbWcpO1xyXG4gICAgICAgIGVkaXRGb3JtLnRpdGxlLnZhbHVlID0gaXRlbU9iai5UaXRsZTtcclxuICAgICAgICBlZGl0Rm9ybS50ZXh0LnZhbHVlID0gaXRlbU9iai5EZXNjcmlwdGlvbjtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlZGl0Rm9ybS5jYXRlZ29yeS5vcHRpb25zKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSA9PSBpdGVtT2JqLkNhdGVnb3JpZXNbMF0uSWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19faXRlbV9hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcInRhYnNfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ3NfYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZXR0aW5nc19hY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tZWRpdFwiKS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcclxuICAgICAgICB0aGlzLmZvcm1FZGl0LmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc19hY3RpdmVcIik7XHJcblxyXG4gICAgICAgIGVkaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBlLnRhcmdldC50aXRsZTtcclxuICAgICAgICAgICAgdmFyIGNhdGVnb3J5ID0gZS50YXJnZXQuY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgIHZhciBmaWxlID0gZS50YXJnZXQuZmlsZTtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBlLnRhcmdldC50ZXh0O1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiY2F0ZWdvcmllc0lkc1wiLCBjYXRlZ29yeS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiSW1hZ2VJZFwiLCBmaWxlLmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJEZXNjcmlwdGlvblwiLCB0ZXh0LnZhbHVlKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJpZFwiLCBpZCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IG5ldyBWYWxpZGF0aW9uQXJ0aWNsZSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAvLyBmaWxlOiBmaWxlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogdGV4dFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLmNoZWNrKCkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxFdmVudChkYXRhRm9ybVRvT2JqKGRhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBWaWV3LnByb3RvdHlwZS5oYW5kbGVSZW1vdmUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgbGlzdEl0ZW0gPSBmaW5kUGFyZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgdmFyIGlkID0gbGlzdEl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbWl0KFwicmVtb3ZlXCIsIGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kUGFyZW50KGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcclxuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmluZFBhcmVudChlbGVtZW50LnBhcmVudE5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0pKCk7IiwidmFyIHN0YXRlID0gdW5kZWZpbmVkO1xyXG5cclxudmFyIGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hbmFnZW1lbnRfX2xpc3RcIik7XHJcbnZhciBzZWxlY3RDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VsZWN0LWNhdGVnb3J5XCIpO1xyXG5BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzZWxlY3RDYXRlZ29yeSkuZm9yRWFjaChlbGVtZW50ID0+IGNyZWF0ZVNlbGVjdENhdGVnb3J5KGVsZW1lbnQpKTtcclxuXHJcbnZhciBtb2RlbCA9IG5ldyBNb2RlbChzdGF0ZSB8fCB1bmRlZmluZWQpO1xyXG5cclxuXHJcbnZhciB2aWV3ID0gbmV3IFZpZXcoKTtcclxudmFyIGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihtb2RlbCwgdmlldyk7XHJcblxyXG52aWV3LnNob3dBbGxBcnRpY2xlcygpO1xyXG5cclxuXHJcbiIsIihmdW5jdGlvbigpIHtcclxuICAgIHZhciBhcnRpY2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhcnRpY2xlUGFnZVwiKTtcclxuICAgIFxyXG4gICAgaWYoYXJ0aWNsZSkge1xyXG4gICAgICAgIHZhciBpZCA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9cIiwgXCJcIikuc3BsaXQoXCI9XCIpWzFdO1xyXG4gICAgICAgIHZhciBhcnRpY2xlRGF0YSA9IGdldEFydGljbGUoaWQpO1xyXG5cclxuICAgICAgICB2YXIgdGl0bGUgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZV9fdGl0bGVcIik7XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5ID0gYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGVfX2NhdGVnb3J5XCIpO1xyXG4gICAgICAgIHZhciB0aW1lID0gYXJ0aWNsZS5xdWVyeVNlbGVjdG9yKFwiLmFydGljbGVfX2RhdGVcIik7XHJcbiAgICAgICAgdmFyIHRleHQgPSBhcnRpY2xlLnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZV9fdGV4dFwiKTtcclxuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImFydGljbGVfX2ltZ1wiKTtcclxuICAgICAgICBpbWcuc3JjID0gYXJ0aWNsZURhdGEuSW1hZ2UuSW1hZ2VUcmFuc2Zvcm1zWzJdLlVybDtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcnRpY2xlRGF0YS5JbWFnZSk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gYXJ0aWNsZURhdGEuVGl0bGU7XHJcbiAgICAgICAgY2F0ZWdvcnkuaW5uZXJIVE1MID0gYXJ0aWNsZURhdGEuQ2F0ZWdvcmllc1swXS5OYW1lO1xyXG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJhcnRpY2xlX19jYXRlZ29yeS1cIiArIChhcnRpY2xlRGF0YS5DYXRlZ29yaWVzWzBdLk5hbWUpLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICAgIHRpbWUuaW5uZXJIVE1MID0gZm9ybWF0RGF0ZShhcnRpY2xlRGF0YS5DcmVhdGlvbkRhdGUpO1xyXG4gICAgICAgIHRpbWUuc2V0QXR0cmlidXRlKFwiZGF0ZXRpbWVcIiwgZm9ybWF0RGF0ZShhcnRpY2xlRGF0YS5DcmVhdGlvbkRhdGUpKTtcclxuICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgdGV4dC5pbm5lckhUTUwgKz0gYXJ0aWNsZURhdGEuRGVzY3JpcHRpb247XHJcblxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUl0ZW0oZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGRhdGEuY2F0ZWdvcnkgPSB7aWQ6ZGF0YS5DYXRlZ29yaWVzWzBdLklkLCBuYW1lOiBkYXRhLkNhdGVnb3JpZXNbMF0uTmFtZX07XHJcblxyXG4gICAgICAgIHZhciB2aWV3cyA9IF9jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7Y2xhc3M6IFwic2Vjb25kYXJ5X192aWV3c1wifSwgXCJcIiwgXCJcIitkYXRhLlZpZXdzQ291bnQpO1xyXG4gICAgICAgIHZhciB0aW1lID0gX2NyZWF0ZUVsZW1lbnQoXCJ0aW1lXCIsIHtjbGFzczogXCJzZWNvbmRhcnlfX2RhdGVcIiwgcHViZGF0ZTogXCJcIiwgZGF0ZXRpbWU6IGZvcm1hdERhdGUoZGF0YS5DcmVhdGlvbkRhdGUpIH0sIFwiXCIsIGZvcm1hdERhdGUoZGF0YS5DcmVhdGlvbkRhdGUpKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgc2Vjb25kYXJ5ID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzOiBcInNlY29uZGFyeSBjYXRhbG9nX19zZWNvbmRhcnlcIn0sIFwiXCIsIFt2aWV3cywgdGltZV0pO1xyXG4gICAgICAgIHZhciBwcmV2aWV3ID0gX2NyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3M6IFwiY2F0YWxvZ19fcHJldmlld1wifSwgXCJcIiAsIGRhdGEuRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHZhciBjYXRlZ29yeSA9IF9jcmVhdGVFbGVtZW50KFwiYVwiLCB7Y2xhc3M6IFwiY2F0YWxvZ19fY2F0ZWdvcnkgY2F0YWxvZ19fY2F0ZWdvcnktXCIrIGRhdGEuY2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpLCBcImRhdGEtaWRcIjogZGF0YS5jYXRlZ29yeS5pZH0sIFwiXCIsIGRhdGEuY2F0ZWdvcnkubmFtZSk7XHJcbiAgICAgICAgdmFyIHRpdGxlID0gX2NyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzczogXCJjYXRhbG9nX190aXRsZVwifSwgXCJcIiwgZGF0YS5UaXRsZSk7XHJcblxyXG4gICAgICAgIHZhciB3cmFwID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzOiBcImNhdGFsb2dfX3dyYXBcIn0sIFwiXCIsIFt0aXRsZSwgY2F0ZWdvcnksIHByZXZpZXcsIHNlY29uZGFyeV0pO1xyXG4gICAgICAgIHZhciBpbWcgPSBfY3JlYXRlRWxlbWVudChcImltZ1wiLCB7Y2xhc3M6IFwiY2F0YWxvZ19faW1nXCIsIHNyYzogZGF0YS5JbWFnZVVybH0pO1xyXG5cclxuICAgICAgICB2YXIgaXRlbSA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtjbGFzczogXCJjYXRhbG9nX19pdGVtIGNvbC1sLTQgY29sLXQtNiBjb2wtbS0xMlwiLCBcImRhdGEtaWRcIjogZGF0YS5JZH0sIFwiXCIsIFtpbWcsIHdyYXBdKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFkZEV2ZW50TGlzdGVuZXJzKGl0ZW0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyhpdGVtKSB7XHJcbiAgICAgICAgdmFyIGNhdGVnb3J5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLmNhdGFsb2dfX2NhdGVnb3J5XCIpO1xyXG4gICAgICAgIHZhciB0aXRsZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcihcIi5jYXRhbG9nX190aXRsZVwiKTtcclxuICAgICAgICBjYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUFydGljbGVzLmJpbmQobnVsbCwgW2NhdGVnb3J5LmRhdGFzZXQuaWRdKSk7XHJcbiAgICAgICAgdGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlZGlyZWN0LmJpbmQobnVsbCwgW2l0ZW0uZGF0YXNldC5pZCwgXCJhcnRpY2xlLmh0bWxcIl0pKTtcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuY3JlYXRlSXRlbSA9IGNyZWF0ZUl0ZW07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcnMgPSBhZGRFdmVudExpc3RlbmVycztcclxufSkoKTtcclxuIiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBcnRpY2xlcygpIHtcclxuICAgICAgICB2YXIgY2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0YWxvZ19faXRlbXNcIik7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShcIj9cIiwgXCJcIikuc3BsaXQoXCI9XCIpWzFdKSB7XHJcbiAgICAgICAgICAgIHZhciBhcnRpY2xlcyA9IGdldEFsbEFydGljbGVzKFt3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXCI/XCIsIFwiXCIpLnNwbGl0KFwiPVwiKVsxXV0pO1xyXG5cclxuICAgICAgICAgICAgaWYoY2F0YWxvZykge1xyXG4gICAgICAgICAgICAgICAgY2F0YWxvZy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZXMucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gY3JlYXRlSXRlbShlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0YWxvZy5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFydGljbGVzID0gZ2V0QWxsQXJ0aWNsZXMoYXJndW1lbnRzWzBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0YWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGFsb2cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBjcmVhdGVJdGVtKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRhbG9nLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFydGljbGVzID0gZ2V0QWxsQXJ0aWNsZXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY2F0YWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0YWxvZ19faXRlbXNcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0YWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGFsb2cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlcy5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBjcmVhdGVJdGVtKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRhbG9nLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZGlyZWN0KGFyZykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgICAgICAgaWYgKGFyZ1swXSkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFyZ1sxXSArIFwiP2lkPVwiICsgYXJnWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSBhcmdbMV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5kaXNwbGF5QXJ0aWNsZXMgPSBkaXNwbGF5QXJ0aWNsZXM7XHJcbiAgICB3aW5kb3cucmVkaXJlY3QgPSByZWRpcmVjdDtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gZ2V0QWxsQXJ0aWNsZXMoY2F0ZWdvcmllc0lkcykge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09IDIwMCAmJiB0aGlzLnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZSh0aGlzLnJlc3BvbnNlVGV4dClbXCJQb3N0c1wiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2F0ZWdvcmllc0lkcykge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzSWRzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gY2F0ZWdvcmllc0lkcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllc0lkc1tpbmRleF0gPSBcImNhdGVnb3JpZXNJZHM9XCIgKyBpdGVtO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzSWRzW2luZGV4XSA9IFwiY2F0ZWdvcmllc0lkcz1cIiArIGl0ZW0gKyBcIiZcIjtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzSWRzID0gY2F0ZWdvcmllc0lkcy5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzSWRzKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIFwiaHR0cDovL2xvY2FsaG9zdDo1MDUzNi9hcGkvcHVibGljL3Bvc3RzP1wiICsgY2F0ZWdvcmllc0lkcywgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICByZXF1ZXN0LnNlbmQoSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllc0lkcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub3BlbihcIkdFVFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MzYvYXBpL3B1YmxpYy9wb3N0c1wiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgd2luZG93LmdldEFsbEFydGljbGVzID0gZ2V0QWxsQXJ0aWNsZXM7XHJcbn0pKCk7IiwiZGlzcGxheUFydGljbGVzKCk7XHJcblxyXG4iLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXNpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlX19idG5cIik7XHJcbiAgICAgICAgdmFyIGFzaWRlV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXNpZGUtd3JhcFwiKTtcclxuICAgICAgICB2YXIgYXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlXCIpO1xyXG4gICAgICAgIHZhciBib29sID0gdHJ1ZTtcclxuICAgICAgICBpZiAoYXNpZGVCdG4pIHtcclxuICAgICAgICAgICAgYXNpZGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zaXRpb24gPSBcIjEuN3NcIjtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgtMTgwZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnJpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShhc2lkZSkud2lkdGgpICsgMTAgKyBcInB4XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYXNpZGVXcmFwLnN0eWxlLnJpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9vbCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBcIiMzYWEzZTRcIjtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNpdGlvbiA9IFwiMS43c1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5yaWdodCA9IFwiMjBweFwiOztcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIGFzaWRlV3JhcC5zdHlsZS5yaWdodCA9IFwiLTEwMHZ3XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9vbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGRpc3BsYXlDYXRlZ29yaWVzKCl7XHJcbiAgICAgICAgdmFyIGFzaWRlQ2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnkuYXNpZGVfX2VsZW1lbnRcIik7XHJcbiAgICAgICAgaWYoYXNpZGVDYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gYXNpZGVDYXRlZ29yaWVzLnF1ZXJ5U2VsZWN0b3IoXCIuY2F0ZWdvcnlfX2xpc3RcIik7XHJcbiAgICBcclxuICAgICAgICAgICAgdmFyIGNhdGVnb3JpZXMgPSBnZXRBbGxDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gX2NyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzczogXCJjYXRlZ29yeV9fbGluayBhc2lkZV9fbGluayBhc2lkZV9fbGluay1cIiArIChlbGVtZW50Lk5hbWUpLnRvTG93ZXJDYXNlKCl9LCBcIlwiLCBlbGVtZW50Lk5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVkaXJlY3QuYmluZChudWxsLCBbZWxlbWVudC5JZCwgXCJpbmRleC5odG1sXCJdKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbGkgPSBfY3JlYXRlRWxlbWVudChcImxpXCIsIHtjbGFzczogXCJjYXRlZ29yeV9faXRlbSBhc2lkZV9faXRlbVwifSwgXCJcIiwgW2xpbmtdKTtcclxuICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUNhdGVnb3JpZXMoKTtcclxufSkoKTsiXX0=
