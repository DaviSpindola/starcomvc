import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../app/reusable/hero";
import { Button } from "@material-ui/core";

/**
 * @description Created the component
 * @author davispindola
 * @version 1.0
 */
const LandingPage = () => (
  <React.Fragment>
    <Hero background="https://i.imgur.com/UZ5kvur.gif">
      <Link to="films">
        <Button color="secondary">show all movies</Button>
      </Link>{" "}
    </Hero>
  </React.Fragment>
);

export default LandingPage;
