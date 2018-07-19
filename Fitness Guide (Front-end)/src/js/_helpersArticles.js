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

