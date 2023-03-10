import Controller from "../controller/indexController";
const controller = new Controller();

const movieRoot = document.getElementById('movie-root')

function init(){
    controller.getMoviesFromBackend()
    .then(data=>{
        console.log(data)
        showMovies(data)
    })
    .catch(err=>{
        console.log(err)
    })
}


const showMovies = (movies) => {
    if(movies){
        movies.forEach((movie, index) => {
            const movieDiv = document.createElement('div')
            movieDiv.classList.add('movies')
            movieDiv.innerHTML = `
            <a href="aboutMovie.html?id=${movie._id}"> <img src="${movie.image}" alt="movie"> </a>
            <p class="moviename" id="moviename">${movie.name}</p>
            <p class="description" id="description">${movie.summary}</p>
            <p class="duration" id="duration">${movie.duration}min</p>
            `
            movieRoot.append(movieDiv)
        })
    }
}
showMovies();
init();