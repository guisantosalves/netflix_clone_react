import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "./css/Banner.css";

function Banner({}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    /*asynchronous operations, on the other hand, 
    you can move to another task before the 
    previous one finishes */
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
        //get randomly and setting in the movies
      );

      return request;
    }

    fetchData();
  }, []);

  console.log(movies);

  //im gonna use a truncate function to determinate a quantity of character
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  // ?. -> verifica se é nulo ou nao se for nulo nao buga tudo
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* tittle */}
        <h1 className="banner__title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>

        {/* div -> 2 button */}
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        {/* description */}
        <h1 className="banner__description">
          {truncate(movies?.overview, 150)}
        </h1>
      </div>

      {/* empty div to effect */}
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
