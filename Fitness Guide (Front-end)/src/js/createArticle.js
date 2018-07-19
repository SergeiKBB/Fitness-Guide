
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