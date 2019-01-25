import React from "react";
import { Switch, Route } from "react-router-dom";

import Movies from "./Movies";
import * as routes from "../../constants/routes";

const MoviesPage = () => (
  <Switch>
    <Route exact path={routes.MOVIES} render={props => <Movies {...props} />} />
    <Route
      exact
      path={routes.MOVIE}
      render={props => (
        <div>
          <h1>oi</h1>
        </div>
      )}
    />
  </Switch>
);

export default MoviesPage;
