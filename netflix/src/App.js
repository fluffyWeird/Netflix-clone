

import Banner from './Banner';
import Header from './Header/Header';
import requests from './requests';
import Footer from './Footer/Footer';                                 




import Row from './Row';
function App() {
  return (
    <div className="App">
      <Header />
     
      <Banner />
    
     <Row title="NETFLIX ORIGINASLS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
     <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
      
    </div>
  );
}

export default App;

