import React from "react";
import { shallow } from "enzyme";

import Footer from "./Footer";

describe("Footer test", () => {
  it("should render correctly", () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
