import { NavLink } from "react-router-dom";
import { FaFilm, FaHeart, FaEye, FaFire, FaTags, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <FaFilm className="logo-icon" />
        <h2>Movieworld</h2>
      </div>

      <nav className="navbar-links">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>

        <NavLink to="/latest" className="nav-item">
          <FaFire />
          <span>Latest</span>
        </NavLink>

        <NavLink to="/genres" className="nav-item">
          <FaTags />
          <span>Genres</span>
        </NavLink>

        <NavLink to="/favorites" className="nav-item">
          <FaHeart />
          <span>Favorites</span>
        </NavLink>

        <NavLink to="/watched" className="nav-item">
          <FaEye />
          <span>Watched</span>
        </NavLink>
      </nav>

      <div className="navbar-search">
        <FaSearch />
        <input
          type="text"
          placeholder="Search movies..."
          disabled
        />
      </div>
    </header>
  );
}

export default Navbar;