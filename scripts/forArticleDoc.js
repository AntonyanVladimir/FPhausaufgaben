if (articles && Array.isArray(articles)) {
    articles.forEach(function(article) {
        let element = createArticleElement(article);
        let destination = document.getElementById('articleDiv');
        addElements([element], destination);
    });
}


let destinationAsideIndex = document.getElementById('articleDiv');
addElements([asideReady], destinationAsideIndex);

