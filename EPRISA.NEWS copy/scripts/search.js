const search = () => {
    const searchbox = document.getElementById("search-item").value.topUpperCase();
    const newsitems = document.getElementById("news-content")
    const news = document.querySelectorAll(".main-container-left")
    const pnews = newsitems.getElementsByTagName("a")

    for(var i=0; i< pnews.length; i++){
        let match = news[i].getElementsByTagName('a')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                news[i].style.display = "";
            } else {
                news[i].style.display = "none";
            }
        }
    }
}