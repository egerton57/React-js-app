import React, { Component } from "react";
import { Link } from "react-router-dom";
import FireBs from "../config/fire";
import Navigation from './Navigation';

class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
          <Navigation/>
        <div className="container-fluid Home-Component">
          <div className="row">
          <div className="col-md-4">
            &nbsp;
          </div>
          <div className="col-md-4">
            <div id="Rounded" align="center">
              <h4 align="center">ADD CITY</h4>
              <img src="Assets/Add.png" alt="Add City" className="img-fluid Add-City"/>
              <img src="Assets/City.png" className="img-fluid City-BG" alt=""/>
            </div>
          </div>
          <div className="col-md-4">
          &nbsp;
          </div>
          </div>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Home;
