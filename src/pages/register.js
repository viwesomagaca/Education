import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom';
import axios from "axios";

export default class register extends Component {
   state ={
     email: '',
     password:'',
     confirm_password:'',
     success: false,
     response:[],
     error: null
   }

   register =(e)=>{
     e.preventDefault();
     this.setState({ loading:true});
     fetch('http://localhost:3002/api/register', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
       method: 'POST',
       body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        confirm: this.state.confirm_password
      })
   })
    .then(response => response.json())
     .then(data => {
        console.log("ERROR RESPONSE", data);
        if (data.status === 'error') {
          this.setState({ loading: false, error: data.message})  
        } else{
        this.setState({ loading: false, response:data});
        }
     })
   }
  render() {
    const { email, password, confirm_password ,error} = this.state;
    return (

      <div className="outer_container">
      <div className="inner_container">
      <h1>///</h1>
      <div className="form-group">
      {
        error ?
        <p>{error}</p> :
        null
      }
      <input className="form-control"  type="text" value={email} onChange = {e => this.setState({ email:e.target.value })} placeholder="Email"/> <br/>
      </div>
      <div className="form-group">
      <input className="form-control"  type="text" value={password} onChange={e => this.setState({password : e.target.value })} placeholder="New Password"/> <br/>
      </div>

      <div className="form-group">
      <input className="form-control"  type="text" value={confirm_password} onChange={e => this.setState({confirm_password : e.target.value })} placeholder="Confirm Password"/> <br/>
      </div>

      <div className="form-group">
      <input className="btn btn-primary"  onClick={ this.register } type="button" value="Register"/>
      <small id="emailHelp" className="form-text text-muted">Already have an Account?  <a href="/">Login</a></small>
      </div>
      </div>
      </div>
    )
  }
}
