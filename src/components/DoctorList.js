import React, { Component } from 'react';
import '../CSS/DoctorList.css';
import DoctorCard from './DoctorCard';
import Home from './Home';


class DoctorList extends Component {
  // let map1 = {this.state.doctors}.map(doctor => doctor);
constructor(){
  super();
  this.state={
    list: false
  }
  this.toggleVisibility = this.toggleVisibility.bind(this);
}


toggleVisibility(){
  document.getElementById('Doctors').className = "hidden";
}
  render() {
    let doctorCardList = this.props.doctors.map((element, index) =>{
      let info = element.profile;
      return <DoctorCard firstName={info.first_name} key={`id:${index}`} lastName={info.last_name} gender={info.gender} bio ={info.bio}
        picture={info.image_url} onClick={this.toggleVisibility}/>
    });
    console.log(doctorCardList);
    return (
      <div className="" id="Doctors">
          {doctorCardList}
      </div>
    );
  }
}

export default DoctorList;
