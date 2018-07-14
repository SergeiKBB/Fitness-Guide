var state = {
    title: "hello world",
    category: "running",
    img: "img5.jpg",
    text: "It is my first test"
};

var model = new Model(state);
model.on('change', state => save(state));

var view = new View();
var controller = new Controller(model, view);
