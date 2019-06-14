import React, { Component } from 'react';
import axios from 'axios';
export default class login extends Component {
      state = {
        results :[],
        email: '',
        password: '',
        id:'',
        match:'',
        loading: false
        }

login = (e) => {
  e.preventDefault();
  this.setState({loading: true})
    axios.post("http://localhost:3002/api/login",{
      email: this.state.email,
      password: this.state.password,
    }).then(data =>{
      console.log("data", data.data.user)
      this.setState({loading: false, results:data.data });
        localStorage.removeItem('digital_email')
        localStorage.setItem("token", data.data.user.token);
        window.location = '/home';
  })
}
  render() {
     const { email , password } = this.state;
    return (
      <div className='outer_container'>
      <div className="inner_container">
       <h1> ///</h1> <br/>
      <div className="form-group">
      <input className="form-control"  type="text" value={email} onChange = {e => this.setState({ email:e.target.value })} placeholder="Email"/> </div><br/>
      <div className="form-group">
      <input className="form-control"  type="text" value={password} onChange={e => this.setState({password : e.target.value })} placeholder=" Password"/></div> <br/>
      <div className="form-group">
      
      <input className="btn btn-primary" onClick={ this.login} type="button" value="Login"/>
      <small id="emailHelp" className="form-text text-muted">Don`t have an Acoount?  <a href="/register">Register</a></small>
      </div>
      </div>
      </div>
    )
  }
}
