import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Popular from "./Components/Pages/Popular";
import Movie from "./Components/Movie";
import GenreMovies from "./Components/Pages/GenreMovies";
import TvShows from "./Components/Pages/TvShows";
import Search from "./Components/Pages/Search";
import UpComming from "./Components/Pages/UpComming";
import NavBar from "./Components/NavBar";
import Trailer from "./Components/Trailer";
import Fallback from "./Fallback";
import Watchlist from "./Components/Pages/WatchList";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import SignUp from "./SignUp";
import Profile from "./Components/Pages/Profile";
import Credits from "./Components/Credits";
import SongPlayer from "./SongPlayer";

function App() {
  return (
    <>
    <SongPlayer/>
    </>
  );
}

export default App;
