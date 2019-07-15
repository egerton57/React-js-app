import React, { Component } from "react";
import Register from "./register";
import Login from "./login";
import Slideshow from "./Weather-img";


class LoginComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>

                  <Login />
                  <Register />

      </React.Fragment>
    );
  }
}

export default LoginComponent;
