import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import './App.css';


function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const getMovieRequest = async () => {
    const url ="http://www.omdbapi.com/?s=avengers&apikey=ca6b36ae";
     const response = await fetch (url);
     const responseJSon = await response.json();
     console.log(responseJSon);
     setMovies(responseJSon.Search);
  };

  useEffect( () => {
    getMovieRequest( );
  }, []);

  return (
    <div className="App">
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Lako Movies</Navbar.Brand>
        </Container>
      </Navbar>
      <div className='row'>
        <MovieListHeading heading='movies'/>
        <SearchBox/>
      </div>
      <div className='row'>
        <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
