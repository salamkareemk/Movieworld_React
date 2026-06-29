import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";

function MovieGrid({
  title,
  subtitle,
  movies = [],
}) {
  return (
    <div className="movie-page">

      <div className="page-banner">

        <div className="banner-overlay">

          <h1>{title}</h1>

          <p>{subtitle}</p>

          <span>
            {movies.length} Movies Available
          </span>

        </div>

      </div>

      <div className="movie-grid-container">

        {movies.length > 0 ? (

          <div className="movies-grid">

            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}

          </div>

        ) : (

          <div className="empty-state">

            <h2>No Movies Found 🎬</h2>

            <p>
              Nothing to display here.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default MovieGrid;