import React from "react";
import { shallow } from "enzyme";

import CardContent from "./CardContent";

describe("CardContent test", () => {
  it("should render correctly", () => {
    const component = shallow(
      <CardContent
        imageURL="http://images-cdn.impresa.pt/caras/2011-07-21-nicolas-cage?v=w870h555"
        imageAlt="Nicolas Cage"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
