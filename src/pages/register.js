import React, { Component } from 'react'

export default class register extends Component {
  render() {
    return (
      <div>
      <h1>Digital Educare</h1>

      <input type="text" name="firstname" placeholder="Firstname" value =""/>
      <input type="text" name="surname" placeholder="Surname" value =""/>
      <input type="text" name="idNo" placeholder="Identity Number" value =""/>
      <input type="password" name="password" placeholder="Enter Password" value =""/>
      <input type="password" name="confirm Password" placeholder="Confirm Password" value =""/>
      <input type="button" value="Register"/>
        
      </div>
    )
  }
}
