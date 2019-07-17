import React, { Component } from "react";

//Firebase Config
import FireBs from "../config/fire";

//React Router
import { withRouter } from "react-router-dom";

//Components
import LoginComponent from "./loginRegister";
import RouterCompenent from "./../router";

//CSS
import "../App.css";

import "../CSS/Navigation-Dark.css";
import '../CSS/Dark-Mode.css';

import "../CSS/Navigation-Light.css";
import "../CSS/Light-Mode.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.authListener();
  }

  componentDidMount() {
    if (localStorage.getItem("isLogged") === "true") {
      let path =
        this.props.location.pathname !== "/login"
          ? this.props.location.pathname
          : "/";
      return this.props.history.push(path);
    }

    return this.props.history.push("/login");
  }

  authListener() {
    FireBs.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <RouterCompenent>
          <LoginComponent />
        </RouterCompenent>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
