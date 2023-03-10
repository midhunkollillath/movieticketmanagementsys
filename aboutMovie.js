import axios from 'axios';

const url = window.location.href
const params = new URLSearchParams(document.location.search)
const id = params.get('id')


axios.get('http://localhost:3000/movies/'+id)
    .then(data => {
        console.log(data.data)
        showMovieDetails(data.data)
    })
    .catch(err => {
        console.log(err)
    })
axios.get('http://localhost:3000/screenings/') 
    .then(data=>{
        console.log(data.data)
        showMovieScreenings(data.data)
    })
    .catch(err=>{
        console.log(err)
    })

const movieImg = document.getElementById('movie-img')
const cast = document.getElementById('cast')
const director = document.getElementById('director')
const description = document.getElementById('description')
const duration = document.getElementById('duration')


const movieRoot = document.getElementById('movie-root')


const showMovieDetails = (movie) => {

    movieImg.src=movie.image
   cast.innerHTML=movie.cast
   director.innerHTML=movie.director
   duration.innerHTML=`${movie.duration}min`
   description.innerHTML=movie.summary


  
}

const screenings = document.getElementById('screening')


const showMovieScreenings =(screenDetail)=>{
   for(let i=0;i<screenDetail.length;i++){
    const screen = document.createElement('div')
    screen.classList.add('screening')
    const p= document.createElement('p')
    const a= document.createElement('a')

    p.innerHTML=screenDetail[i].startTime
    a.append()
    screen.append(p)
    screenings.append(screen)
    
   }
}