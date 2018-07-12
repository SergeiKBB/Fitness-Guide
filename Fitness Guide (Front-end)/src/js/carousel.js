(function () {
    function moveCarousel() {
        var items = document.querySelectorAll(".carousel__item-wrap");
        var prev = document.getElementById("carousel__prev");
        var next = document.getElementById("carousel__next");
        var index;
        if (prev) {
            prev.addEventListener("click", function () {
                index = findIndex(items, "carousel__item-active");

                if (index == 0) {
                    items[index].classList.remove("carousel__item-active");
                    items[items.length - 1].classList.add("carousel__item-active");
                    items[items.length - 1].style.transform = "rotateY(-90deg)";

                    setTimeout(function () {
                        items[items.length - 1].style.transform = "rotateY(0deg)";
                    }, 100);
                } else {
                    items[index].classList.remove("carousel__item-active");
                    items[index - 1].classList.add("carousel__item-active");
                    items[index - 1].style.transform = "rotateY(-90deg)";

                    setTimeout(function () {
                        items[index - 1].style.transform = "rotateY(0deg)";
                    }, 100);
                }
            });
        }
        if (next) {
            next.addEventListener("click", function () {
                index = findIndex(items, "carousel__item-active");

                if (index == items.length - 1) {
                    items[index].classList.remove("carousel__item-active");
                    items[0].classList.add("carousel__item-active");
                    items[0].style.transform = "rotateY(90deg)";

                    setTimeout(function () {
                        items[0].style.transform = "rotateY(0deg)";
                    }, 100);
                } else {
                    items[index].classList.remove("carousel__item-active");
                    items[index + 1].classList.add("carousel__item-active");
                    items[index + 1].style.transform = "rotateY(90deg)";

                    setTimeout(function () {
                        items[index + 1].style.transform = "rotateY(0deg)";
                    }, 100);
                }
            });
        }



        function findIndex(arr, className, startPosition) {
            if (startPosition) {
                if (startPosition > 0) {
                    for (var i = startPosition; i < arr.length - startPosition; i++) {
                        if (arr[i].classList.contains(className)) {
                            return i;
                        }
                    }
                } else {
                    for (var i = arr.length + startPosition; i > 0; i--) {
                        if (arr[i].classList.contains(className)) {
                            return i;
                        }
                    }

                }
            } else {
                startPosition = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].classList.contains(className)) {
                        return i;
                    }
                }
            }

            return -1;
        }
    }

    function createItem(obj) {
        var node = '<div class="carousel__item col-l-4 col-t-6 col-m-12">\
                    <img src="'+ obj.img + '" alt="" class="carousel__img">\
                    <div class="carousel__wrap">\
                        <a href="" class="carousel__category carousel__category-' + obj.category + '">' + obj.category[0].toUpperCase() + obj.category.substring(1) + '</a>\
                        <a href="" class="carousel__title">' + obj.title + ' </a>\
                     </div>\
                     </div>';
        return node;
    }

    function createWrap(items, bool) {
        var element = document.createElement("div");
        if (bool) {
            element.className = "carousel__item-wrap carousel__item-active";
        } else {
            element.className = "carousel__item-wrap";
        }
        items.forEach(el => {
            element.innerHTML += createItem(el);
        });
        return element;
    }

    function create(father, size, arrItems) {
        var number = 12 / size;
        for (var i = 0; i < number; i++) {
            if (i == 0) {
                father.appendChild(createWrap(arrItems.slice(i, i + size), true));
            } else {
                father.appendChild(createWrap(arrItems.slice(i, i + size)));
            }
        }
    }


    var obj1 = {
        img: "img/running2.jpg",
        category: "running",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj2 = {
        img: "img/swimming2.jpg",
        category: "swimming",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj3 = {
        img: "img/crossfit2.jpg",
        category: "crossfit",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj4 = {
        img: "img/running2.jpg",
        category: "running",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj5 = {
        img: "img/swimming2.jpg",
        category: "swimming",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj6 = {
        img: "img/crossfit2.jpg",
        category: "crossfit",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj7 = {
        img: "img/running2.jpg",
        category: "running",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj8 = {
        img: "img/swimming2.jpg",
        category: "swimming",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj9 = {
        img: "img/crossfit2.jpg",
        category: "crossfit",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj10 = {
        img: "img/running2.jpg",
        category: "running",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj11 = {
        img: "img/swimming2.jpg",
        category: "swimming",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }
    var obj12 = {
        img: "img/crossfit2.jpg",
        category: "crossfit",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    }


    var allItems = [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12];

    var father = window.document.getElementById("carousel__inner");
    if (father) {
        window.onload = function () {
            if (innerWidth < 426) {
                father.innerHTML = "";
                create(father, 1, allItems);
                moveCarousel();
            } else if (innerWidth < 769) {
                father.innerHTML = "";
                create(father, 2, allItems);
                moveCarousel();
            } else {
                father.innerHTML = "";
                create(father, 3, allItems);
                moveCarousel();
            }
        }

        window.addEventListener("resize", function () {
            if (innerWidth < 426) {
                father.innerHTML = "";
                create(father, 1, allItems);
                moveCarousel();
            } else if (innerWidth < 769) {
                father.innerHTML = "";
                create(father, 2, allItems);
                moveCarousel();
            } else {
                father.innerHTML = "";
                create(father, 3, allItems);
                moveCarousel();
            }
        });
    }
})();