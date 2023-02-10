import React, { useState, useEffect, useContext } from "react";
import Navbar from "./components/navigation/Navbar";
import Home from "./components/static/Home";
import NewMovie from "./components/static/NewMovie";
import MovieList from "./components/static/MovieList";
import ReviewsContainer from './components/addition/ReviewsContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MoviesContext } from "./components/context/movies";

const App = () => {
  const[filteredMovies, setFilteredMovies] = useState([])
  const[searchGenre, setSearchGenre] = useState('All')   
  const { movies, setMovies } = useContext(MoviesContext)


  useEffect(() => {
    fetch('http://localhost:9292/movies')
    .then(res => res.json())
    .then(list => setMovies(list))
  }, [setMovies])  

  let movieList = (searchGenre === '' || searchGenre === 'All') ? [...movies] : filteredMovies

  const handleUpdate = (movieObject) => {
    const list = movieList.map(m => m.id === movieObject.id ? movieObject : m)
    setMovies(list)
    setFilteredMovies(list)
  }

  const handleRemoveMovie = (id) => {
    const updatedList = movies.filter(m => !(m.id === id))
    setMovies(updatedList)
    setFilteredMovies(updatedList)
  }

  return (
    <Router>
      <Navbar
        setFilteredMovies={setFilteredMovies}
        setSearchGenre={setSearchGenre}
      />
      <Routes>
        <Route path="/" 
          element={ <Home/> } 
        />
        <Route path="/movies"
          element={
            <MovieList
              movieList={ movieList }
              handleUpdate={handleUpdate}
              handleRemoveMovie={handleRemoveMovie}
            />
          }
        />
        <Route 
          path="/movies/new" 
          element={
            <NewMovie/>
          } 
        />
        <Route
          path="/movies/:id/reviews"
          element={
            <ReviewsContainer />
          }
         />
      </Routes>      
    </Router>
  );
}

export default App;
