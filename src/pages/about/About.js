import React, { Component } from "react";
import "./About.css";
import Map from "../../components/google-map/Map";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p> Some information about</p>
        <div className="map__container">
          <Map />
        </div>
      </div>
    );
  }
}
