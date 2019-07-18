import React, { Component } from "react";
import Register from "./register";
import Login from "./login";


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
