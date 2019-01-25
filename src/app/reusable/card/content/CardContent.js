import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import styles from "./styles";

/**
 * Component based on Marvel.com cards
 *
 * @description Created the component
 * @author davispindola
 * @version 1.0
 */
const CardContent = ({ classes, imageURL, imageAlt }) => (
  <div className={classes.contentRoot}>
    <div className={classes.contentThumb}>
      <figure className={classes.imageWrapper}>
        <img src={imageURL} alt={imageAlt} className={classes.image} />
      </figure>
    </div>
  </div>
);

CardContent.propTypes = {
  classes: PropTypes.object,
  imageURL: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};

export default withStyles(styles)(CardContent);
