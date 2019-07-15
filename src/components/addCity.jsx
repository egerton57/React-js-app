import React, { Component } from "react";
import Navigation from './Navigation';

class AddCity extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
          <Navigation />
        <h1>Add City</h1>
      </React.Fragment>
    );
  }
}

export default AddCity;
