import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { receiveMovies } from "./actions";
import Carousel from "../../reusable/list";
import MasterYoda from "../../../api/MasterYoda";
import { BASE_URL } from "../../../api/endpoints";
import Movie from "../Movie";

class MovieListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.movieService = new MasterYoda(`${BASE_URL}/films`);
  }

  componentDidMount() {
    const { setTotalMovies } = this.props;

    this.movieService.get().then(setTotalMovies);
  }

  render() {
    const { movies } = this.props;

    return (
      <div>
        <Carousel>
          {movies &&
            movies.map((movie, index) => (
              <div styles={{ cursor: "pointer" }} key={index}>
                <Link to={`films/${index + 1}`}>
                  <Movie {...movie} />
                </Link>
              </div>
            ))}
        </Carousel>
      </div>
    );
  }
}

MovieListContainer.propTypes = {
  movies: PropTypes.array,
  setTotalMovies: PropTypes.func
};

MovieListContainer.defaultProps = {
  movies: []
};

const mapStateToProps = state => ({
  movies: state.moviesState.movies
});

const mapDispatchToProps = dispatch => ({
  setTotalMovies: ({ results }) => dispatch(receiveMovies({ movies: results }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListContainer);
