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

