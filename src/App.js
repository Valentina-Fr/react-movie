import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import Modal from './components/Modal';
import 'bootstrap';

function App() {
  const baseUri = "https://api.themoviedb.org/3/search/movie";

  const [movies, getMovies] = useState([]);
  const [movie, getMovie] = useState([]);

  const getMovieList = async (search) => {
    if(search !== undefined && search !== "") {
      const movieList = await axios.get(`${baseUri}?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`);
      getMovies(movieList.data.results);
    } else getMovies([]);
  };

  const getMovieDetails = async(id) => {
    const film = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`);
    getMovie(film.data);
  }

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className="App text-center">
      <header>
        <Navbar onSearchChange={ getMovieList }/>
      </header>
      <main className="container my-3">
        <MovieList movies={ movies } detail={ getMovieDetails } />
        <Modal film={ movie }/>
      </main>
    </div>
  );
}

export default App;
