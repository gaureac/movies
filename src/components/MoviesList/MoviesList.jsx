import React from 'react';
import PropTypes from 'prop-types';
import { image_base_url, image_size } from '../../config';
import './styles.css';

const MoviesList = ({ movies = [] }) => {
  return (
    <ul className="movies-list">
      {movies.map((movie, index) => (
        <li key={index}>
          <a href={`movie/${movie.id}`}>
            {movie.poster_path && <img src={image_base_url + image_size + movie.poster_path} />}
          </a>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
