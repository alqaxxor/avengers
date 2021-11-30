var newMoviesList = movies.slice(0, 20);

var elCardPoster = document.querySelector("#card-poster")

for (var i = 0; i < newMoviesList.length; i++) {

    var new_Card = document.createElement("div")
    
    new_Card.setAttribute("class", "w-70 ")
    var new_img = document.createElement("img")
    new_img.setAttribute("src", `http://i3.ytimg.com/vi/${newMoviesList[i].ytid}/maxresdefault.jpg`);

    new_img.setAttribute("class", "card-img-top");

    var newh5 = document.createElement("h5");
    newh5.setAttribute("class", "card-title");
    newh5.textContent = newMoviesList[i].Title;

    var newh3 = document.createElement("h3");
    newh3.textContent = "released:"+" "+ newMoviesList[i].movie_year; 

    var newP = document.querySelector("P");
    newP.textContent = "reyting:"+" "+ newMoviesList[i].imdb_rating;

    var newlink = document.createElement("a");
    newlink.setAttribute("class", "yout-link m-2");
    newlink.setAttribute("href", `https://www.youtube.com/watch?v=${newMoviesList[i].ytid} `);
    newlink.setAttribute("target", "blank")
    newlink.textContent = "watch trailer";
    

    var btnInfo = document.createElement("button");
    btnInfo.setAttribute("class", "btn btn-outline-success m-1");
    btnInfo.textContent = "More info";

    var btnBookmark = document.createElement("button");
    btnBookmark.setAttribute("class", "btn btn-outline-success m-1");
    btnBookmark.textContent = "Bookmark"; 

    elCardPoster.appendChild(new_Card);
    new_Card.appendChild(new_img);
    new_Card.appendChild(newh5);
    new_Card.appendChild(newh3);
    new_Card.appendChild(newP);
    new_Card.appendChild(newlink);
    new_Card.appendChild(btnInfo);
    new_Card.appendChild(btnBookmark);
}



