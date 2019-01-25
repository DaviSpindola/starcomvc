import React from "react";
import { List, ListItem, withStyles, Typography } from "@material-ui/core";
import styles from "./styles";

const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    <footer className={classes.mainFooter}>
      <div className={classes.footerSocial}>
        <Typography variant="h4" className={classes.footerTitle}>
          follow
        </Typography>
        <List className={classes.socialLinks}>
          <ListItem>github</ListItem>
          <ListItem>twitter</ListItem>
        </List>
      </div>
    </footer>
  </footer>
);

export default withStyles(styles)(Footer);
