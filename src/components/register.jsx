import React, { Component } from "react";
import { Link } from "react-router-dom";
import FireBs from "../config/fire";
// import Firebase from "firebase";
//import Swal from 'sweetalert2';

class Register extends Component {
  constructor(props) {
    super(props);

    // Firebase.initializeApp(FireBs.firebase);

    this.state = {
      //    fullName: [],
      email: "",
      password: "",
      password2: "",
      errorMessage: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clear = () => {
    this.setState({
      users: [],
      fullName: "",
      email: "",
      password: "",
      password2: "",
      fireBsErrors: ""
    });
  };

  doSubmit = e => {
    e.preventDefault();

    const { email, password, password2 } = this.state;

    if (password === password2) {
      FireBs.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(resp => {
          localStorage.setItem("isLogged", true);
          console.log(resp);

          return this.props.history.push("/home");
        })
        .catch(error => {
          this.setState({ fireBsErrors: error.message });
        });
    } else {
      this.setState({ fireBsErrors: "Password does not matched" });
    }
  };

  render() {
    //Error Notification
    let errorNotification = this.state.fireBsErrors ? (
      <div className="Error-Message">{this.state.fireBsErrors}</div>
    ) : null;

    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <video autoPlay muted loop id="myVideo">
              <source src="CloudsBG.mp4" type="video/mp4" />
            </video>
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">{"  "}</div>
                <div className="col-md-4 Login-BG">
                  <h4>
                    <img
                      src="N57-Weather-Logo.png"
                      width="40px"
                      height="auto"
                      alt=""
                    />{" "}
                    N57 WEATHER
                  </h4>
                  <hr />
                  <h4>Sign up</h4>
                  <br />

                  {errorNotification}

                  <form onSubmit={this.doSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control custom-input"
                        id="fullname"
                        ref="fullName"
                        name="fullName"
                        placeholder="Fullname"
                        onChange={this.handleChange}
                        value={this.state.fullName}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control custom-input"
                        id="email"
                        name="email"
                        placeholder="E-Mail"
                        onChange={this.handleChange}
                        value={this.state.email}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control custom-input"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control custom-input"
                        id="password2"
                        name="password2"
                        placeholder="Confirm Password"
                        onChange={this.handleChange}
                        value={this.state.password2}
                      />
                    </div>

                    <button className="btn btn-primary">Sign up</button>
                  </form>

                  <p className="Register">
                    If you already registered, hit&nbsp;
                    <Link to="/login">Sign in</Link>
                  </p>
                </div>
                <div className="col-md-4"> </div>
              </div>
            </div>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
