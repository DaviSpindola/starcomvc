import React from "react";
import PropTypes from "prop-types";
import { Typography, withStyles } from "@material-ui/core";
import styles from "./styles";

const Hero = ({ classes, children, background }) => (
  <div className={classes.root}>
    <div className={classes.heroBackgroundWrapper}>
      <figure className={classes.imageWrapper}>
        <div
          style={{ backgroundImage: `url(${background})` }}
          className={classes.heroBackground}
        />
      </figure>
    </div>
    <div className={classes.hero}>
      <div className={classes.main}>
        <div className={classes.container}>
          <Typography variant="h4">
            <span className={classes.headLine}>{children}</span>
          </Typography>
        </div>
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.node,
  background: PropTypes.string
};

Hero.defaultProps = {
  background: ""
};

export default withStyles(styles)(Hero);
