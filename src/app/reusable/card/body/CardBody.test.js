import React from "react";
import { shallow } from "enzyme";

import CardBody from "./CardBody";

describe("CardBody component", () => {
  it("should render correctly in debug mode", () => {
    const component = shallow(<CardBody />);

    expect(component).toMatchSnapshot();
  });
});

describe("CardBody component with props", () => {
  it("should render correctly with nested props", () => {
    const component = shallow(
      <CardBody primaryText="Hello" secondaryText="world!" />
    );

    expect(component).toMatchSnapshot();
  });
});
