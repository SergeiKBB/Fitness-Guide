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