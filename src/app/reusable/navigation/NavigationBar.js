import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Button, withStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import styles from "./styles";

/**
 * Application navigation bar
 *
 * @description Created the component
 * @author davispindola
 * @version 1.0
 */
const NavigationBar = ({ classes, onClick }) => (
  <AppBar className={classes.navigationBar} position="absolute">
    <Toolbar>
      <Button
        className={classes.homeButton}
        variant="outlined"
        onClick={onClick}
      >
        <Home />
      </Button>
    </Toolbar>
  </AppBar>
);

NavigationBar.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(NavigationBar);
