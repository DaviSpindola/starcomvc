import React from "react";
import { shallow } from "enzyme";

import Hero from "./Hero";

describe("Hero test", () => {
  it("should render correctly", () => {
    const component = shallow(
      <Hero background="http://images-cdn.impresa.pt/caras/2011-07-21-nicolas-cage?v=w870h555" />
    );

    expect(component).toMatchSnapshot();
  });
});
