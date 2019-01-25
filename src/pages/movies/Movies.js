import React from "react";
import Hero from "../../app/reusable/hero";
import Loader from "../../app/reusable/Loader";

const MoviesContainer = React.lazy(() =>
  import("../../app/components/MovieList")
);

const Movies = () => (
  <div>
    <Hero background="https://i.pinimg.com/originals/8c/b7/5a/8cb75ada8ce4a099aed61e7c387b6214.png">
      MOVIES
    </Hero>
    <main>
      <section style={{ background: "white" }}>
        <React.Suspense fallback={<Loader />}>
          <MoviesContainer />
        </React.Suspense>
      </section>
    </main>
  </div>
);

export default Movies;
