var Article;

(function(){
Article = function(items) {
    this.items = items;
};

Article.prototype = Object.create(EventEmitter.prototype);
Article.prototype.constructor = EventEmitter.prototype;

Article.prototype.getItem = function(id) {
    return this.items.find(item => item.id == id);
};

Article.prototype.addItem = function(item) {
    this.items.push(item);
    this.emit("change", this.item);
    return item;
};

Article.prototype.updateItem = function(id, data) {
    var item = this.getItem(id);

    Object.keys(data).forEach(prop => item[prop] = data[prop]);

    this.emit("change", this.item);
    return item;
};

Article.prototype.removeItem = function(id) {
    var index = this.items.findIndex(item => item.id == id);

    if(index > -1) {
        this.items.splice(index,1);
        this.emit("change", this.items)
    }
};
})(); 