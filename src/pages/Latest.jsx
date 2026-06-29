import { useEffect, useState } from "react";
import { getLatestMovies } from "../services/tmdbApi";
import MovieGrid from "../components/MovieGrid/MovieGrid";

function Latest() {

  const [movies,setMovies]=useState([]);

  useEffect(()=>{

    async function fetchMovies(){

      const data=await getLatestMovies();

      setMovies(data);

    }

    fetchMovies();

  },[]);

  return(

    <MovieGrid

      title="🎬 Now Playing"

      subtitle="Latest movies in theatres"

      movies={movies}

    />

  );

}

export default Latest;