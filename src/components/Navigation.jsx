import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import FireBs from "../config/fire";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {};
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

  render() {
    return (
      <React.Fragment>
        <div id="mySidenav" className="sidenav">
          <div className="User-Div">
            <br />
            <h5 align="center">W E L C O M E</h5>

            <div className="container-fluid">
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="user.png"
                    classname="img-fluid"
                    width="80px"
                    height="auto"
                    alt=""
                  />
                </div>

                <div className="col-md-9">
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
        </div>

        <div className="Top-Navigation-Bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4" align="left">
                <button
                  className="btn btn-default Toggle"
                  onClick={this.openNav}
                >
                  <span>&#9776;</span>
                </button>
                &nbsp;&nbsp;
                <img
                  src="Logo/Icon.png"
                  width="35px" height="35px"
                  className="d-inline-block align-top img-responsive"
                  alt=""
                /> &nbsp;<span>N57 Weather</span>
              </div>
              <div className="col-4" align="center" style={{paddingTop:'5px'}}>
                <p style={{fontSize:'16px', fontWeight:'bold'}}>TODAY</p>
              </div>

              <div className="col-4" align="right" style={{paddingTop:'5px'}}>
                <form>
                  <div class="custom-control custom-switch">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="switch1"
                    />
                    <label class="custom-control-label" for="switch1">
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
