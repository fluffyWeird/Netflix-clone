import React, { useState, useEffect } from 'react';

import axios from 'axios';
import './Row.css';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (err) {
        setError(err);
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
      return;
    }

    try {
      const name = movie?.title || movie?.name || movie?.original_name || '';
      const url = await movieTrailer(name);
      if (!url) return;
      
      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get('v'));
    } catch (err) {
      console.error("Error fetching trailer:", err);
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },  
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      
      {loading && <div className="row__loading">Loading...</div>}
      {error && <div className="row__error">Error loading movies</div>}

      <div className="row_posters">
        {movies.map(movie => (
          <img 
            onClick={() => handleClick(movie)}
            key={movie.id}
            className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
            src={`https://image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} 
            alt={movie.name || movie.title || "Movie"}
            loading="lazy"
          />
        ))}
      </div>

      {trailerUrl && (
        <div className="row__trailer">
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default React.memo(Row);