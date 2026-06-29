import "./Hero.css";
import { Link } from "react-router-dom";

function Hero({ movie }) {
  if (!movie) return null;

  const backdrop = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${backdrop})`,
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <span className="hero-tag">
            🔥 Trending Now
          </span>

          <h1>{movie.title}</h1>

          <p>{movie.overview}</p>

          <div className="hero-buttons">
            <Link to={`/movie/${movie.id}`}>
              <button className="watch-btn">
                View Details
              </button>
            </Link>

            <button className="details-btn">
              ⭐ {movie.vote_average.toFixed(1)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;