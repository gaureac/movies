import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import './styles.css';

const MovieDetails = ({ details }) => {
  const { title, overview, release_date, genres, vote_average, runtime } = details;
  const history = useHistory();
  return (
    <div className="movie-details">
      <div className="container">
        <button
          className="btn-back"
          onClick={() => {
            history.push('/');
          }}
        >
          Go back
        </button>
        <ul className="movie-details-list">
          <li>Title: {title ? title : '-'}</li>
          <li>Description: {overview ? overview : '-'}</li>
          <li>Date: {release_date ? release_date : '-'}</li>
          <li>
            Genre:
            {genres && genres.length > 0 ? genres.map((genre) => genre.name).join(', ') : '-'}
          </li>
          <li>Rating: {vote_average ? vote_average : '-'}</li>
          <li>Duration: {runtime ? runtime : '-'}</li>
        </ul>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  details: PropTypes.object.isRequired,
};

export default MovieDetails;
