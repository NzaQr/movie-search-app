import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import "./Search.css";

export default function Search() {
  const [query, setQuery] = useState("");
  const [isQueryEmpty, setIsQueryEmpty] = useState(false);
  const [movies, setMovies] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false&append_to_response=videos`;

  const searchMovies = async (event) => {
    event.preventDefault();
    if (query === "") {
      setIsQueryEmpty(true);
    } else {
      setIsQueryEmpty(false);

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div>
      <div className="search-container">
        <h1 className="title">Search</h1>
        <form className="form" onSubmit={searchMovies}>
          <label htmlFor="query" className="label">
            Movie Name
          </label>

          <input
            className="input"
            type="text"
            name="query"
            placeholder="i.e. Jurassic Park"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isQueryEmpty && <p>Enter a movie name!</p>}
          <button className="button">Search</button>
        </form>
      </div>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} api_key={api_key} />
          ))}
      </div>
    </div>
  );
}
