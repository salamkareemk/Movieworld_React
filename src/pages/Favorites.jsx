import { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";

function Favorites() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    setMovies(favorites);

  }, []);

  return (

    <MovieGrid

      title="❤️ Favorite Movies"

      subtitle="Movies you have liked"

      movies={movies}

    />

  );
}

export default Favorites;