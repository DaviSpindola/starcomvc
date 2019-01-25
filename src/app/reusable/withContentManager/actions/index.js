import {
  SET_CURRENT_CONTENT,
  SET_CONTENT_IS_LOADING,
  SET_CONTENT_URL
} from "../../../../reducers/session/content";

export const setContent = currentContent => ({
  type: SET_CURRENT_CONTENT,
  currentContent
});

export const setIsLoading = isLoading => ({
  type: SET_CONTENT_IS_LOADING,
  isLoading
});

export const setContentURL = contentURL => ({
  type: SET_CONTENT_URL,
  contentURL
});
