import React from "react";
import { mount } from "enzyme";

import Carousel from "./index";

describe("Carousel test", () => {
  it("should render correctly with two components as children", () => {
    const component = mount(
      <Carousel>
        <div>1</div>
        <div>2</div>
      </Carousel>
    );
    expect(component).toMatchSnapshot();
    component.unmount();
  });
});
