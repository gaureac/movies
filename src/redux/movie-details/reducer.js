import { GET_DETAILS_STARTED, GET_DETAILS_SUCCESS, GET_DETAILS_FAILURE } from './actiontypes';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAILS_STARTED:
      return { ...state, loading: true };
    case GET_DETAILS_SUCCESS:
      return { ...state, data: payload, loading: false };
    case GET_DETAILS_FAILURE:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
