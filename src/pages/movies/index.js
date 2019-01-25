import React from "react";
import { Switch, Route } from "react-router-dom";

import Movies from "./all/Movies";
import * as routes from "../../constants/routes";
import MoviePage from "./episode/Movie";

const MoviesPage = () => (
  <Switch>
    <Route exact path={routes.MOVIES} render={props => <Movies {...props} />} />
    <Route
      exact
      path={routes.MOVIE}
      render={props => <MoviePage {...props} />}
    />
  </Switch>
);

export default MoviesPage;
