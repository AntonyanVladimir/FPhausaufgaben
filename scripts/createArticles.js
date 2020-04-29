function createArticleElement(article) {
    let element = createElement(article);
    let header = createElement(article.header);
    let content = createElement(article.content);

   let divSocialMedia = createDivSocial(article.content.divSocial);
   let datumInfo = createElement(article.content.info);
    content.append(createElement(article.content.image), 
            createElement(article.content.description), datumInfo, divSocialMedia );

    
    element.append(header, content);
    return element;
}



function createDivSocial(divSocialConfig){
    let container = createElement(divSocialConfig);
    let linkFacebook = createElement(divSocialConfig.linkFb);
    let linkTw = createElement(divSocialConfig.linkTwitter);
    let linkEm = createElement(divSocialConfig.linkEmail);
    container.append(linkFacebook, linkTw, linkEm);
    return container;
}