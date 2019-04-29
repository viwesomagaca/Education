import React, { Component } from 'react'

export default class login extends Component {
  render() {
    return (
      <div>
      <hi> Digital Educare</hi>
      <input type="text" placeholder="Identity Number Here"/>
      <input type="text" placeholder=" Password"/>
      <input type="button" value="Login"/>

      <p >Don`t have an account? <a href="/register">Register</a></p>


         
      </div>
    )
  }
}
