import React, { Component } from "react";
import '../CSS/Doctor.css';
import doctor from '../Images/female-doctor.jpg'

export default class Doctor extends Component {
    render(){
      return(
        <div id='container'>
              <div className="docHeader">
                <div className="headline">
                  <h1>Here is Your Selected Pediatrician: </h1>
                </div>
                <div className="docSubhead">
                  <p>Call to Resquest More Information</p>
                </div>
              </div>
            
              <img className="headshot" src={doctor}/>
                  <h3>Last Name, First Name</h3>
                  <ul>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                  </ul>
              
              <section id='main'>
                  <h2>lorem</h2>
                  <p>
                lorem
                  </p>
              </section>
        </div>
      );
    }
}
