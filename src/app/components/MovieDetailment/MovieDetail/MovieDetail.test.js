import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import store from "../../../../store";

import MovieDetailContainer from "./MovieDetailContainer";

describe("Movie test", () => {
  it("should render correctly", () => {
    const component = mount(
      <Provider store={store}>
        <Router>
          <MovieDetailContainer render={movie => <div>Hello movie</div>} />
        </Router>
      </Provider>
    );

    expect(component).toMatchSnapshot();

    component.unmount();
  });
});
