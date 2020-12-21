import { combineReducers } from 'redux';
import { reducer as details } from './movie-details/reducer';
import { reducer as movies } from './movies/reducer';

export default combineReducers({
  details,
  movies,
});
