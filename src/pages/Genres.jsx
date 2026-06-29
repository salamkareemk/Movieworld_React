import { useEffect, useState } from "react";
import {
  getGenres,
  getMoviesByGenre,
} from "../services/tmdbApi";

import MovieCard from "../components/MovieCard/MovieCard";

import "../styles/Genres.css";

function Genres() {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchGenres() {
      const data = await getGenres();

      setGenres(data);

      if (data.length > 0) {
        setSelectedGenre(data[0]);
      }
    }

    fetchGenres();
  }, []);

  useEffect(() => {
    if (!selectedGenre) return;

    async function fetchMovies() {
      setLoading(true);

      const data = await getMoviesByGenre(
        selectedGenre.id
      );

      setMovies(data);

      setLoading(false);
    }

    fetchMovies();
  }, [selectedGenre]);

  return (
    <div className="genre-page">

      {/* HERO */}

      <section className="genre-hero">

        <div className="genre-overlay">

          <span className="genre-badge">
            🎬 Movie Collection
          </span>

          <h1>
            Browse Movies by Genre
          </h1>

          <p>
            Discover thousands of movies from every
            category. Select your favorite genre and
            explore the collection.
          </p>

        </div>

      </section>

      {/* GENRE PILLS */}

      <section className="genre-selector">

        <h2>Select Genre</h2>

        <div className="genre-scroll">

  <div className="genre-buttons">

    {genres.map((genre) => (

      <button
        key={genre.id}
        className={`genre-btn ${
          selectedGenre?.id === genre.id
            ? "active"
            : ""
        }`}
        onClick={() =>
          setSelectedGenre(genre)
        }
      >
        {genre.name}
      </button>

    ))}

  </div>

</div>

      </section>

      {/* INFO */}

      <section className="genre-info">

        <div className="info-card">

          <h3>
            {selectedGenre?.name}
          </h3>

          <span>Selected Genre</span>

        </div>

        <div className="info-card">

          <h3>{movies.length}</h3>

          <span>Movies Found</span>

        </div>

      </section>

      {/* MOVIES */}

      <section className="movies-section">

        <h2>
          🎥 {selectedGenre?.name} Movies
        </h2>

        {loading ? (

          <div className="loading">

            Loading Movies...

          </div>

        ) : (

          <div className="movies-grid">

            {movies.map((movie) => (

              <MovieCard
                key={movie.id}
                movie={movie}
              />

            ))}

          </div>

        )}

      </section>

    </div>
  );
}

export default Genres;