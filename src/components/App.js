import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Register from './register';
import Login from './login';

function App() {
  return (

    <Router>
      <div className="App">

        <header className="App-header">

          <div className="container">

            <div className="row">

              <div className="col-md-3">&nbsp;</div>

              <div className="col-md-6">



                  <Route exact path="/" component={Login}/>

                  <Route path="/register" component={Register}/>



              </div>

              <div className="col-md-3">&nbsp;</div>

            </div>

          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
