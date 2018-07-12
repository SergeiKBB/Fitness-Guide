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