import React, { Component } from "react";
import '../CSS/Doctor.css';
import doctor from '../Images/female-doctor.jpg'

export default class Doctor extends Component {
  render(){
    return(
      <div>
        <div id='container'>
          <div className="docHeader">
            <div className="headline">
              <h1>Here is Your Selected Pediatrician: </h1>
            </div>
            <div className="docSubhead">
              <p>Call to Resquest More Information</p>
            </div>
          </div>
          <div className="row">
            <img className="headshot" src={doctor}/>
            <div className="text">
              <div class="rating">
                <img className="stars" src={require('../Images/starRating.png')} alt="five star rating"/>
              </div>
              <h3>Dr. Gladys  Morrison, Sarah  &emsp; (305) 789-4243</h3>
              <h4> Care Resources <br />
              3510 Biscayne Blvd., Miami, FL 33137 </h4>
            <h4>  26 Years in Practice  </h4>

            <h5>2&emsp;Languages Spoken</h5>
            <ul>
              <li>English</li>
              <li>Spanish</li>
            </ul>

            <h5>2&emsp;Specialties</h5>
            <ul>
              <li>Pediatrics</li>
              <li> Child & Adolescent Medicines </li>
            </ul>

            <h5>1&emsp;Board Certifications</h5>
            <ul>
              <li>Pediatrics</li>
              <li>Accredited by: American Board of Pediatrics </li>
            </ul>
          </div>


        </div>
      </div>
    </div>
      )
    }
  }
