import React from "react";
import { Route } from "react-router-dom";

import * as routes from "../../../constants/routes";
import MoviesPage from "../../../pages/movies";
import LandingPage from "../../../pages/landing";

const pages = [
  {
    isExact: false,
    path: routes.MOVIES,
    component: any => <MoviesPage {...any} />
  },
  {
    isExact: true,
    path: routes.HOME,
    component: any => <LandingPage {...any} />
  }
];

const PageManger = () => (
  <React.Fragment>
    {pages.map(({ isExact, path, component }) => (
      <Route
        key={path}
        exact={isExact}
        path={path}
        render={props => component(props)}
      />
    ))}
  </React.Fragment>
);

export default PageManger;
