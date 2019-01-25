import React from "react";
import PropTypes from "prop-types";

import withContentManager from "../../../reusable/withContentManager";

class MovieDetailContainer extends React.Component {
  render() {
    const { currentContent, content } = this.props;

    return (
      <div>
        <React.Fragment>
          {currentContent !== null && content(currentContent)}
        </React.Fragment>
      </div>
    );
  }
}

MovieDetailContainer.propTypes = {
  currentContent: PropTypes.object,
  isLoading: PropTypes.bool,
  contentURL: PropTypes.string
};

export default React.memo(withContentManager(MovieDetailContainer));
