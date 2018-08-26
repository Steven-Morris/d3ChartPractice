import React from "react";
import { render } from "react-dom";
import Axis from "./Axis.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <svg width="800" height="400" id="svg">
    <Axis
      axis="left"
      x={30}
      y={10}
      minDom={10}
      minRange={0}
      maxRange={200}
      maxDom={0}
    />
    <Axis x={30} y={210} minDom={0} minRange={0} maxRange={200} maxDom={10} />
  </svg>
);

render(<App />, document.getElementById("root"));
