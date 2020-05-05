

document.getElementById('submitArticle').addEventListener('click', ()=>{
    
    var inputs = document.getElementsByTagName("input");
    for(let x of inputs)
    console.log(x.value);
 
   
});


document.getElementById('ueberschrift').value = articles[0].header.text;
document.getElementById('datum').value = articles[0].content.info.text;
document.getElementById('text').value = articles[0].content.description.text;
