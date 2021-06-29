import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./Home.css";

export default function SearchMovies() {
  const [movies, setMovies] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`;

  const searchMovies = async () => {
    const response = await fetch(url);
    const movies = await response.json();
    setMovies(movies.results);
  };

  useEffect(() => {
    searchMovies();
  }, []);

  return (
    <>
      <h1 className="trending-title">Trending today</h1>
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} api_key={api_key} />
      ))}
    </>
  );
}
