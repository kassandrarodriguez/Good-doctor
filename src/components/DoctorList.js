import React, { Component } from 'react';
import '../CSS/Doctors.css';
import DoctorCard from './DoctorCard';
import Home from './Home';


class DoctorList extends Component {
  // let map1 = {this.state.doctors}.map(doctor => doctor);



  render() {
    let doctorCardList = this.props.doctors.map((element, index) =>{
      let info = element.profile;
      return <DoctorCard firstName={info.first_name} key={`id:${index}`} lastName={info.last_name} gender={info.gender} bio ={info.bio}
        picture={info.image_url}/>
    });
    console.log(doctorCardList);
    return (
      <div id="Doctors">
          // {doctorCardList}
      </div>
    );
  }
}

export default DoctorList;
