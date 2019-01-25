import React from "react";
import { mount } from "enzyme";

import MovieListContainer from "./index";

describe("Detail test", () => {
  it("should render correctly", () => {
    const component = mount(<MovieListContainer />);

    expect(component).toMatchSnapshot();

    component.unmount();
  });
});
