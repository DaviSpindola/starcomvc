import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, withStyles, Typography } from "@material-ui/core";
import styles from "./styles";

/**
 * Generic footer for all contexts in app
 *
 * @description Created the component
 * @author davispindola
 * @versio 1.0
 */
const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    <footer className={classes.mainFooter}>
      <div className={classes.content}>
        <div className={classes.footerSocial}>
          <Typography variant="h6" className={classes.footerTitle}>
            follow
          </Typography>
          <List className={classes.socialLinks}>
            <ListItem>
              <Typography
                component="a"
                href="https://github.com/davispindola"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                component="a"
                href="https://twitter.com/__cyberpunk"
                target="_blank"
                rel="noopener noreferrer"
              >
                twitter
              </Typography>
            </ListItem>
          </List>
        </div>
      </div>
    </footer>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Footer);
