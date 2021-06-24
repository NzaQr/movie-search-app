import React, { useState } from "react";

export default function MovieCard({ movie, api_key }) {
  const [trailerId, setTrailerId] = useState("");
  const [provider, setProvider] = useState([]);
  const [showProvider, setShowProvider] = useState(false);

  const [showVideo, setShowVideo] = useState(false);

  const showTrailer = async (event) => {
    event.preventDefault();
    const videoUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api_key}`;

    try {
      const response = await fetch(videoUrl);
      const data = await response.json();
      setTrailerId(data.results[0].key);
      setShowVideo(!showVideo);
    } catch (err) {
      console.error(err);
    }
  };

  const whereToWatch = async (event) => {
    event.preventDefault();
    const watchUrl = `https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=${api_key}`;

    try {
      const response = await fetch(watchUrl);
      const data = await response.json();
      setProvider(data.results.AR.flatrate);
      console.log(provider);
      setShowProvider(!showProvider);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="card">
      <img
        className="card-image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <h3 className="card-title">{movie.title}</h3>
      <p>
        <small>RELEASE DATE: {movie.release_date}</small>
      </p>
      <p>
        <small>RATING: {movie.vote_average}</small>
      </p>

      <p>{movie.overview}</p>
      <div className="card-buttons-container">
        <button className="button" onClick={showTrailer}>
          {showVideo ? "Hide" : "Watch Trailer"}
        </button>
        {showVideo && (
          <iframe
            title={movie.title + " trailer"}
            width="100%"
            frameborder="0"
            allow="fullscreen"
            src={`https://www.youtube.com/embed/${trailerId}`}
          ></iframe>
        )}
        <button className="button" onClick={whereToWatch}>
          {showProvider ? "Hide" : "Where to watch"}
        </button>
        {showProvider &&
          provider.map((provider) => (
            <>
              <p>{provider.provider_name}</p>
              <img
                className="provider-logo"
                src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                alt={`${provider.provider_name} logo`}
              ></img>
            </>
          ))}
      </div>
    </div>
  );
}
