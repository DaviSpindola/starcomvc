import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import styles from "./styles";
import CardContent from "../../../reusable/card/content/CardContent";
import posterFinder from "../../../../api/posterFinder";
import CardBody from "../../../reusable/card/body/CardBody";

/**
 * @description Created the component
 * @author davispindola
 * @version 1.0
 */
const Movie = props => {
  const { title, release_date, episode_id, classes } = props;

  return (
    <div className={classes.root}>
      <CardContent
        imageURL={posterFinder(episode_id)}
        imageAlt={`Star Wars episode ${episode_id} poster.`}
      />
      <CardBody primaryText={title} secondaryText={release_date} />
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string,
  episode_id: PropTypes.number,
  opening_crawl: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  release_date: PropTypes.string,
  created: PropTypes.string,
  edited: PropTypes.string,
  classes: PropTypes.object
};

export default withStyles(styles)(Movie);
