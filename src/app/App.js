import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import Footer from "./reusable/footer/Footer";
import PageManger from "./components/PageManager";
// import NavigationBar from "./reusable/navigation/NavigationBar";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            {/* <NavigationBar /> */}
            <PageManger />
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
