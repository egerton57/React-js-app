import React, { Component } from "react";
import { Link } from "react-router-dom";
//import FireBs from "../config/fire";
import Navigation from "./Navigation";

const API_KEY = "ed225f655bfa99f9c3c5e7bce2d248a3";

class Home extends Component {

  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    main: "",
    description: "",
    error: ""
  };

  // var getUserCity = localStorage.getItem("UserCity");
  // var UserCityDatas = JSON.parse(getUserCity);

  // var getUid = UserCityDatas[0];
  // var getCity = UserCityDatas[1];
  // var getCountry = UserCityDatas[2];

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <div className="container-fluid Home-Component">
          <div className="row">
            <div className="col-md-4">
              {' '}
            </div>
            <div className="col-md-4">
              <div id="Rounded" align="center">
                <h4 align="center">ADD CITY</h4>

                <Link to="/add">
                  <img
                    src="Assets/Add.png"
                    alt="Add City"
                    className="img-fluid Add-City"
                  />
                </Link>
                <img
                  src="Assets/City.png"
                  className="img-fluid City-BG"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-4">&nbsp;</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
