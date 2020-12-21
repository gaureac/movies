import api from '../api';

export const getMovies = (category) => {
  return (dispatch) => {
    dispatch(getMoviesStarted(category));
    api
      .get(`/movie/${category}`)
      .then((res) => {
        dispatch(getMoviesSuccess(res.data.results, category));
      })
      .catch((err) => {
        dispatch(getMoviesFailure(err.data, category));
      });
  };
};

const getMoviesStarted = (category) => ({
  type: `GET_${category.toUpperCase()}_STARTED`,
  category,
});

const getMoviesSuccess = (movies, category) => ({
  type: `GET_${category.toUpperCase()}_SUCCESS`,
  payload: movies,
  category,
});

const getMoviesFailure = (error, category) => ({
  type: `GET_${category.toUpperCase()}_FAILURE`,
  payload: error,
  category,
});
