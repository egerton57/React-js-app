import { Switch, Route } from "react-router";
import React, { Component } from "react";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import NoMatch from './components/noMatch';
import AddCity from './components/addCity';

class RouterCompenent extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/add" component={AddCity} />
        <Route component={NoMatch}/>
      </Switch>
    );
  }
}

export default RouterCompenent;
