function Model() {
    this.item;
    EventEmitter.apply(this);
}

(function () {
    Model.prototype = Object.create(EventEmitter.prototype);
    Model.prototype.constructor = EventEmitter;

    Model.prototype.getAllArticles = function () {
        return
    };

    Model.prototype.addItem = function (item) {
        console.log(item);
        return addImage(item);
    };

    Model.prototype.updateItem = function (data) {
        return editRequest(data);
    };

    Model.prototype.removeItem = function (id) {
        
        return removeRequest(id);
    };

    Model.prototype.addImage = function(file) {

    }
})(); 