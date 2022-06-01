import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";

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

  return (
    <header>
      {/* tittle */}
      {/* div -> 2 button */}
      {/* description */}
    </header>
  );
}

export default Banner;
