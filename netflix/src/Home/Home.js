import React from 'react'
import Header from '../Header/Header'
import Banner from '../Banner'
import Footer from '../Footer/Footer'
import Row from '../Row.js'
import requests from '../requests';


function Home() {
  return (
    <div>
        <Header />
        <Banner />
    <Row title="NETFLIX ORIGINASLS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
     <Row title="Trending " fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Footer />


        
    </div>
  )
}

export default Home