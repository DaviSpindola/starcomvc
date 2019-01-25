import {
  CLEAR_MOVIES,
  RECEIVE_MOVIES,
  MOVIES_IS_LOADING,
  RECEIVE_TOTAL_MOVIES
} from "../../../../../reducers/movies";

export const clearMovies = () => ({
  type: CLEAR_MOVIES
});

export const receiveTotalMovies = payload => ({
  type: RECEIVE_TOTAL_MOVIES,
  payload
});

export const receiveMovies = payload => ({
  type: RECEIVE_MOVIES,
  payload
});

export const isLoading = payload => ({
  type: MOVIES_IS_LOADING,
  ...payload
});
