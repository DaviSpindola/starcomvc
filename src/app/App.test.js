import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CardBody from "./reusable/card/body/CardBody";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders component without crashing", () => {
  const content = () => <CardBody />;
  ReactDOM.render(<App />, content);
  ReactDOM.unmountComponentAtNode(<CardBody />);
});
