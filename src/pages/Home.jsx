import { useEffect, useState } from "react";

import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  searchMovies,
} from "../services/tmdbApi";

import Hero from "../components/Hero/Hero";
import SearchBar from "../components/SearchBar/SearchBar";
import MovieSection from "../components/MovieSection/MovieSection";
import Loader from "../components/Loader/Loader";
import "../styles/Genres.css";

import "../styles/Home.css";

function Home() {
  // ===========================
  // State
  // ===========================

  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);

  const [searchResults, setSearchResults] = useState([]);

  const [trendingMovies, setTrendingMovies] = useState([]);

  const [popularMovies, setPopularMovies] = useState([]);

  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const [upcomingMovies, setUpcomingMovies] = useState([]);

  // ===========================
  // Fetch Movies
  // ===========================

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        // Search
        if (searchTerm.trim() !== "") {
          const results = await searchMovies(searchTerm);

          setSearchResults(results);
        }

        // Home
        else {
          const [
            trending,
            popular,
            topRated,
            upcoming,
          ] = await Promise.all([
            getTrendingMovies(),
            getPopularMovies(),
            getTopRatedMovies(),
            getUpcomingMovies(),
          ]);

          setTrendingMovies(trending);

          setPopularMovies(popular);

          setTopRatedMovies(topRated);

          setUpcomingMovies(upcoming);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }

      setLoading(false);
    };

    fetchMovies();
  }, [searchTerm]);

  // ===========================
  // Hero Movie
  // ===========================

  const heroMovie =
    Array.isArray(trendingMovies) && trendingMovies.length > 0
      ? trendingMovies[0]
      : null;

  // ===========================
  // Render
  // ===========================

  return (
    <div className="home-container">

      {/* Hero */}

      {!searchTerm && (
        <Hero movie={heroMovie} />
      )}

      {/* Search */}

      <div className="home-header">

        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

      </div>

      {/* Loader */}

      {loading ? (

        <Loader />

      ) : (

        <>
          {/* Search Results */}

          {searchTerm ? (

            <MovieSection
              title={`🔍 Search Results (${searchResults.length})`}
              movies={searchResults}
            />

          ) : (

            <>
              <MovieSection
                title="🔥 Trending Movies"
                movies={trendingMovies}
              />

              <MovieSection
                title="⭐ Popular Movies"
                movies={popularMovies}
              />

              <MovieSection
                title="🏆 Top Rated Movies"
                movies={topRatedMovies}
              />

              <MovieSection
                title="📅 Upcoming Movies"
                movies={upcomingMovies}
              />
            </>
          )}
        </>
      )}

    </div>
  );
}

export default Home;