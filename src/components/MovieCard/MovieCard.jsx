import { Link } from "react-router-dom";
import { FaHeart, FaEye, FaStar } from "react-icons/fa";
import "./MovieCard.css";

function MovieCard({ movie }) {

  // Prevent crashes
  if (!movie) return null;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="movie-link"
    >
      <div className="movie-card">

        <img
          src={poster}
          alt={movie.title || "Movie Poster"}
        />

        <div className="movie-overlay">

          <div className="movie-rating">

            <FaStar />

            <span>
              {movie.vote_average
                ? movie.vote_average.toFixed(1)
                : "N/A"}
            </span>

          </div>

          <div className="movie-actions">

            <FaHeart />

            <FaEye />

          </div>

        </div>

        <div className="movie-info">

          <h3>
            {movie.title || "Unknown Movie"}
          </h3>

          <p>
            {movie.release_date || "Unknown Date"}
          </p>

        </div>

      </div>
    </Link>
  );
}

export default MovieCard;