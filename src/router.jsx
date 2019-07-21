import { Switch, Route } from "react-router";
import React, { Component } from "react";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import NoMatch from "./components/noMatch";
import AddCity from "./components/addCity";

class RouterCompenent extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/home" component={Home} onSwitch={this.props.onSwitch} onToggleSwitch={this.props.onToggleSwitch}/> */}
          <Route
            path="/home"
            render={props => <Home onSwitch={this.props.onSwitch} />}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route
            path="/add"
            render={props => <AddCity onSwitch={this.props.onSwitch} />}
          />
          <Route component={NoMatch} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default RouterCompenent;
