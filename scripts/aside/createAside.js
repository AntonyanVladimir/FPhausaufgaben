
function createAsideElement(aside){
    let asideElement = createSimpleElement(aside);
     let content = createSimpleElement(aside.content);
     content.append(
          createSimpleElement(aside.content.loginLabel), 
          createSimpleElement(aside.content.loginInput), createSimpleElement(aside.content.passwordLabel),
          createSimpleElement(aside.content.passwordInput)
          );
    let innerContainer = createSimpleElement(aside.content.innerDiv);
    innerContainer.append(createSimpleElement(aside.content.innerDiv.button));
    content.append(innerContainer, createSimpleElement(aside.content.horizontalLine));    
    
    let innerDiv11 =  createSimpleElement(aside.content.innerDiv1);
     let suche = createSimpleElement(aside.content.innerDiv1.sucheInput);
     innerDiv11.append(suche);
     content.append(innerDiv11);
     let geschachtelt = createSimpleElement(aside.content.geschachtelteDiv);
     let btnForGeschalchtelt = createSimpleElement(aside.content.geschachtelteDiv.button);
     geschachtelt.append(btnForGeschalchtelt);
     content.append(geschachtelt);

     let unList = createSimpleElement(aside.content.unorderedList);
        let li1 = createSimpleElement(aside.content.unorderedList.listItem1);
        let li1Link = createSimpleElement(aside.content.unorderedList.listItem1.link);
        li1.append(li1Link);
     unList.append(li1,
     createSimpleElement(aside.content.unorderedList.listItem2),
     createSimpleElement(aside.content.unorderedList.listItem3),
     createSimpleElement(aside.content.unorderedList.listItem4),
     createSimpleElement(aside.content.unorderedList.listItem5));
     


    
    
    content.append(unList);
    asideElement.append(content);
    return asideElement;
    
}



let asideReady = createAsideElement(aside);







