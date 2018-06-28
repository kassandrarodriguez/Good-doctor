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
              <h3>Dr. Gladys Lopez, Urizar</h3>
              <h4>Dr. Gladys Lopez is a pediatrics specialist in Miami, FL and has been practicing for 26 years. She graduated from Universidad Cetec in 1988 and specializes in pediatrics and child & adolescent medicine. </h4>

              <h5>2  Languages Spoken</h5>
              <ul>
                <li>English</li>
                <li>Spanish</li>
              </ul>

              <h5>2  Specialties</h5>
              <ul>
                <li>Pediatrics</li>
                <li> Child & Adolescent Medicines </li>
              </ul>

              <h5>1  Board Certifications</h5>
              <ul>
                <li>Pediatrics</li>
                <li> Accredited by: American Board of Pediatrics </li>
              </ul>
            </div>
            <div className="images">
              {/* <img
                className="insurance"
                src={require('../Images/Insurance.png')}
                alt="Insurance list"
                /> */}
              </div>
            </div>

          

          </div>
        </div>
      )
    }
  }
