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