import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaHeart, FaEye, FaStar, FaPlay } from "react-icons/fa";

import { getMovieDetails } from "../services/tmdbApi";

import "../styles/MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="details-page">
        <h2 style={{ textAlign: "center", padding: "100px" }}>
          Loading Movie...
        </h2>
      </div>
    );
  }

  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  const addToFavorites = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.find((m) => m.id === movie.id)) {
      favorites.push(movie);

      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      );

      alert("Added to Favorites ❤️");
    }
  };

  const addToWatched = () => {
    const watched =
      JSON.parse(localStorage.getItem("watched")) || [];

    if (!watched.find((m) => m.id === movie.id)) {
      watched.push(movie);

      localStorage.setItem(
        "watched",
        JSON.stringify(watched)
      );

      alert("Added to Watched ✅");
    }
  };

  return (
    <div className="details-page">

      <section
        className="backdrop"
        style={{
          backgroundImage: `url(${backdrop})`,
        }}
      >

        <div className="backdrop-overlay">

          <div className="details-container">

            <img
              src={poster}
              alt={movie.title}
              className="poster"
            />

            <div className="movie-content">

              <h1>{movie.title}</h1>

              <div className="movie-meta">

                <span className="badge">
                  <FaStar /> {movie.vote_average.toFixed(1)}
                </span>

                <span className="badge">
                  📅 {movie.release_date}
                </span>

                <span className="badge">
                  ⏱ {movie.runtime} min
                </span>

              </div>

              <div className="genre-list">

                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="genre"
                  >
                    {genre.name}
                  </span>
                ))}

              </div>

              <p className="overview">
                {movie.overview}
              </p>

              <div className="action-buttons">

                <button
                  className="favorite-btn"
                  onClick={addToFavorites}
                >
                  <FaHeart /> Favorite
                </button>

                <button
                  className="watch-btn"
                  onClick={addToWatched}
                >
                  <FaEye /> Watched
                </button>

                <button className="trailer-btn">
                  <FaPlay /> Trailer
                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="info-section">

        <h2 style={{ marginBottom: "30px" }}>
          Movie Information
        </h2>

        <div className="info-grid">

          <div className="info-card">
            <h4>Language</h4>
            <p>{movie.original_language.toUpperCase()}</p>
          </div>

          <div className="info-card">
            <h4>Status</h4>
            <p>{movie.status}</p>
          </div>

          <div className="info-card">
            <h4>Popularity</h4>
            <p>{Math.round(movie.popularity)}</p>
          </div>

          <div className="info-card">
            <h4>Vote Count</h4>
            <p>{movie.vote_count}</p>
          </div>

          <div className="info-card">
            <h4>Budget</h4>
            <p>
              $
              {movie.budget.toLocaleString()}
            </p>
          </div>

          <div className="info-card">
            <h4>Revenue</h4>
            <p>
              $
              {movie.revenue.toLocaleString()}
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default MovieDetails;