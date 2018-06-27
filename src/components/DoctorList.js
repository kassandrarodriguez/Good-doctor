import React, { Component } from 'react';
import '../CSS/DoctorList.css';
import DoctorCard from './DoctorCard';

class DoctorList extends Component {
  // let map1 = {this.state.doctors}.map(doctor => doctor);

  render() {
    
    <div class="ui menu">
      <a class="active item">FEMALE</a>
      <a class="item">MALE</a>
      <a class="item">BOTH</a>
    </div>

    let doctorCardList = this.props.doctors.map((element, index) =>{
      let info = element.profile;
        return <DoctorCard 
          firstName={info.first_name} 
          key={`id:${index}`} 
          lastName={info.last_name} 
          gender={info.gender} 
          bio ={info.bio}
          picture={info.image_url}/>
    });
    console.log(doctorCardList);
      return (
        <div id="Doctors">
          {doctorCardList}
        </div>
      );
  }
}

export default DoctorList;
