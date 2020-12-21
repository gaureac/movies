import { GET_DETAILS_STARTED, GET_DETAILS_SUCCESS, GET_DETAILS_FAILURE } from './actiontypes';
import api from '../api';

export const getDetails = (id) => {
  return (dispatch) => {
    dispatch(getDetailsStarted());
    api
      .get(`/movie/${id}`)
      .then((res) => {
        dispatch(getDetailsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getDetailsFailure(err));
      });
  };
};

const getDetailsStarted = () => ({
  type: GET_DETAILS_STARTED,
});

const getDetailsSuccess = (data) => ({
  type: GET_DETAILS_SUCCESS,
  payload: data,
});

const getDetailsFailure = (error) => ({
  type: GET_DETAILS_FAILURE,
  payload: error,
});
