if (articles && Array.isArray(articles)) {
    articles.forEach(function(article) {
        let element = createArticleElement(article);
        let destination = document.getElementById('mein222');
        addElements([element], destination);
    });
}


let destinationAsideIndex = document.getElementById('mein222');
addElements([asideReady], destinationAsideIndex);

