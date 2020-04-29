function createArticleElement(article) {
    let element = createElement(article);
    let header = createElement(article.header);
    let content = createElement(article.content);

   let divSocialMedia = createDivSocial(article.content.divSocial);
    
    content.append(createElement(article.content.image), 
            createElement(article.content.description), divSocialMedia);


    element.append(header, content);
    return element;
}

if (articles && Array.isArray(articles)) {
    articles.forEach(function(article) {
        let element = createArticleElement(article);
        let destination = document.getElementById('mein111');
        addElements([element], destination);
    });
}

function createDivSocial(divSocialConfig){
    let container = createElement(divSocialConfig);
    let linkFacebook = createElement(divSocialConfig.linkFb);
    let linkTw = createElement(divSocialConfig.linkTwitter);
    let linkEm = createElement(divSocialConfig.linkEmail);
    container.append(linkFacebook, linkTw, linkEm);
    return container;
}