import React from "react";
import PropTypes from "prop-types";

import withContentManager from "../../../reusable/withContentManager";

/**
 * @description Created the component
 * @author davispindola
 * @version 1.0
 */
class MovieDetailContainer extends React.Component {
  render() {
    const { currentContent, render } = this.props;

    return (
      <React.Fragment>
        {currentContent && render(currentContent)}
      </React.Fragment>
    );
  }
}

MovieDetailContainer.propTypes = {
  currentContent: PropTypes.object,
  isLoading: PropTypes.bool,
  contentURL: PropTypes.string,
  render: PropTypes.func
};

export default withContentManager(MovieDetailContainer);
