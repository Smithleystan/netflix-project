import React, { useEffect, useState } from 'react'
import axios from './axios'
import './App.css'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const baseURL = "https://image.tmdb.org/t/p/original/"




function Row({title, fetchUrl, isLargeRow}) {
const [movies, setMovies]= useState([])
const [trailerUrl, setTrailerUrl] = useState("")

// A snippet of code which roms bases on a specific condition/variable

useEffect(()=>{
    // if [] run once when the row loads, and don't run again
const fetchData = async () => {
  //ici on récupère la base de l'URL de axios.js baseURL:"https://api.themoviedb.org/3" et on rajoute fetchUrl de la page request.js/
  //exemple   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`/
    const request = await axios.get(fetchUrl);
  //récupération des donnée de l'API
    setMovies(request.data.results);
    return request
    
}
fetchData()



},[fetchUrl]);

console.log(movies)

// const opts={
//   height:"390",
//   width:"100%",
//   playersVars:{autoplay:1}
// }

// const handleClick = (movies)=>{
//   if (trailerUrl) {
//     setTrailerUrl("")
//   }else{
//     movieTrailer(movies?.name || "")
//     .then(url=>{
//       const urlParams = (new URLSearchParams(new URL(url)).search)
//       setTrailerUrl(urlParams.get(""))
//     })
//     .catch((error)=>console.log(error))
//   }
// }
// handleClick()


  return (
    <div className='row'>
        <h2 className='title'>{title}</h2>

        <div className={`row__posters `}>
        {/*several row __poster(s)*/}

        {movies.map((movie)=><img 
        key={movie.id}
        // onClick={(handleClick(movies))}
        //si isLargeRow true alors on ajoute en plus a cette elemente précise la className 'row__posterLarge
        className={`row__poster ${isLargeRow && 'row___posterLarge'}`  }
        //si isLargeRow alors on choisi comme src..
        src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>)}
        </div>
        {/* <div> {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div> */}
    </div>
  )
}

export default Row 