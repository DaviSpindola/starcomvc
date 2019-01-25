export const SET_CURRENT_CONTENT = "SET_CURRENT_CONTENT",
  SET_CONTENT_IS_LOADING = "SET_CONTENT_IS_LOADING",
  SET_CONTENT_URL = "SET_CONTENT_URL",
  CLEAR_CONTENT_DATA = "CLEAR_CONTENT_DATA";

const INITIAL_STATE = {
  currentContent: null,
  isLoading: false,
  contentURL: null
};

/**
 *
 * @author davispindola
 * @version 1.0
 *
 * @param {Object} state
 * @param {Object} action
 */
const setContent = (state, action) =>
  Object.assign({}, state, {
    currentContent: action.currentContent
  });

/**
 *
 * @author davispindola
 * @version 1.0
 *
 * @param {Object} state
 * @param {Object} action
 */
const setIsLoading = (state, action) =>
  Object.assign({}, state, {
    isLoading: action.isLoading
  });

/**
 *
 * @author davispindola
 * @version 1.0
 *
 * @param {Object} state
 * @param {Object} action
 */
const setContentURL = (state, action) =>
  Object.assign({}, state, {
    contentURL: action.contentURL
  });

/**
 *
 * @description Created the reducer
 * @author davispindola
 * @version 1.0
 *
 * @param {Object} state
 * @param {Object} action
 */
const sessionContentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_CONTENT:
      return setContent(state, action);

    case SET_CONTENT_IS_LOADING:
      return setIsLoading(state, action);

    case SET_CONTENT_URL:
      return setContentURL(state, action);

    case CLEAR_CONTENT_DATA:
      return { ...state, ...INITIAL_STATE };

    default:
      return state;
  }
};

export default sessionContentReducer;
