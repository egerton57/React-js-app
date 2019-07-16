import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
//import Navbar from "react-bootstrap/Navbar";
import FireBs from "../config/fire";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      changeMode: true,
    };
    var year = new Date().getFullYear();
  }

  // Sign out Function
  logout = () => {
    FireBs.auth().signOut();
    localStorage.removeItem("isLogged");
    return this.props.history.push("/login");
  };

  //Navigation Side Drawer
  openNav = () => {
    document.getElementById("mySidenav").style.width = "350px";
  };

  //Hide Navigation Side Drawer
  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  switchItem = e => {
    let Mode = e.target.value;

    //Change Mode
    if (this.state.changeMode === false) {
      this.setState({
        changeMode: true
      });

      localStorage.setItem("DarkMode", false);
    } else {
      this.setState({
        changeMode: false
      });
      localStorage.setItem("DarkMode", true);
    }


    //Toggle Switch
    if (localStorage.getItem("DarkMode" == "true")) {
      document.getElementById("switch1").checked = true;
    } else {
      document.getElementById("switch1").checked = false;
    }

    //let checks = localStorage.setItem("Switch", true);
    console.log(Mode);
  };
  render() {
    return (
      <React.Fragment>
        <div id="mySidenav" className="sidenav">
          <div className="User-Div">
            <br />
            <h5>W E L C O M E</h5>

            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-2">
                  <img src="user.png" width="100px" height="100px" alt="" />
                </div>

                <div className="col-sm-10">
                  <p
                    style={{ fontSize: 17, fontWeight: "bold", marginTop: 15 }}
                  >
                    -- U S E R N A M E --
                  </p>
                  <p style={{ marginTop: -20 }}>Free plane</p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <button
            to="#"
            className="btn btn-default closebtn"
            onClick={this.closeNav}
          >
            &times;
          </button>
          <NavLink activeClassName="ActiveNav" to="/home" align="center">
            Home
          </NavLink>
          <NavLink activeClassName="ActiveNav" to="/add" align="center">
            Add City
          </NavLink>
          <button
            className="btn btn-info btn-block LogoutBtn"
            onClick={this.logout}
          >
            Logout
          </button>
          <p className="Side-Nav-Footer" align="center">
            Copyright © {this.year} N57 Weather
          </p>
        </div>

        <div className="Top-Navigation-Bar fixed-top static-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <button
                  align="left"
                  className="btn btn-default Toggle"
                  onClick={this.openNav}
                >
                  <span>&#9776;</span>
                </button>
                &emsp;&ensp;
                <img
                  align="center"
                  src="Logo/Icon.png"
                  width="35px"
                  height="35px"
                  className="d-inline-block align-top"
                  alt=""
                />{" "}
                &nbsp;
                <p align="center" style={{ marginTop: "-35px" }}>
                  N57 Weather
                </p>
              </div>
              <div className="col-md-6" align="center">
                <p style={{ fontSize: "16px", fontWeight: "bold" }}>TODAY</p>
              </div>

              <div className="col-md-3" align="center">
                <form>
                  <div className="custom-control custom-switch">
                    <input
                      onChange={this.switchItem}
                      value={this.state.changeMode}
                      type="checkbox"
                      className="custom-control-input Mode"
                      id="switch1"
                      checked={undefined}
                    />
                    <label className="custom-control-label" htmlFor="switch1">
                      Dark Mode
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Navigation);
