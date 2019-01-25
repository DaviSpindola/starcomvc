import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, withStyles } from "@material-ui/core";

import styles from "./styles";

const Detail = ({ classes, title, content, children }) => (
  <section>
    <Grid container>
      <Grid className={classes.item} item sm={4} xs={12} lg={6}>
        {children}
      </Grid>
      <Grid className={classes.item} item sm={8} xs={12} lg={6}>
        <div>
          <Typography className={classes.uppercase} variant="h4" gutterBottom>
            {title}
          </Typography>
          <div>
            <Typography variant="body1">{content}</Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  </section>
);

Detail.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object
};

Detail.defaultProps = {
  title: "",
  content: ""
};

export default withStyles(styles)(Detail);
