import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./Map.css";

export class Maps extends React.Component {
  render() {
    console.log(this.props.google);
    return (
      <div>
        <Map google={this.props.google} zoom={13} className="googleMaps" initialCenter={{ lat: 53.8999964, lng: 27.5666644 }}>
          <Marker position={{ lat: 53.8999964, lng: 27.5666644 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDkqm9I9RV6fVFDh-nKTgisMnLBBR9E7Wc",
})(Maps);
