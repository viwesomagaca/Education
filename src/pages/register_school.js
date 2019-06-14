import React, { Component } from 'react';

import axios from 'axios';

export default class register_school extends Component {

    state ={
        loading: false,
        firstname :"",
        surname:"",
        idnumber :"",
        occupation :"",
        schools:[],
        schoolneed: [],
        notes : "",
        selectedSchool:""
    }

    componentDidMount(){
        this.getSchools();
    }

    getSchools = ()=>{
        this.setState({ loading: true});
        axios.get('https://data.code4sa.org/resource/dxgm-6rn7.json')
        .then(data =>{
            // console.log(data.data[3]);
            this.setState({ loading: false, schools: data.data })
        })
    }

    handleSchoolNeed = (e) =>{
        e.preventDefault();
            let schoolneed = this.state.schoolneed;
            if(this.state.schoolneed.indexOf(e.target.value ) > -1){
                schoolneed.splice(this.state.schoolneed.indexOf(e.target.value), 1)
            } else {
                schoolneed.push(e.target.value)
            }
            this.setState({ schoolneed })
            console.log("THIS IS THE STATE", this.state.schoolneed);
    }

    registerSchool = (e) =>{
        e.preventDefault();
        this.setState({loading: true})
         let institute ={}
          let found ={}
            found = this.state.schools.find(current => {
                return current.institution === this.state.selectedSchool;
            })

            console.log("Match",found);
            institute = {
                institution:found.institution,
                sector:found.sector,
                phase_doe:found.phase_doe,
                magisterial_district:found.magisterial_district,
                town_city : found.town_city,
                township_village: found.township_village,
                postal_code: found.postal_code,
                urban_rural: found.urban_rural,
                telephone : found.telephone
            }

            console.log(institute);

        const { firstname,surname,idnumber,occupation, schoolneed, notes} = this.state;
        console.log("School need", schoolneed);

        axios.post('http://localhost:3002/api/item',{
            firstname: firstname,
            surname: surname,
            idnumber: idnumber,
            occupation: occupation,
            schoolname: institute.institution,
            sector: institute.sector,
            phase_doe: institute.phase_doe,
            urban_rural: institute.urban_rural,
            magisterial_district: institute.magisterial_district,
            town_city: institute.town_city,
            township_village:institute.township_village,
            postal_code: institute.postal_code,
            telephone:institute.telephone,
            school_need: schoolneed,
            notes: notes
        }).then(data =>{
            console.log("Data send to Database",data);
            this.setState({ loading: false, success: true , data: data})
        })
    }
  render() {
    const { schools, loading} = this.state;
    return (
      <div className="container">
        <h1>Register school here </h1> 

        <form>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">First Name</label>
            <input type="email" className="form-control" onChange={ e => this.setState({ firstname : e.target.value})} aria-describedby="emailHelp" placeholder=""/>
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Surname</label>
            <input type="email" className="form-control" onChange={ e => this.setState({ surname : e.target.value})} aria-describedby="emailHelp" placeholder=""/>
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Identity Number</label>
            <input type="email" className="form-control" onChange={ e => this.setState({ idnumber : e.target.value})} aria-describedby="emailHelp" placeholder=""/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your Identity Number with anyone else.</small>
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Occupation</label>
            <input type="email" className="form-control" onChange={ e => this.setState({ occupation : e.target.value})} aria-describedby="emailHelp" placeholder=""/>
            <small id="emailHelp" className="form-text text-muted">Only Registered School Principals can apply.</small>
        </div>

       
        <label htmlFor="exampleSelect1">Please select Your School</label> 
        <div className="wrapper">
        <select onClick={this.mySchool} className="form-control" id="exampleSelect1" size="4" onChange={ e => this.setState({ selectedSchool : e.target.value})}>
            { 
                loading ?
                <option>Loading .....</option>:
                schools && schools.length > 0?
                schools.map((school, index) =>(
                <option  value={school.institution}  className="dropdown-item" key={index}>{school.institution}</option>
                )): 
                <option>No School Records</option>
            }
            </select>
            </div>
    
            
        <div className="form-group">
        <p>School Need </p>
        <div className="form-check">
            <label className="form-check-label">
                <input type="checkbox"  checked={this.state.schoolneed.indexOf("Sanitary Toilets") > -1}  onChange = {this.handleSchoolNeed} className="form-check-input" value="Sanitary Toilets"/>Sanitary Toilets
            </label>
            </div>
               
            
            <div className="form-check">
            <label className="form-check-label">
            <input type="checkbox"  checked={this.state.schoolneed.indexOf("Study Guides") > -1}  onChange = {this.handleSchoolNeed} className="form-check-input" value="Study Guides"/>Study Guides
            </label>
            </div>


            <div className="form-check">
            <label className="form-check-label">
                <input type="checkbox"  checked={this.state.schoolneed.indexOf("Sport Gear") > -1}  onChange = {this.handleSchoolNeed} className="form-check-input" value="Sport Gear"/>Sports Gear
            </label>
            </div>
            <div className="form-check">
            <label className="form-check-label">
                <input type="checkbox"  checked={this.state.schoolneed.indexOf("Furniture") > -1}  onChange = {this.handleSchoolNeed} className="form-check-input" value="Furniture"/>Furniture
            </label>
            </div>

            <div className="form-check">
            <label className="form-check-label">
                <input type="checkbox"  checked={this.state.schoolneed.indexOf("Educators") > -1}  onChange = {this.handleSchoolNeed} className="form-check-input" value="Educators"/>Educators
            </label>
            </div>

            <div className="form-check">
            <label className="form-check-label">
                <input type="checkbox"  checked={this.state.schoolneed.indexOf("Feeding Scheme") > -1}  onChange = {this.handleSchoolNeed} className="form-check-input" value="Feeding Scheme"/>Feeding SCheme
            </label>
            </div>

            <div className="form-check">
            <label className="form-check-label">
                <input type="checkbox"  checked={this.state.schoolneed.indexOf("Funding") > -1}  onChange = {this.handleSchoolNeed} className="form-check-input" value="Funding"/>Funding
            </label>
            </div>

            <div className="form-check">
            <label className="form-check-label">
                <input type="checkbox" checked={this.state.schoolneed.indexOf("Other") > -1}  onChange = {this.handleSchoolNeed} className="form-check-input" value="Other"/>Other
            </label>
            </div>
            </div>

            <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Please Add More Notes *</label>
            <textarea onChange ={ e => this.setState({ notes : e.target.value})} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <div className="form-group">
          <input type="button" onClick={ this.registerSchool} value="Apply" className="btn btn-primary"/>
          </div>



        </form>
      </div>
    )
  }
}
