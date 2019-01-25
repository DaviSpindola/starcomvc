import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import PageManger from "./components/PageManager";
import store from "../store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <PageManger />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
