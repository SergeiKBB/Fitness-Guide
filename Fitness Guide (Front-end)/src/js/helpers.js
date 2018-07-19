(function () {
    function createElement(tag, props, styles, child) {
        var element = document.createElement(tag);

        Object.keys(props).forEach(key => {
            element.setAttribute(key, props[key]);
        });

        if (styles) {
            Object.keys(styles).forEach(key => element.style[key] = styles[key]);
        }

        if (typeof child === 'string') {
            element.innerHTML = child;
        } else if (child instanceof Array) {
            child.forEach(el => {
                element.appendChild(el);
            })
        }

        return element;
    };

    function formatDate(date) {
        var result = "";
        var newDate = new Date(date);

        result += newDate.getDate() + "-0" + (newDate.getMonth() + 1) + "-" + newDate.getFullYear();

        return result;
    };

    function showMessage(message) {
        var createArticleMessage = createElement("div", { class: "message" }, "", message);
        document.body.appendChild(createArticleMessage);
        setTimeout(function () {
            createArticleMessage.style.top = "-" + getComputedStyle(createArticleMessage).height;
        }, 2000);
    };

    window._createElement = createElement;
    window.formatDate = formatDate;
    window.showMessage = showMessage;
})();