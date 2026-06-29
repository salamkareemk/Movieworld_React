import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Latest from "./pages/Latest";
import Genres from "./pages/Genres";
import Favorites from "./pages/Favorites";
import Watched from "./pages/Watched";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest" element={<Latest />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/watched" element={<Watched />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;