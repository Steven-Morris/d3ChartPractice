import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

class Axis extends Component {
  constructor(props) {
    super(props);
    this.gRef = React.createRef();
  }

  componentDidMount() {
    this.d3render();
  }
  componentDidUpdate() {
    this.d3render();
  }

  d3render() {
    const scale = d3
      .scaleLinear()
      .domain([this.props.minDom, this.props.maxDom])
      .range([this.props.minRange, this.props.maxRange]);

    let axis = null;

    switch (this.props.axis) {
      case "top":
        axis = d3.axisTop(scale);
        break;
      case "left":
        axis = d3.axisLeft(scale);
        break;
      case "right":
        axis = d3.axisRight(scale);
        break;
      case "bottom":
      default:
        axis = d3.axisBottom(scale);
    }

    d3.select(this.gRef.current).call(axis);
  }

  render() {
    const x = this.props.x;
    const y = this.props.y;
    const aTransform = "translate(" + x + "," + y + ")";
    return <g transform={aTransform} ref={this.gRef} />;
  }
}

export default Axis;
