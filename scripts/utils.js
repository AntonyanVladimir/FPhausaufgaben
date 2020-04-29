function createElement(elementConfig) {
    let element = document.createElement(elementConfig.tag);
    if (elementConfig.attributes) {
        for (let [key, value] of Object.entries(elementConfig.attributes)) {
            element.setAttribute(key, value);
        }
    }
    if (elementConfig.text) {
        element.innerText = elementConfig.text
    }
    return element;
}




function addElements(elements, dest) {
    dest.append(...elements);
}

