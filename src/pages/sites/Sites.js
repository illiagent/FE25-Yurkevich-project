import React, { Component } from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./Sites.css";
const slider = (
  <AwesomeSlider>
    <div data-src="4.jpg" />
    <div data-src="1.jpg" />
    <div data-src="2.jpg" />
    <div data-src="3.jpg" />
    <div data-src="5.jpg" />
  </AwesomeSlider>
);
export default class Sites extends Component {
  render() {
    return <div className="slider">{slider}</div>;
  }
}
