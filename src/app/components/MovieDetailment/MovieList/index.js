import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { receiveMovies } from "./actions";
import MasterYoda from "../../../../api/MasterYoda";
import { BASE_URL } from "../../../../api/endpoints";

/**
 * @description Created the component
 * @author davispindola
 * @version 1.0
 */
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
    const { movies, render } = this.props;

    return <React.Fragment>{render(movies)}</React.Fragment>;
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
