import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../app/reusable/hero";
import { Button } from "@material-ui/core";

const LandingPage = () => (
  <React.Fragment>
    <Hero background="https://i.imgur.com/UZ5kvur.gif">
      <Link to="films">
        <Button variant="contained">show all movies</Button>
      </Link>{" "}
    </Hero>
  </React.Fragment>
);

export default LandingPage;
