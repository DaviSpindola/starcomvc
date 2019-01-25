import React from "react";
import { Switch, Route } from "react-router-dom";

import Movies from "./Movies";
import * as routes from "../../constants/routes";
import Loader from "../../app/reusable/Loader";
import Hero from "../../app/reusable/hero";
import posterFinder from "../../api/posterFinder";

const MovieDetail = React.lazy(() =>
  import("../../app/components/MovieDetailment/MovieDetail")
);

const MoviesPage = () => (
  <Switch>
    <Route exact path={routes.MOVIES} render={props => <Movies {...props} />} />
    <Route
      exact
      path={routes.MOVIE}
      render={props => (
        <div>
          <React.Suspense fallback={<Loader />}>
            <MovieDetail
              {...props}
              content={({ episode_id }) => (
                <Hero background={posterFinder(episode_id.toString())} />
              )}
            />
          </React.Suspense>
        </div>
      )}
    />
  </Switch>
);

export default MoviesPage;
