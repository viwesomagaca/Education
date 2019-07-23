import React, { Component } from 'react';
import Axios from 'axios';

export default class home extends Component {

  state ={
    schools: [],
    loading: false
  }

  componentDidMount(){
    this.allSchools();
  }

 
  allSchools =() =>{
    this.setState({loading: true})
    Axios.get('http://localhost:3002/api/schools')
    .then(data =>{
      console.log(data.data)
      this.setState({loading: false, schools: data.data.school })
    })
  }
  render() {
    const { schools, loading } = this.state;
    return (
      <div>
        <div className="nav">
         <p className="icon">DIGITAL EDUCARE</p>

         <ul className='nav-link'>
         <li><a href="/about">About us</a></li>
         <li><a href="#">Donate</a></li>
         <li><a href="#"> LOG OUT </a></li>
         </ul>
        </div>

        <div className="outer_container light-grey">
         <div className="inner_container"> 
           <p>DIGITAL EDUCATION </p>
         </div>
        </div>

        <h1>School Stats</h1>
        <div className="container">
        <table className="table">
        <thead>
        <tr>
        <th> School Name </th>
        <th> Phase_doe</th>
        <th>Urban / Rural</th>
        <th>Sector </th>
        <th>magisterial_district</th>
        <th> Town / City </th>
        <th> Twonship/ Village</th>
        <th>Postal Code</th>
        <th>Telephone </th>
        </tr>
        </thead>
         <tbody>
      
        {
          loading?
          
          <tr><td colSpan="9">loading...</td></tr>:
          
          schools && schools.length > 0 ?
          schools.map((school, index) =>(
            <tr key ={index}> 
            <td>{ school.schoolname} </td>
            <td> {school.phase_doe} </td>
            <td> {school.urban_rural} </td>
            <td> {school.sector}</td>
            <td> {school.magisterial_district} </td>
            <td> {school.town_city} </td>
            <td> {school.township_village}</td>
            <td> {school.postal_code}</td>
            <td> {school.telephone} </td>
            </tr>
            )):
           <tr><td colSpan="9"> No School Records Available </td></tr>
        } 
        </tbody>
        </table>
        </div>
      </div>
    )
  }
}
