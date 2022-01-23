import React from "react";

const Movie = (props) => {
  return (
    <div className="movie">
      <div className="movie-title">
        {props.movie.title}
        <span className="movie-year">
          ({props.movie.year})
        </span>
      </div>
      <div>
        <button onClick={() => props.removeMovie(props.movie.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Movie;
