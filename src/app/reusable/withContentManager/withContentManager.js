import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MasterYoda from "../../../api/MasterYoda";
import { BASE_URL } from "../../../api/endpoints";
import { setIsLoading, setContent, setContentURL } from "./actions";

/**
 *
 * @description Created the HOC
 * @author davispindola
 * @version 1.0
 *
 * @param {Node} C React component
 */
const withContentManager = C => {
  class WithContentManager extends React.Component {
    componentDidMount() {
      const { setIsLoading, setContent, setContentURL, match } = this.props;

      setIsLoading(true)
        .then(() => this.setContextContent(match))
        .then(content => {
          setContent(content);
          return Promise.resolve(content);
        })
        .then(content => setContentURL(content.url))
        .then(() => setIsLoading(false))
        .catch(console.log);
    }

    setContextContent = async ({ url }) => {
      return new MasterYoda(`${BASE_URL}${url}`).get();
    };

    render() {
      return <C {...this.props} />;
    }
  }

  const makeMapStateToProps = () => {
    const mapStateToProps = state => ({
      currentContent: state.sessionContentState.currentContent,
      isLoading: state.sessionContentState.isLoading,
      contentURL: state.sessionContentState.contentURL
    });

    return mapStateToProps;
  };

  const mapDispatchToProps = dispatch => ({
    setIsLoading: async isLoading => dispatch(setIsLoading(isLoading)),
    setContent: async content => dispatch(setContent(content)),
    setContentURL: async contentURL => dispatch(setContentURL(contentURL))
  });

  return compose(
    withRouter,
    connect(
      makeMapStateToProps(),
      mapDispatchToProps
    )
  )(WithContentManager);
};

export default withContentManager;
