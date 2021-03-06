import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";
import store from "../../../../store";

import MovieListContainer from "./index";

describe("Detail test", () => {
  it("should render correctly", () => {
    const component = mount(
      <Provider store={store}>
        <MovieListContainer render={movies => <div>Hello movies</div>} />
      </Provider>
    );

    expect(component).toMatchSnapshot();

    component.unmount();
  });
});
