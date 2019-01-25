import React from "react";
import Loader from "../../../app/reusable/Loader";
import Detail from "../../../app/reusable/page/detail";
import Hero from "../../../app/reusable/hero";
import posterFinder from "../../../api/posterFinder";
import { withStyles } from "@material-ui/core";
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
        content={({ title, opening_crawl, episode_id, release_date }) => (
          <React.Fragment>
            <Hero background={posterFinder(episode_id.toString())}>
              episode {episode_id}
            </Hero>
            <main className={classes.main}>
              <Detail content={opening_crawl} title={title}>
                <CardContent imageURL={posterFinder(episode_id.toString())} />
              </Detail>
            </main>
          </React.Fragment>
        )}
      />
    </React.Suspense>
  );
};

export default withStyles(styles)(MoviePage);
