
function createAsideElement(aside){
    let asideElement = createElement(aside);
     let content = createElement(aside.content);
     content.append(
          createElement(aside.content.loginLabel), 
          createElement(aside.content.loginInput), createElement(aside.content.passwordLabel),
          createElement(aside.content.passwordInput)
          );
    let innerContainer = createElement(aside.content.innerDiv);
    innerContainer.append(createElement(aside.content.innerDiv.button));
    content.append(innerContainer, createElement(aside.content.horizontalLine));    
    
    let innerDiv11 =  createElement(aside.content.innerDiv1);
     let suche = createElement(aside.content.innerDiv1.sucheInput);
     innerDiv11.append(suche);
     content.append(innerDiv11);
     let geschachtelt = createElement(aside.content.geschachtelteDiv);
     let btnForGeschalchtelt = createElement(aside.content.geschachtelteDiv.button);
     geschachtelt.append(btnForGeschalchtelt);
     content.append(geschachtelt);

     let unList = createElement(aside.content.unorderedList);
    
     li5 = createElement(aside.content.unorderedList.listItem5);   
     li55 = document.createElement("li");
     li55.innerContainer = "meinTest ...";
     unList.append(createElement(aside.content.unorderedList.listItem1),
     createElement(aside.content.unorderedList.listItem2),
     createElement(aside.content.unorderedList.listItem3),
     createElement(aside.content.unorderedList.listItem4),
     createElement(aside.content.unorderedList.listItem5));
     


    
    
     content.append(unList);
    asideElement.append(content);
    return asideElement;
    
}



let asideReady = createAsideElement(aside);







