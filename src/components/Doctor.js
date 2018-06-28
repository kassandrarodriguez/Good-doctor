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
                  <h3>Morrison, Sarah</h3>
                  <ul>
                    <li>Languages: English</li>
                    <li>Specializes in the health of children from birth to young adulthood.</li>
                    <li>Location of pracitce: Miami, Florida</li>
                    <li>Status: Accepting new patients</li>
                  </ul>

        </div>
      );
    }
}
