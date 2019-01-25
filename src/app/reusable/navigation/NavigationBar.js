import React from "react";
import { AppBar, Toolbar, IconButton, withStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import styles from "./styles";

const NavigationBar = ({ classes }) => (
  <AppBar className={classes.navigationBar} position="absolute">
    <Toolbar>
      <IconButton>
        <Menu />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(NavigationBar);
