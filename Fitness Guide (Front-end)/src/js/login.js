
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