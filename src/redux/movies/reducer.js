const initialState = {
  popular: [],
  top_rated: [],
  upcoming: [],
  error: null,
  loading: false,
};

export const reducer = (state = initialState, { type, payload, category = '' }) => {
  switch (type) {
    case `GET_${category.toUpperCase()}_STARTED`:
      return { ...state, loading: true };
    case `GET_${category.toUpperCase()}_SUCCESS`:
      return { ...state, [category]: payload, loading: false };
    case `GET_${category.toUpperCase()}_FAILURE`:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
