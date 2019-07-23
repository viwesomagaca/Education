import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Register_School from './pages/register_school';
import Landing from './pages/confirmation';
import About from './pages/about';


export default class App extends Component {


  render() {
    const token = localStorage.getItem("token");
    
    return (

    <Router>
      <div>
        <Route path="/home" exact component = {Home}/>
        <Route path="/application" exact component = {Register_School}/>
        <Route path ="/" exact component = {Login}/>
        <Route path ="/confirmation/:token" exact component = {Landing}/>
        <Route path ="/register" exact component = {Register}/>
        <Route path ="/about" exact component = {About}/>
      </div>   
  </Router>
    )
  }
}

    // SET TOKEN IN LOCAL STORAGE
// localStorage.setItem("token", "YOURTOKENHERE")

// GET TOKEN FROM LOCALSTORAGE
// const token = localStorage.getItem("token")