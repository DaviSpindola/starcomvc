import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

/**
 *
 * @description Created the component
 * @author davispindola
 * @version 1.0
 */
const CardBody = ({ classes, primaryText, secondaryText }) => (
  <div className={classes.cardBody}>
    <p className={classes.cardBodyPrimaryText}>{primaryText}</p>
    <div className={classes.cardFooter}>
      <p className={classes.cardFooterSecondaryText}>{secondaryText}</p>
    </div>
  </div>
);

CardBody.propTypes = {
  classes: PropTypes.object,
  primaryText: PropTypes.string,
  secondaryText: PropTypes.string
};

CardBody.defaultProps = {
  primaryText: "",
  secondaryText: ""
};

export default withStyles(styles)(CardBody);
