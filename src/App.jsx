import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesContainer from './containers/MoviesContainer';
import MovieDetailsContainer from './containers/MovieDetailsContainer';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={MoviesContainer} />
        <Route path="/movie/:id" component={MovieDetailsContainer} />
      </Switch>
    </div>
  );
};

export default App;
