import React, { Component } from 'react';
import '../CSS/DoctorList.css';
import DoctorCard from './DoctorCard';
import { Selection } from "semantic-ui-react";
import map from "../Images/map.jpg";

<<<<<<< HEAD
=======





>>>>>>> b3a23f424a1358a604e4fe9671025a9c9819024d
class DoctorList extends Component {

 genderChange(event){
  console.log(event.target.value);
    this.setState({
    gender:event.target.value
    })
}

constructor() {
  super();
  this.genders=["male", "female", "both"];
  this.state = {
  gender:2
  };
}
  render() {

    let doctorCardList = this.props.doctors.map((element, index) =>{
      let info = element.profile;

      if(info.gender==this.genders[this.state.gender] || this.state.gender==2){
      return <DoctorCard firstName={info.first_name} key={`id:${index}`} lastName={info.last_name} gender={info.gender} bio ={info.bio}
        picture={info.image_url} />
      } else{
        return null;
      }
    });

    console.log(doctorCardList);

    return (
      <div>
<<<<<<< HEAD
       
        <div className="title">
          <h1>Based on Your Insurance, <br /> Here are the Highest Rated Pediatricians in Miami. </h1>
        </div>
        <div className="subtitle">
          <p> Select your gender preference. >> </p>
            <div className="dropDown">
              <select className="ui dropdown" onChange={this.genderChange.bind(this)}>
                <option value="0">Male</option>
                <option value="1">Female</option>
                <option value="2">Both</option>
              </select>
            </div>
        </div>
=======

        <select className="ui dropdown" onChange={this.genderChange.bind(this)}>
  <option value="0">Male</option>
  <option value="1">Female</option>
  <option value="2">Both</option>
</select>

        <h1 class="Title">Based on your Insurance</h1>
        <h1>Here are the Best Pediatricians in Miami:</h1>
>>>>>>> b3a23f424a1358a604e4fe9671025a9c9819024d
        <div className="directory">
          <div className="Doctor" id="Doctors">
            {doctorCardList}
          </div>
<<<<<<< HEAD
          <img className="map" src={map} alt="map of miami"/>
=======

>>>>>>> b3a23f424a1358a604e4fe9671025a9c9819024d
        </div>

      </div>
    );
  }
}

export default DoctorList;
