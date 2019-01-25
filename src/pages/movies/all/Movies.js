import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../../app/reusable/hero";
import Loader from "../../../app/reusable/Loader";
import Carousel from "../../../app/reusable/list";
import Movie from "../../../app/components/MovieDetailment/Movie";

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
          <MoviesContainer
            render={movies => (
              <div style={{ paddingBottom: 40 }}>
                {!movies && <Loader />}
                {movies && (
                  <Carousel>
                    {movies.map((movie, index) => (
                      <div style={{ cursor: "pointer" }} key={index}>
                        <Link to={movie.url.split("api/")[1]}>
                          <Movie {...movie} />
                        </Link>
                      </div>
                    ))}
                  </Carousel>
                )}
              </div>
            )}
          />
        </React.Suspense>
      </section>
    </main>
  </div>
);

export default Movies;
