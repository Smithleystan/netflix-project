import React, {useEffect, useState} from 'react'
import axios from './axios'
import requests from './requests'
import './banner.css'

function Banner() {

    const [movie, setMovies] = useState()
    useEffect(()=>{
        const fetchData=async ()=>{
            //ici on selectionne directement sur request fetchNetflixOriginals/
            const request =await axios.get(requests.fetchNetflixOriginals)
            //ici on fait on sorte de selectionner une image au hasard a
            //avec un numéro ID au hasard avec Math.random(). 
            //le numéro au hasard ne doit pas 
            //depasser la taille de la base donnée.
            //Math.floor permet d'arrondir le nombre trouvé
            setMovies(request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]
        )
        return request


        }
        fetchData()
    },[])

    
    // permet de reduire la taille de text si elle dépasse un 
    // un certain nombre de caractere et de rajouter "..."
    const truncate =(str, n )=>{
        return(
            str?.length > n? str.substr(0, n - 1) + "..." : str
        )
    }
    
  return (
    <header 
    className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
        , 
        backgroundPosition:"center center",
        
    }}>
        
    <div className='banner__contents'>
    <h1 className='banner__title'>
     {movie?.title || movie?.name || movie?.original_name}   
    </h1>


    <div className='"banner__buttons'>
        <button className='banner__button'>Play</button>
        <button className='banner__button'>My list</button>
    </div>
    {/* nombre de caractere a ne pas depasser. par exemple ici 150  */}
    <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
    
    
    </div>

    <div className='banner--fadeBottom'></div>
    </header>
  )
}

export default Banner