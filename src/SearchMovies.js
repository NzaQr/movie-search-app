import React from "react";
export default function SearchMovies() {
  const searchMovies = async (event) => {
    event.preventDefault();
    const query = "Jurassic Park";
    const url = `https://api.themoviedb.org/3/movie/550?api_key=7e8845586d780d43d2434f0780112873&language=en-US&query=${query}
    &page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">
        Movie Name
      </label>

      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
      />

      <button className="button">Search</button>
    </form>
  );
}
