import logo from './logo.svg';
import './App.css';

import MovieList from './conponents/movieList';
import MovieIdPage from './conponents/movieIdPage'
import AddMovies from './conponents/addMovie';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <h1>Movies List</h1>
    {/* <MovieList/> */}

    <Router>
     
        <Routes>
          <Route exact path="/" element={<MovieList/>}/>
          <Route exact path="/movie-id/:id" element={<MovieIdPage/>}/>
          <Route exact path="/addMovies" element={<AddMovies/>}/>
        </Routes>
     
    </Router>
     
    </div>
  );
}

export default App;
