import React from 'react';
import FireBs from '../config/firebase';
import '../App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from './register';
import Login from './login';
import Slideshow from './Weather-img';
import Home from './home';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">

          <header className="App-header">

            <div className="container">

              <div className="row">

                <div className="col-md-8">
                  <Slideshow />
                </div>

                <div className="col-md-4 Login-BG">

                  <Route exact path="/" component={Login} />

                  <Route path="/register" component={Register} />

                </div>

              </div>

            </div>
          </header>
        </div>


      </Router>
    </React.Fragment>
  );
}

export default App;
