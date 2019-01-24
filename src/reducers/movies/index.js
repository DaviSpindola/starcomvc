export const CLEAR_MOVIES = "CLEAR_MOVIES",
  RECEIVE_MOVIES = "RECEIVE_MOVIES",
  MOVIES_IS_LOADING = "MOVIES_IS_LOADING",
  RECEIVE_TOTAL_MOVIES = "RECEIVE_TOTAL_MOVIES";

const INITIAL_STATE = {
  totalMovies: null,
  movies: null,
  isLoading: false
};

const moviesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case RECEIVE_TOTAL_MOVIES:
      return { ...state, ...payload };
    case RECEIVE_MOVIES:
      return { ...state, ...payload };
    case CLEAR_MOVIES:
      return { ...state, ...INITIAL_STATE };
    case MOVIES_IS_LOADING:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default moviesReducer;
