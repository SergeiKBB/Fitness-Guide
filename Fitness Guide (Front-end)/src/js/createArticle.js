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