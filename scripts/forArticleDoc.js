let destinationAside = document.getElementById('articleDiv');
addElements([asideReady], destinationAside);

var articleTags = [];

if (articles && Array.isArray(articles)) {
    articles.forEach(function(article) {
        let element = createArticleElement(article);
        createTagCloud(article);
        let destination = document.getElementById('articlesContainer');
        addElements([element], destination);
    });
}


let tagCloud = {
    tag:'span',
    attribute:{
        class: "tag-1",
        

    },
    text:"Semantik"
}


{/* <div class="col-12">
						<span class="tag-1">Semantik</span>
						<a class="tag-5" href="tagliste.html">HTML5</a>
						<span class="tag-1">Element</span>
						<span class="tag-3">Dokument</span>
						<span class="tag-2">HTTP</span>
					</div> */}


function createTagCloud(article){
 article.forEach(function(articleProp){
     articleTags.push(articleProp.tag);
 });
}