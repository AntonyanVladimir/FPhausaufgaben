function createSimpleElement(elementConfig) {
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


// function createElement(elementConfig){

//     let simpleElement = createSimpleElement(elementConfig);

//     for (let prop in elementConfig) {
//          if(prop!=='text'&&prop!=='tag'&&prop!=='attributes'){

//             let element = createSimpleElement(elementConfig[prop]);
//             simpleElement.append(element);
//         }
//       }

//       return simpleElement;
      
// }

// function createElement(elementConfig){

//     let simpleElement = createSimpleElement(elementConfig);

//     for (let prop in elementConfig) {
         
//         if(typeof elementConfig[prop] ==='object'){
//              createElement(elementConfig[prop]);
//          }
             
//             let element = createSimpleElement(elementConfig[prop]);
//             simpleElement.append(element);
//       }

//       return simpleElement;
      
// }