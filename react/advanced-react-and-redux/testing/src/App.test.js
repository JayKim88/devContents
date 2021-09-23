import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without creashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain("hi there");

  ReactDOM.unmountComponentAtNode(div);
});
