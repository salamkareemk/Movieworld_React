import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;