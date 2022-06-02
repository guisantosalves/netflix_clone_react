import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import './css/Row.css'
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");


  useEffect(() => {
    //make a request only once
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      //setting movies
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //option from react-youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = async (movie) =>{

    if(trailerUrl){
      setTrailerUrl('');
    }else{
      await movieTrailer(null, {tmdbId: movie?.id})
          .then((response)=>{

            const urlParams = new URLSearchParams(new URL(response).search) 
            console.log(urlParams.get("v"))
            setTrailerUrl(urlParams.get("v"))
          })
          .catch((error)=>console.log(error))
    }
    
  }

  //className={`row__poster ${isLargeRow && "row__posterLarge"}`}
  //do the evaluete from right to left returning "row__posterLarge" 
  //if the isLargeRow be true.
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie, index) => (
          <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div> 
  );
}

export default Row;
