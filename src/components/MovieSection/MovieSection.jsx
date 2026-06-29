import MovieCard from "../MovieCard/MovieCard";
import "./MovieSection.css";

function MovieSection({ title, movies = [] }) {
  return (
    <section className="movie-section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>

      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        ) : (
          <p className="no-movies">
            No movies available.
          </p>
        )}
      </div>
    </section>
  );
}

export default MovieSection;