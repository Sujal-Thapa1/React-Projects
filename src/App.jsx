import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieCard from "./Components/MovieCard";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourites />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
