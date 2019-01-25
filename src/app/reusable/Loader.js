import React from "react";
import { withStyles } from "@material-ui/core";

const Loader = ({ classes }) => (
  <div className={classes.root}>
    <img
      className={classes.gif}
      src="https://i.giphy.com/media/eEbiAqk9YUT5e/giphy.webp"
      alt="loader"
    />
  </div>
);

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default withStyles(styles)(Loader);
