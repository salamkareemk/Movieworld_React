import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";

function Watched() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const watched =
      JSON.parse(localStorage.getItem("watched")) || [];

    setMovies(watched);

  }, []);

  return (

    <MovieGrid

      title="👁 Watched Movies"

      subtitle="Movies you have already watched"

      movies={movies}

    />

  );
}

export default Watched;