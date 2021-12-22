import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';

function App() {
  const baseUri = "https://api.themoviedb.org/3/search/movie";
  const apiKey = "40b3803735afda675d9d9ea1398ce89e";
  //{{baseUri}}/search/movie?api_key={{apiKey}}&query=parasite
  const [movies, getMovies] = useState([]);
  const getMovieList = async (search = 'titanic') => {
    const movieList = await axios.get(`${baseUri}?api_key=${apiKey}&query=${search}`);
    getMovies(movieList.data.results);
  }
  useEffect(() => {
    getMovieList();
  }, []);
  return (
    <div className="App text-center">
      <header className="mb-3">
        <Navbar />
      </header>
      <main className="container">
        <MovieList movies={ movies }/>
      </main>
    </div>
  );
}

export default App;
