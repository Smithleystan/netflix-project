import React from 'react'
import Row from '../src/Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'




const App=()=> {

  return (
    //ici on effectue un props vers la page Row.js/
    <div className='App'>
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentairies Movies" fetchUrl={requests.fetchDocumantaries} />
    </div>
  )
}

export default App