import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDetails } from '../redux/movie-details/actions';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import PropTypes from 'prop-types';

const MovieDetailsContainer = ({ onGetDetails, movieDetails, loading }) => {
  const { id } = useParams();
  useEffect(() => {
    onGetDetails(id);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <MovieDetails details={movieDetails} />;
};

const mapStateToProps = (store) => {
  return {
    movieDetails: store.details.data,
    loading: store.details.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetDetails: (id) => dispatch(getDetails(id)),
  };
};

MovieDetailsContainer.propTypes = {
  onGetDetails: PropTypes.func.isRequired,
  movieDetails: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsContainer);
