import React, { Component } from "react";
import { Link } from "react-router-dom";
import FireBs from "../config/fire";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      fireBsErrors: ""
    };
  }

  handleChange = e => {
    //Prevent Default behavior of the Button
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  doSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    FireBs.auth()
      .signInWithEmailAndPassword(email, password)
      .then(resp => {
        localStorage.setItem("isLogged", true);
        console.log(resp);

        return this.props.history.push("/home");
      })
      .catch(error => {
        this.setState({ fireBsErrors: error.message });
      });
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
                <div className="col-md-4">{' '}</div>

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
                  <h4> Login </h4>

                  <img
                    src="user.png"
                    className="User-Avatar img-fluid"
                    alt="User"
                  />

                  {errorNotification}

                  <form onSubmit={this.doSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control custom-input"
                        name="email"
                        id="email"
                        placeholder="E-Mail"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control custom-input"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>

                    <button className="btn btn-primary">Login</button>
                  </form>

                  <p className="Register">
                    Don't have an account ? &nbsp;
                    <Link to="/register">Register</Link>
                  </p>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
          </header>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
