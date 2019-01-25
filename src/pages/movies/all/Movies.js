import React from "react";
import Hero from "../../../app/reusable/hero";
import Loader from "../../../app/reusable/Loader";

const MoviesContainer = React.lazy(() =>
  import("../../../app/components/MovieDetailment/MovieList")
);

const Movies = () => (
  <div>
    <Hero background="https://i.imgur.com/9SQF5Wv.jpg">movies</Hero>
    <main>
      <section
        style={{
          background: "white",
          padding: "10px 0",
          maxWidth: "80%",
          margin: "0 auto"
        }}
      >
        <React.Suspense fallback={<Loader />}>
          <MoviesContainer />
        </React.Suspense>
      </section>
    </main>
  </div>
);

export default Movies;
