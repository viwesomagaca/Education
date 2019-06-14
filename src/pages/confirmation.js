import React, { Component } from 'react';
import axios from 'axios';

export default class confirmation extends Component {
    state = {
        results :[],
        email: '',
        loading: false,
        myEmail: null
        }

confirmation =(e) =>{
    e.preventDefault();
    this.setState({loading: true})
    console.log(this.props.history);

    const { match = {} } = this.props;
    axios.post("http://localhost:3002/api/confirmation",{
     email: localStorage.getItem('educare_email'),
     token: match.params.token
    }).then((response) =>{
        console.log(response); 
        this.props.history.push('/')
    })
};
    render() {
        return (
            <div className="outer_container">
            <div className="inner_container">
              <p>Sucessfully confirmed email adress</p>
              <input className="btn btn-primary" onClick={ this.confirmation} type="button" value="Login"/>
            </div>
                
            </div>
        )
    }
}
