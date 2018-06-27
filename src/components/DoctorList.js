import React, { Component } from 'react';
import '../CSS/DoctorList.css';
import DoctorCard from './DoctorCard';

class DoctorList extends Component {
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
    
    <div class="ui menu">
      <a class="active item">FEMALE</a>
      <a class="item">MALE</a>
      <a class="item">BOTH</a>
    </div>

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
