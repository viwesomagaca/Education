import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import LandingPage from './pages/landingPage';
/* Route path="*" exact component={Nav} */

class App extends Component {
  

      render(){
      
      return(
        <div>
        <Router>
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/home" exact component={Home} />
                <Route path="/" exact component={LandingPage} />
                </Router>
        </div>
      
      )};
}
    
export default App;
