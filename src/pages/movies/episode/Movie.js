import React from "react";
import Loader from "../../../app/reusable/Loader";
import Detail from "../../../app/reusable/page/detail";
import Hero from "../../../app/reusable/hero";
import posterFinder from "../../../api/posterFinder";
import { withStyles, Typography, Divider } from "@material-ui/core";
import styles from "./styles";
import CardContent from "../../../app/reusable/card/content";

const MovieDetail = React.lazy(() =>
  import("../../../app/components/MovieDetailment/MovieDetail")
);

const MoviePage = props => {
  const { classes } = props;
  return (
    <React.Suspense fallback={<Loader />}>
      <MovieDetail
        {...props}
        render={({
          title,
          opening_crawl,
          episode_id,
          release_date,
          director,
          producer
        }) => (
          <React.Fragment>
            <Hero background={posterFinder(episode_id.toString())}>
              episode {episode_id}
            </Hero>
            <main className={classes.main}>
              <Detail content={opening_crawl} title={title}>
                <CardContent
                  imageURL={posterFinder(episode_id.toString())}
                  imageAlt={`Star Wars epsiode ${episode_id} poster`}
                />
              </Detail>

              <Divider />

              <div className={classes.more}>
                <div className={classes.moreDetail}>
                  <div className={classes.item}>
                    <Typography component="span">director</Typography>
                    <Typography>{director}</Typography>
                  </div>
                  <div className={classes.item}>
                    <Typography component="span">producers</Typography>
                    <Typography>{producer}</Typography>
                  </div>
                  <div className={classes.item}>
                    <Typography component="span">release date</Typography>
                    <Typography>{release_date}</Typography>
                  </div>
                </div>
              </div>
            </main>
          </React.Fragment>
        )}
      />
    </React.Suspense>
  );
};

export default withStyles(styles)(MoviePage);
