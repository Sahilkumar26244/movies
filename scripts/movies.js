// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

document.getElementById("wallet").innerText=localStorage.getItem("amount");

let movies_div = document.getElementById("movies");
let id;

async function searchMovies(){
  try {
    const query = document.getElementById("search").value;

    const res = await fetch(`https://www.omdbapi.com/?apikey=3f5d0d7a&s=${query}`);

    const data = await res.json();

    const movies= data.Search;

    appendMovies(movies);

    console.log(movies)
  }catch(err){
    console.log(err)
  }
}

function appendMovies(data) {

  movies_div.innerHTML = null;
  data.forEach(function(el){
    let image = document.createElement("img");
    image.src = el.Poster;
    let title = document.createElement("p");
    title.innerText = el.Title;
    let btn = document.createElement("button");
    btn.innerText="Book Now";
    btn.className="book_now";

    let movieDiv = document.createElement("div");
    movieDiv.append(image,title,btn);

    

    document.querySelector("#movies").append(movieDiv);
  })
}

async function main() {
  let data = await searchMovies();

  if(data==undefined)
  {
    return false;
  }
  appendMovies(data);
}

function debounce(func,delay){
  if(id){
    clearTimeout(id);
  }
  id = setTimeout(function(){
    func();
  },delay)
}