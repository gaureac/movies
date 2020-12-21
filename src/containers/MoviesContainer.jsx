import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovies } from '../redux/movies/actions';
import MoviesList from '../components/MoviesList';
import Loading from '../components/Loading';
import PropTypes from 'prop-types';

const MoviesContainer = ({
  onGetMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  loading,
}) => {
  useEffect(() => {
    onGetMovies('popular');
    onGetMovies('top_rated');
    onGetMovies('upcoming');
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h3 className="section-title">Popular</h3>
      <MoviesList movies={popularMovies} />
      <h3>Top rated</h3>
      <MoviesList movies={topRatedMovies} />
      <h3>Upcoming</h3>
      <MoviesList movies={upcomingMovies} />
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    popularMovies: store.movies.popular,
    topRatedMovies: store.movies.top_rated,
    upcomingMovies: store.movies.upcoming,
    loading: store.movies.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMovies: (category) => dispatch(getMovies(category)),
  };
};

MoviesContainer.propTypes = {
  onGetMovies: PropTypes.func.isRequired,
  popularMovies: PropTypes.array.isRequired,
  topRatedMovies: PropTypes.array.isRequired,
  upcomingMovies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
