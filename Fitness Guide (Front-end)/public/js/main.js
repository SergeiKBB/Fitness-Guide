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

            console.dir(file);
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
                        var createArticleMessage = createElement("div", { className: "signup-message" }, "", "You have successfully created an article")
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

var Article;

(function(){
Article = function(state) {
    this.state = state;
};

Article.prototype.getItem = function(id) {
    return this.state.find(item => item.id == id);
};

Article.prototype.addItem = function(item) {
    this.state.push(item);
};

Article.prototype.updateItem = function(id, data) {
    var item = this.getItem(id);

    Object.keys(data).forEach(prop => item[prop] = data[prop]);
};

Article.prototype.removeItem = function(id) {
    var index = this.state.findIndex(item => item.id = id);

    if(index > -1) {
        this.state.splice(index,1);
    }
};
})(); 
var View;

(function(){

View = function() {
    this.list = document.getElementById("management__list");
}

View.prototype.addItem = function(article) {
    var listItem = this.createElement(article);
    this.list.appendChild(listItem);
}

View.prototype.findListItem = function(id) {
    return this.list.querySelector('[data-id="'+id+'"');
}

View.prototype.editItem = function(article) {
    var listItem = this.findListItem(article.id);
    var title = listItem.querySelector(".management__title");

    title.innerHTML = article.title;
}

View.prototype.removeItem = function(id) {
    var listItem = this.findListItem(id);

    this.list.removeChild(listItem);
}

View.prototype.createElement = function(article) {
    var editBtn = createElement("a", {className: "btn btn__edit"},"", "Edit");
    var removeBtn = createElement("a", {className: "btn btn__remove"}, "", "Remove");
    var btnWrap = createElement("div", {className: "btn__wrap"},"", [editBtn, removeBtn]);

    var views = createElement("span", {className: "secondary__views"}, "", article.views);
    var time = createElement("time", {className: "secondary__date", pubdate, datetime: article.date}, "", article.date);
    var secondary = createElement("div", {className: "secondary management__secondary"}, "", [views, time]);

    var title = createElement("h2", {className: "management__title"}, "", article.title);

    var item = createElement("li", {className: "management__item "}, "", [title, secondary, btnWrap]);

    var itemWrap = createElement("div", {className: "management__item-wrap col-l-3 col-t-6 col-m-12", "data-id": article.id}, "", [item]);
}
 
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLmpzIiwiY2Fyb3VzZWwuanMiLCJjcmVhdGVBcnRpY2xlLmpzIiwiaGVscGVycy5qcyIsImxvZ2luLmpzIiwibWFuYWdlbWVudEFydGljbGVzLmpzIiwibWVudS5qcyIsInNldHRpbmdzLmpzIiwiYXJ0aWNsZXMvY29udHJvbGxlci5qcyIsImFydGljbGVzL21vZGVsLmpzIiwiYXJ0aWNsZXMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgYXNpZGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFzaWRlX19idG5cIik7XHJcbiAgICB2YXIgYXNpZGVXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZS13cmFwXCIpO1xyXG4gICAgdmFyIGFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hc2lkZVwiKTtcclxuICAgIHZhciBib29sID0gdHJ1ZTtcclxuICAgIGlmIChhc2lkZUJ0bikge1xyXG4gICAgICAgIGFzaWRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoYm9vbCkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zaXRpb24gPSBcIjEuN3NcIjtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKC0xODBkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5yaWdodCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoYXNpZGUpLndpZHRoKSArIDEwICsgXCJweFwiO1xyXG4gICAgICAgICAgICAgICAgYXNpZGVXcmFwLnN0eWxlLnJpZ2h0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBib29sID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2Zvcm0gPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gXCIjM2FhM2U0XCI7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS50cmFuc2l0aW9uID0gXCIxLjdzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUucmlnaHQgPSBcIjIwcHhcIjs7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgYXNpZGVXcmFwLnN0eWxlLnJpZ2h0ID0gXCItMTAwdndcIjtcclxuICAgICAgICAgICAgICAgIGJvb2wgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBtb3ZlQ2Fyb3VzZWwoKSB7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJvdXNlbF9faXRlbS13cmFwXCIpO1xyXG4gICAgICAgIHZhciBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJvdXNlbF9fcHJldlwiKTtcclxuICAgICAgICB2YXIgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxfX25leHRcIik7XHJcbiAgICAgICAgdmFyIGluZGV4O1xyXG4gICAgICAgIGlmIChwcmV2KSB7XHJcbiAgICAgICAgICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gZmluZEluZGV4KGl0ZW1zLCBcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5hZGQoXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKC05MGRlZylcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgwZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4IC0gMV0uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgtOTBkZWcpXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgwZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IGZpbmRJbmRleChpdGVtcywgXCJjYXJvdXNlbF9faXRlbS1hY3RpdmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IGl0ZW1zLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1swXS5jbGFzc0xpc3QuYWRkKFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zWzBdLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSg5MGRlZylcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zWzBdLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgwZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4ICsgMV0uY2xhc3NMaXN0LmFkZChcImNhcm91c2VsX19pdGVtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleCArIDFdLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSg5MGRlZylcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zW2luZGV4ICsgMV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGVZKDBkZWcpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGZpbmRJbmRleChhcnIsIGNsYXNzTmFtZSwgc3RhcnRQb3NpdGlvbikge1xyXG4gICAgICAgICAgICBpZiAoc3RhcnRQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0UG9zaXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0UG9zaXRpb247IGkgPCBhcnIubGVuZ3RoIC0gc3RhcnRQb3NpdGlvbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gYXJyLmxlbmd0aCArIHN0YXJ0UG9zaXRpb247IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycltpXS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUl0ZW0ob2JqKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSAnPGRpdiBjbGFzcz1cImNhcm91c2VsX19pdGVtIGNvbC1sLTQgY29sLXQtNiBjb2wtbS0xMlwiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCInKyBvYmouaW1nICsgJ1wiIGFsdD1cIlwiIGNsYXNzPVwiY2Fyb3VzZWxfX2ltZ1wiPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsX193cmFwXCI+XFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzPVwiY2Fyb3VzZWxfX2NhdGVnb3J5IGNhcm91c2VsX19jYXRlZ29yeS0nICsgb2JqLmNhdGVnb3J5ICsgJ1wiPicgKyBvYmouY2F0ZWdvcnlbMF0udG9VcHBlckNhc2UoKSArIG9iai5jYXRlZ29yeS5zdWJzdHJpbmcoMSkgKyAnPC9hPlxcXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzcz1cImNhcm91c2VsX190aXRsZVwiPicgKyBvYmoudGl0bGUgKyAnIDwvYT5cXFxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxyXG4gICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVdyYXAoaXRlbXMsIGJvb2wpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImNhcm91c2VsX19pdGVtLXdyYXAgY2Fyb3VzZWxfX2l0ZW0tYWN0aXZlXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBcImNhcm91c2VsX19pdGVtLXdyYXBcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MICs9IGNyZWF0ZUl0ZW0oZWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShmYXRoZXIsIHNpemUsIGFyckl0ZW1zKSB7XHJcbiAgICAgICAgdmFyIG51bWJlciA9IDEyIC8gc2l6ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bWJlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIGZhdGhlci5hcHBlbmRDaGlsZChjcmVhdGVXcmFwKGFyckl0ZW1zLnNsaWNlKGksIGkgKyBzaXplKSwgdHJ1ZSkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNyZWF0ZVdyYXAoYXJySXRlbXMuc2xpY2UoaSwgaSArIHNpemUpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBvYmoxID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvcnVubmluZzIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwicnVubmluZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqMiA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL3N3aW1taW5nMi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJzd2ltbWluZ1wiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqMyA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL2Nyb3NzZml0Mi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJjcm9zc2ZpdFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcbiAgICB2YXIgb2JqNCA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL3J1bm5pbmcyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInJ1bm5pbmdcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajUgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9zd2ltbWluZzIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwic3dpbW1pbmdcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajYgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9jcm9zc2ZpdDIuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiY3Jvc3NmaXRcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajcgPSB7XHJcbiAgICAgICAgaW1nOiBcImltZy9ydW5uaW5nMi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJydW5uaW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICAgIHZhciBvYmo4ID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvc3dpbW1pbmcyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInN3aW1taW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICAgIHZhciBvYmo5ID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvY3Jvc3NmaXQyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcImNyb3NzZml0XCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICAgIHZhciBvYmoxMCA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL3J1bm5pbmcyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInJ1bm5pbmdcIixcclxuICAgICAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQsIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIlxyXG4gICAgfVxyXG4gICAgdmFyIG9iajExID0ge1xyXG4gICAgICAgIGltZzogXCJpbWcvc3dpbW1pbmcyLmpwZ1wiLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcInN3aW1taW5nXCIsXHJcbiAgICAgICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0LCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCJcclxuICAgIH1cclxuICAgIHZhciBvYmoxMiA9IHtcclxuICAgICAgICBpbWc6IFwiaW1nL2Nyb3NzZml0Mi5qcGdcIixcclxuICAgICAgICBjYXRlZ29yeTogXCJjcm9zc2ZpdFwiLFxyXG4gICAgICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCwgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlwiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBhbGxJdGVtcyA9IFtvYmoxLCBvYmoyLCBvYmozLCBvYmo0LCBvYmo1LCBvYmo2LCBvYmo3LCBvYmo4LCBvYmo5LCBvYmoxMCwgb2JqMTEsIG9iajEyXTtcclxuXHJcbiAgICB2YXIgZmF0aGVyID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Fyb3VzZWxfX2lubmVyXCIpO1xyXG4gICAgaWYgKGZhdGhlcikge1xyXG4gICAgICAgIHdpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChpbm5lcldpZHRoIDwgNDI2KSB7XHJcbiAgICAgICAgICAgICAgICBmYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZShmYXRoZXIsIDEsIGFsbEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG1vdmVDYXJvdXNlbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlubmVyV2lkdGggPCA3NjkpIHtcclxuICAgICAgICAgICAgICAgIGZhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlKGZhdGhlciwgMiwgYWxsSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgbW92ZUNhcm91c2VsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZShmYXRoZXIsIDMsIGFsbEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG1vdmVDYXJvdXNlbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChpbm5lcldpZHRoIDwgNDI2KSB7XHJcbiAgICAgICAgICAgICAgICBmYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZShmYXRoZXIsIDEsIGFsbEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG1vdmVDYXJvdXNlbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlubmVyV2lkdGggPCA3NjkpIHtcclxuICAgICAgICAgICAgICAgIGZhdGhlci5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlKGZhdGhlciwgMiwgYWxsSXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgbW92ZUNhcm91c2VsKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmYXRoZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZShmYXRoZXIsIDMsIGFsbEl0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG1vdmVDYXJvdXNlbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pKCk7IiwiKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtYXJ0aWNsZV9fZm9ybVwiKTtcclxuICAgIHZhciBpbWdJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nLWlucHV0XCIpO1xyXG4gICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nXCIpO1xyXG4gICAgdmFyIGNyZWF0ZUFydGljbGVVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NjEwMTEvYXBpL3B1YmxpYy9jcmVhdGVBcnRpY2xlXCI7XHJcblxyXG5cclxuICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSBlLnRhcmdldC50aXRsZTtcclxuICAgICAgICAgICAgdmFyIGNhdGVnb3J5ID0gZS50YXJnZXQuY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgIHZhciBmaWxlID0gZS50YXJnZXQuZmlsZTtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBlLnRhcmdldC50ZXh0O1xyXG5cclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0aXRsZVwiLCB0aXRsZS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKFwiY2F0ZWdvcnlcIiwgY2F0ZWdvcnkudmFsdWUpO1xyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZChcImltZ1wiLCBmaWxlLmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoXCJ0ZXh0XCIsIHRleHQudmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5kaXIoZmlsZSk7XHJcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0gbmV3IFZhbGlkYXRpb25BcnRpY2xlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGZpbGU6IGZpbGUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYodmFsaWRhdGlvbi5jaGVjaygpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBjcmVhdGVBcnRpY2xlVXJsLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVxdWVzdC5zdGF0dXMgPT0gMjAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjcmVhdGVBcnRpY2xlTWVzc2FnZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2lnbnVwLW1lc3NhZ2VcIiB9LCBcIlwiLCBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIGFuIGFydGljbGVcIilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW1nSW5wdXQpIHtcclxuXHJcbiAgICAgICAgaW1nSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB1cGxvYWRJbWcoZS50YXJnZXQuZmlsZXNbMF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBsb2FkSW1nKGZpbGUpIHtcclxuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gKGZ1bmN0aW9uIChmaWxlKSB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbWcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gaW1nLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdJbWcgPSBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtzcmM6IGUudGFyZ2V0LnJlc3VsdCwgd2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDAsIGlkOiBcImltZ1wiLCBjbGFzc05hbWU6IFwiZm9ybV9faW1nXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3SW1nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KShmaWxlKTtcclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbn0pKCk7IiwidmFyIGNyZWF0ZUVsZW1lbnQ7XHJcbnZhciBWYWxpZGF0aW9uQXJ0aWNsZTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKHRhZywgcHJvcHMsIHN0eWxlcywgY2hpbGQpIHtcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgaWYocHJvcHNba2V5XSkge1xyXG4gICAgICAgICAgICBlbGVtZW50W2tleV0gPSBwcm9wc1trZXldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYoc3R5bGVzKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGtleSA9PiBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gY2hpbGQ7XHJcbiAgICB9IGVsc2UgaWYoY2hpbGQgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIGNoaWxkLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufTtcclxuXHJcblZhbGlkYXRpb25BcnRpY2xlID0gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICB0aGlzLmVsZW1lbnRzID0gb2JqO1xyXG4gICAgdGhpcy50aXRsZSA9IG9iai50aXRsZS52YWx1ZTtcclxuICAgIHRoaXMuY2F0ZWdvcnkgPSBvYmouY2F0ZWdvcnkudmFsdWU7XHJcbiAgICBpZihvYmouZmlsZS5maWxlc1swXSkge1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG9iai5maWxlO1xyXG4gICAgfVxyXG4gICAgdGhpcy50ZXh0ID0gb2JqLnRleHQudmFsdWU7XHJcbiAgICB0aGlzLnJlc3VsdCA9IHRydWU7XHJcbn1cclxuXHJcblZhbGlkYXRpb25BcnRpY2xlLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYoIXRoaXMudGl0bGUpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnRpdGxlLmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgIH0gXHJcblxyXG4gICAgaWYoIXRoaXMuY2F0ZWdvcnkpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmNhdGVnb3J5LmNsYXNzTGlzdC5yZW1vdmUoXCJlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZighdGhpcy5maWxlKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5maWxlLmNsYXNzTGlzdC5hZGQoXCJlcnJvclwiKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLmZpbGUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKCF0aGlzLnRleHQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnRleHQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMudGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzdWx0O1xyXG59XHJcblxyXG59KSgpOyIsInZhciBzZW5kUmVxdWVzdDtcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgdGFiTG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYkxvZ2luQnRuXCIpO1xyXG4gICAgdmFyIHRhYlNpZ251cEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiU2lnbnVwQnRuXCIpO1xyXG4gICAgdmFyIHRhYkxvZ2luQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiTG9naW5Db250ZW50XCIpO1xyXG4gICAgdmFyIHRhYlNpZ251cENvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYlNpZ251cENvbnRlbnRcIik7XHJcbiAgICB2YXIgbW9kYWxMb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2xvZ2luXCIpO1xyXG4gICAgdmFyIG1vZGFsV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtd3JhcFwiKTtcclxuICAgIHZhciBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlXCIpO1xyXG4gICAgdmFyIGxvZ2luQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKTtcclxuXHJcbiAgICBsb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG1vZGFsV3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtb2RhbFdyYXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgIH0pXHJcblxyXG4gICAgdGFiTG9naW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJfX2J0bi1hY3RpdmVcIikpIHtcclxuICAgICAgICAgICAgdGFiTG9naW5Db250ZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ0YWItYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB0YWJTaWdudXBDb250ZW50LmNsYXNzTGlzdC50b2dnbGUoXCJ0YWItYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB0YWJTaWdudXBCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRhYl9fYnRuLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgdGFiTG9naW5CdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRhYl9fYnRuLWFjdGl2ZVwiKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFiU2lnbnVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFiX19idG4tYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIHRhYkxvZ2luQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwidGFiLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgdGFiU2lnbnVwQ29udGVudC5jbGFzc0xpc3QudG9nZ2xlKFwidGFiLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgdGFiU2lnbnVwQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0YWJfX2J0bi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIHRhYkxvZ2luQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJ0YWJfX2J0bi1hY3RpdmVcIik7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB0YWJJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYl9faW5wdXRcIik7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJJbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0YWJJbnB1dHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGFiSW5wdXRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLy9TVUJNSVRcclxuXHJcblxyXG4gICAgdmFyIGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5Gb3JtXCIpO1xyXG4gICAgdmFyIHNpZ251cEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ251cEZvcm1cIik7XHJcbiAgICB2YXIgY3JlYXRlQXJ0aWNsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLWFydGljbGVcIik7XHJcbiAgICB2YXIgbG9naW5VcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NjEwMTEvYXBpL3B1YmxpYy9sb2dpblwiO1xyXG4gICAgdmFyIHNpZ251cFVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo2MTAxMS9hcGkvcHVibGljL3JlZ2lzdGVyXCI7XHJcblxyXG5cclxuICAgIHZhciBzaWdudXBSZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cclxuICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBlbWFpbCA9IGUudGFyZ2V0LmVtYWlsO1xyXG4gICAgICAgIHZhciBwYXNzd29yZCA9IGUudGFyZ2V0LnBhc3N3b3JkO1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiZW1haWxcIiwgZW1haWwudmFsdWUpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwicGFzc3dvcmRcIiwgcGFzc3dvcmQudmFsdWUpO1xyXG5cclxuICAgICAgICB2YXIgdmFsaWRMb2dpbiA9IG5ldyBWYWxpZGF0aW9uKHtcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkTG9naW4uY2hlY2soKSkge1xyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHNlbmRSZXF1ZXN0KFwiUE9TVFwiLCBsb2dpblVybCwgZGF0YSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09IDIwMCAmJiByZXF1ZXN0LnJlYWR5U3RhdGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsV3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwiYWRtaW5cIiwgdHJ1ZSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29va2llKFwibmFtZVwiLCBcIkFkbWluXCIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgc2lnbnVwRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgZmlyc3ROYW1lID0gZS50YXJnZXQuZmlyc3ROYW1lO1xyXG4gICAgICAgIHZhciBsYXN0TmFtZSA9IGUudGFyZ2V0Lmxhc3ROYW1lO1xyXG4gICAgICAgIHZhciBlbWFpbCA9IGUudGFyZ2V0LmVtYWlsO1xyXG4gICAgICAgIHZhciBwYXNzd29yZCA9IGUudGFyZ2V0LnBhc3N3b3JkO1xyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiZmlyc3ROYW1lXCIsIGZpcnN0TmFtZS52YWx1ZSk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJsYXN0TmFtZVwiLCBsYXN0TmFtZS52YWx1ZSk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJlbWFpbFwiLCBlbWFpbC52YWx1ZSk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJwYXNzd29yZFwiLCBwYXNzd29yZC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHZhciB2YWxpZFNpZ251cCA9IG5ldyBWYWxpZGF0aW9uKHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBsYXN0TmFtZSxcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgICB9LCBcInNpZ251cFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkU2lnbnVwLmNoZWNrKCkpIHtcclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBzZW5kUmVxdWVzdChcIlBPU1RcIiwgc2lnbnVwVXJsLCBkYXRhKTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT0gMjA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNpZ251cE1lc3NhZ2UgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNpZ251cC1tZXNzYWdlXCIgfSwgXCJcIiwgXCJZb3UgaGF2ZSBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpZ251cE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsV3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ251cE1lc3NhZ2Uuc3R5bGUudG9wID0gXCItXCIgKyBnZXRDb21wdXRlZFN0eWxlKHNpZ251cE1lc3NhZ2UpLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBpZiAoZ2V0Q29va2llKFwiYWRtaW5cIikpIHtcclxuICAgICAgICB2YXIgbG9naW5MaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpblwiKTtcclxuICAgICAgICB2YXIgbG9naW5MaW5rVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudXNlci1uYXZfX3RleHRcIik7XHJcbiAgICAgICAgdmFyIGNyZWF0ZUFydGljbGUgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFwiY3JlYXRlQXJ0aWNsZS5odG1sXCIsIGNsYXNzTmFtZTogXCJ1c2VyLW5hdl9fbGlua1wiIH0sIFwiXCIsICc8c3BhbiBjbGFzcz1cInVzZXItbmF2X19pY29uIGljb24tYWRkXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwidXNlci1uYXZfX3RleHRcIj5BcnRpY2xlPC9zcGFuPicpO1xyXG4gICAgICAgIGxvZ2luTGluay5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZUFydGljbGUpO1xyXG4gICAgICAgIGxvZ2luTGlua1RleHQuaW5uZXJIVE1MID0gZ2V0Q29va2llKFwibmFtZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ2V0Q29va2llKFwiZW1haWxcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENvb2tpZShjbmFtZSwgY3ZhbHVlLCBleGRheXMpIHtcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKGV4ZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgICAgICB2YXIgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIiArIGQudG9VVENTdHJpbmcoKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjbmFtZSArIFwiPVwiICsgY3ZhbHVlICsgXCI7XCIgKyBleHBpcmVzICsgXCI7cGF0aD0vXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBjbmFtZSArIFwiPVwiO1xyXG4gICAgICAgIHZhciBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICAgICAgdmFyIGNhID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGMgPSBjYVtpXTtcclxuICAgICAgICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09ICcgJykge1xyXG4gICAgICAgICAgICAgICAgYyA9IGMuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZSkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNlbmRSZXF1ZXN0ID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGRhdGFPYmogPSB7fTtcclxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgZGF0YU9ialtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xyXG4gICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmVxdWVzdC5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGFPYmopKTtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH07XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBWYWxpZGF0aW9uKG9iaiwgdHlwZSkge1xyXG4gICAgICAgIHRoaXMuX2VtYWlsUmVnID0gL15bLVxcdy5dK0AoW0EtejAtOV1bLUEtejAtOV0rXFwuKStbQS16XXsyLDR9JC87XHJcbiAgICAgICAgdGhpcy5fcGFzc3dvcmRSZWcgPSAvXig/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0oLipbYS16QS1aXSl7NH0pLns4LDIwfSQvO1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSAvXltBLVpdezF9W2Etel17MSwxMH0kLztcclxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gb2JqO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBvYmouZW1haWwudmFsdWU7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IG9iai5wYXNzd29yZC52YWx1ZTtcclxuICAgICAgICBpZiAob2JqLmZpcnN0TmFtZSAmJiBvYmoubGFzdE5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBvYmouZmlyc3ROYW1lLnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3ROYW1lID0gb2JqLmxhc3ROYW1lLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBWYWxpZGF0aW9uLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2VtYWlsUmVnLnRlc3QodGhpcy5lbWFpbCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5lbWFpbC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5lbWFpbC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX3Bhc3N3b3JkUmVnLnRlc3QodGhpcy5wYXNzd29yZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5wYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0ID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5wYXNzd29yZC5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50eXBlID09IFwic2lnbnVwXCIpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9uYW1lLnRlc3QodGhpcy5maXJzdE5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmZpcnN0TmFtZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5maXJzdE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX25hbWUudGVzdCh0aGlzLmxhc3ROYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5sYXN0TmFtZS5jbGFzc0xpc3QuYWRkKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5sYXN0TmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiZXJyb3JcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc3VsdDtcclxuICAgIH1cclxufSkoKTsiLCJ2YXIgc2hvd0FydGljbGVzID0gKGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG59KSgpO1xyXG5cclxuXHJcbiIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1uYXZcIik7XHJcbiAgICB2YXIgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XHJcblxyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm1haW4tbmF2X2FjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm1haW4tbmF2X2FjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRhYnNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX19saXN0XCIpO1xyXG4gICAgdmFyIGNyZWF0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1hcnRpY2xlIGZvcm1cIik7XHJcbiAgICB2YXIgbWFuYWdlbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1hbmFnZW1lbnRfX2xpc3RcIik7XHJcbiAgICB2YXIgZWRpdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtYXJ0aWNsZSBmb3JtXCIpO1xyXG5cclxuICAgIGlmICh0YWJzTGlzdCkge1xyXG4gICAgICAgIHRhYnNMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWNyZWF0ZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJzX19pdGVtX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidGFic19faXRlbV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldHRpbmdzX2FjdGl2ZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwic2V0dGluZ3NfYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwidGFic19faXRlbV9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVGb3JtLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc19hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLW1hbmFnZW1lbnRcIikpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFic19faXRlbV9hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcInRhYnNfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zZXR0aW5nc19hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcInNldHRpbmdzX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcInRhYnNfX2l0ZW1fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgbWFuYWdlbWVudExpc3QuY2xhc3NMaXN0LmFkZChcInNldHRpbmdzX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIHNob3dBcnRpY2xlcygpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImJ0bi1lZGl0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhYnNfX2l0ZW1fYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0dGluZ3NfYWN0aXZlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZXR0aW5nc19hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJ0YWJzX19pdGVtX2FjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGVkaXRGb3JtLmNsYXNzTGlzdC5hZGQoXCJzZXR0aW5nc19hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn0pKCk7IiwiIiwidmFyIEFydGljbGU7XHJcblxyXG4oZnVuY3Rpb24oKXtcclxuQXJ0aWNsZSA9IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbn07XHJcblxyXG5BcnRpY2xlLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09IGlkKTtcclxufTtcclxuXHJcbkFydGljbGUucHJvdG90eXBlLmFkZEl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICB0aGlzLnN0YXRlLnB1c2goaXRlbSk7XHJcbn07XHJcblxyXG5BcnRpY2xlLnByb3RvdHlwZS51cGRhdGVJdGVtID0gZnVuY3Rpb24oaWQsIGRhdGEpIHtcclxuICAgIHZhciBpdGVtID0gdGhpcy5nZXRJdGVtKGlkKTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKHByb3AgPT4gaXRlbVtwcm9wXSA9IGRhdGFbcHJvcF0pO1xyXG59O1xyXG5cclxuQXJ0aWNsZS5wcm90b3R5cGUucmVtb3ZlSXRlbSA9IGZ1bmN0aW9uKGlkKSB7XHJcbiAgICB2YXIgaW5kZXggPSB0aGlzLnN0YXRlLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPSBpZCk7XHJcblxyXG4gICAgaWYoaW5kZXggPiAtMSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgfVxyXG59O1xyXG59KSgpOyAiLCJ2YXIgVmlldztcclxuXHJcbihmdW5jdGlvbigpe1xyXG5cclxuVmlldyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYW5hZ2VtZW50X19saXN0XCIpO1xyXG59XHJcblxyXG5WaWV3LnByb3RvdHlwZS5hZGRJdGVtID0gZnVuY3Rpb24oYXJ0aWNsZSkge1xyXG4gICAgdmFyIGxpc3RJdGVtID0gdGhpcy5jcmVhdGVFbGVtZW50KGFydGljbGUpO1xyXG4gICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcclxufVxyXG5cclxuVmlldy5wcm90b3R5cGUuZmluZExpc3RJdGVtID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmxpc3QucXVlcnlTZWxlY3RvcignW2RhdGEtaWQ9XCInK2lkKydcIicpO1xyXG59XHJcblxyXG5WaWV3LnByb3RvdHlwZS5lZGl0SXRlbSA9IGZ1bmN0aW9uKGFydGljbGUpIHtcclxuICAgIHZhciBsaXN0SXRlbSA9IHRoaXMuZmluZExpc3RJdGVtKGFydGljbGUuaWQpO1xyXG4gICAgdmFyIHRpdGxlID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcihcIi5tYW5hZ2VtZW50X190aXRsZVwiKTtcclxuXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBhcnRpY2xlLnRpdGxlO1xyXG59XHJcblxyXG5WaWV3LnByb3RvdHlwZS5yZW1vdmVJdGVtID0gZnVuY3Rpb24oaWQpIHtcclxuICAgIHZhciBsaXN0SXRlbSA9IHRoaXMuZmluZExpc3RJdGVtKGlkKTtcclxuXHJcbiAgICB0aGlzLmxpc3QucmVtb3ZlQ2hpbGQobGlzdEl0ZW0pO1xyXG59XHJcblxyXG5WaWV3LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24oYXJ0aWNsZSkge1xyXG4gICAgdmFyIGVkaXRCdG4gPSBjcmVhdGVFbGVtZW50KFwiYVwiLCB7Y2xhc3NOYW1lOiBcImJ0biBidG5fX2VkaXRcIn0sXCJcIiwgXCJFZGl0XCIpO1xyXG4gICAgdmFyIHJlbW92ZUJ0biA9IGNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtjbGFzc05hbWU6IFwiYnRuIGJ0bl9fcmVtb3ZlXCJ9LCBcIlwiLCBcIlJlbW92ZVwiKTtcclxuICAgIHZhciBidG5XcmFwID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcImJ0bl9fd3JhcFwifSxcIlwiLCBbZWRpdEJ0biwgcmVtb3ZlQnRuXSk7XHJcblxyXG4gICAgdmFyIHZpZXdzID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwge2NsYXNzTmFtZTogXCJzZWNvbmRhcnlfX3ZpZXdzXCJ9LCBcIlwiLCBhcnRpY2xlLnZpZXdzKTtcclxuICAgIHZhciB0aW1lID0gY3JlYXRlRWxlbWVudChcInRpbWVcIiwge2NsYXNzTmFtZTogXCJzZWNvbmRhcnlfX2RhdGVcIiwgcHViZGF0ZSwgZGF0ZXRpbWU6IGFydGljbGUuZGF0ZX0sIFwiXCIsIGFydGljbGUuZGF0ZSk7XHJcbiAgICB2YXIgc2Vjb25kYXJ5ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCB7Y2xhc3NOYW1lOiBcInNlY29uZGFyeSBtYW5hZ2VtZW50X19zZWNvbmRhcnlcIn0sIFwiXCIsIFt2aWV3cywgdGltZV0pO1xyXG5cclxuICAgIHZhciB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7Y2xhc3NOYW1lOiBcIm1hbmFnZW1lbnRfX3RpdGxlXCJ9LCBcIlwiLCBhcnRpY2xlLnRpdGxlKTtcclxuXHJcbiAgICB2YXIgaXRlbSA9IGNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7Y2xhc3NOYW1lOiBcIm1hbmFnZW1lbnRfX2l0ZW0gXCJ9LCBcIlwiLCBbdGl0bGUsIHNlY29uZGFyeSwgYnRuV3JhcF0pO1xyXG5cclxuICAgIHZhciBpdGVtV3JhcCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge2NsYXNzTmFtZTogXCJtYW5hZ2VtZW50X19pdGVtLXdyYXAgY29sLWwtMyBjb2wtdC02IGNvbC1tLTEyXCIsIFwiZGF0YS1pZFwiOiBhcnRpY2xlLmlkfSwgXCJcIiwgW2l0ZW1dKTtcclxufVxyXG4gXHJcbn0pKCk7Il19
