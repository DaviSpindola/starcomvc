import React from "react";
import { withRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import Footer from "./reusable/footer/Footer";
import PageManger from "./components/PageManager";
import NavigationBar from "./reusable/navigation/NavigationBar";

class App extends React.Component {
  handleClick = () => {
    const { history } = this.props;

    history.push("/films");
  };

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <NavigationBar onClick={this.handleClick} />
          <PageManger />
          <Footer />
        </React.Fragment>
      </Provider>
    );
  }
}

export default withRouter(App);
