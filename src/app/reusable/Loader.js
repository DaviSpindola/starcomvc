import React from "react";
import { withStyles } from "@material-ui/core";

/**
 * @description Created the component
 * @author davispindola
 * @version 1.0
 */
const Loader = ({ classes }) => (
  <div className={classes.root}>
    <img
      className={classes.gif}
      src="https://cdn.dribbble.com/users/601803/screenshots/2037073/bb8.gif"
      alt="loader"
    />
  </div>
);

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > img": {
      width: "-webkit-fill-available"
    }
  }
});

export default withStyles(styles)(Loader);
