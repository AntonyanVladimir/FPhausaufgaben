function createArticleElement(article) {
    let element = createSimpleElement(article);
    let header = createSimpleElement(article.header);
    let content = createSimpleElement(article.content);

   let divSocialMedia = createDivSocial(article.content.divSocial);
   let datumInfo = createSimpleElement(article.content.info);
    content.append(createSimpleElement(article.content.image), 
            createSimpleElement(article.content.description), datumInfo, divSocialMedia );

    
    element.append(header, content);
    return element;
}



function createDivSocial(divSocialConfig){
    let container = createSimpleElement(divSocialConfig);
    let linkFacebook = createSimpleElement(divSocialConfig.linkFb);
    let linkTw = createSimpleElement(divSocialConfig.linkTwitter);
    let linkEm = createSimpleElement(divSocialConfig.linkEmail);
    container.append(linkFacebook, linkTw, linkEm);
    return container;
}


// function createArticleElement(article){
  

//     let articleReady = createElement(article);

//     return articleReady;
// }