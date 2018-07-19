var state = undefined;

var list = document.getElementById("management__list");
var selectCategory = document.querySelectorAll(".select-category");
Array.prototype.slice.call(selectCategory).forEach(element => createSelectCategory(element));

var model = new Model(state || undefined);


var view = new View();
var controller = new Controller(model, view);

view.showAllArticles();


