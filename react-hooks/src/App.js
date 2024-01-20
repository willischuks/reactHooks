import React, { useState } from 'react';
import MovieList from './components/movieList';
import Filter from './components/filterFile';
import './App.css'
import logo from './components/Assets/FLIX.png';


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'X-Men First Class',
      description: 'Origin Movie, Comic Book Movie, Action Adventure, Sci-Fi',
      posterURL: 'https://www.movieposters.com/cdn/shop/products/x-men-first-class_3f4d92be_480x.progressive.jpg?v=1614191521',
      rating: 4,
    },
    {
      title: 'Avengers: Endgame',
      description: 'Comic Book Movie, Action Adventure, Sci-Fi',
      posterURL: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_500x749.jpg?v=1573652543',
      rating: 5,
    },
    {
      title: 'John Wick: Chapter 4',
      description: 'Revenge Thriller, Action , Gun-Fight',
      posterURL: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/wick_500x749.jpg?v=1681402850',
      rating: 5,
    },
    {
      title: 'Rye Lane',
      description: 'Romance, Comedy',
      posterURL: 'https://jeevesreadsromancehome.files.wordpress.com/2023/04/img_9445.jpg?w=768',
      rating: 5,
    }, {
      title: 'Glass Onion',
      description: 'Thriller, Adapted from a book',
      posterURL: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/glass-onion-a-knives-out-mystery_f0p7qian_18f861c8-4b3f-4074-9abe-625c6445960e_500x749.jpg?v=1670357572',
      rating: 4,
    },
    {
      title: 'Atomic Blonde',
      description: 'Action, Thriller, Spy movie',
      posterURL: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4e04e4b9c8ec7a8c61553445cb488b6c_4f3a573b-ef6e-487e-b536-3a8c98626bef_500x749.jpg?v=1573651537',
      rating: 3,
    },
  ]);

  const [filters, setFilters] = useState({
    title: '',
    rating: '',
  });

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const handleAddMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      setMovies([...movies, newMovie]);
      setNewMovie({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
      });
    } else {
      alert('Please fill in all the fields before adding a new movie.');
    }
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      (filters.rating === '' || movie.rating >= parseFloat(filters.rating))
    );
  });

  return (
    <div className="app">
      <img className='image' src={logo} alt='logo'/>
      <p className='paragraph'>Best Movies, Anywhere, Anytime</p>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <div className="add-movie-form">
        <h2>Add a New Movie</h2>
        <form>
          <label>Title:</label>
          <input
            type="text"
            value={newMovie.title}
            onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
          />

          <label>Description:</label>
          <input
            type="text"
            value={newMovie.description}
            onChange={(e) =>
              setNewMovie({ ...newMovie, description: e.target.value })
            }
          />

          <label>Poster URL:</label>
          <input
            type="text"
            value={newMovie.posterURL}
            onChange={(e) =>
              setNewMovie({ ...newMovie, posterURL: e.target.value })
            }
          />

          <label>Rating:</label>
          <input
            type="number"
            value={newMovie.rating}
            onChange={(e) =>
              setNewMovie({ ...newMovie, rating: e.target.value })
            }
          />

          <button type="button" onClick={handleAddMovie}>
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
