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