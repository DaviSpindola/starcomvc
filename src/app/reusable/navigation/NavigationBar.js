import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton, withStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import styles from "./styles";

/**
 * Application navigation bar
 *
 * @description Created the component
 * @author davispindola
 * @version 1.0
 */
const NavigationBar = ({ classes }) => (
  <AppBar className={classes.navigationBar} position="absolute">
    <Toolbar>
      <IconButton>
        <Menu />
      </IconButton>
    </Toolbar>
  </AppBar>
);

NavigationBar.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(NavigationBar);
