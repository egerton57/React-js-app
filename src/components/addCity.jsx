import React, { Component } from "react";
import Navigation from "./Navigation";

class AddCity extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="container-fluid Home-Component">
          <div className="row">
            <div style={{marginTop:'6%'}}>
                Hello
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddCity;
