import React from "react";
import { shallow } from "enzyme";

import Detail from "./Detail";

describe("Detail test", () => {
  it("should render correctly", () => {
    const component = shallow(<Detail />);

    expect(component).toMatchSnapshot();
  });
});
