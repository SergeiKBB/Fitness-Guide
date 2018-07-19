function Controller(model, view) {
    this.model = model;
    this.view = view;

    view.on("add", this.addArticle.bind(this));
    view.on("remove", this.removeArticle.bind(this));
    view.on("edit", this.editArticle.bind(this));

    model.on("change", this.changeView.bind(this));
};

(function() {
    

    Controller.prototype.addArticle = function(data) {
        var result = this.model.addItem(data.file);
        console.log(result);
        this.view.addItem(data, result);
    };

    Controller.prototype.removeArticle = function(id) {
        var result = this.model.removeItem(id);
        this.view.removeItem(id, result);
    };

    Controller.prototype.editArticle = function(data) {
        var result = this.model.updateItem(data);

        this.view.editItem(data, result);
    }

    Controller.prototype.changeView = function(id) {
        this.view.removeItem(id);
    }
    
})();