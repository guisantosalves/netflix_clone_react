import React, { useState, useEffect } from "react";
import axios from "../axios";
import './css/Row.css'


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

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
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
