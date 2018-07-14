var Controller;

(function() {
    Controller = function(model, view) {
        this.model = model;
        this.view = view;

        view.on("add", this.addArticle.bind(this));
        view.on("remove", this.removeArticle.bind(this));
        view.on("edit", this.editArticle.bind(this));
    };

    Controller.prototype.addArticle = function(data) {
        var article = this.model.addItem(data);
        this.view.addItem(data);
    };

    Controller.prototype.removeArticle = function(id) {
        this.model.removeItem(id);
        this.view.removeItem(id);
    };

    Controller.prototype.editArticle = function(obj) {
        var id = obj.id;
        var data = obj.data;

        var article = this.model.updateItem(id, data);

        this.view.editItem(article);
    }
    
})();