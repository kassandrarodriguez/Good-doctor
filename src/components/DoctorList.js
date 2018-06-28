import React, { Component } from 'react';
import '../CSS/DoctorList.css';
import DoctorCard from './DoctorCard';
import { Dropdown } from "semantic-ui-react";
import map from "../Images/map.jpg";


class DoctorList extends Component {
// constructor(){
//   super();
//   this.state={
//     list: false
//   }
//   this.toggleVisibility = this.toggleVisibility.bind(this);
// }
//
//
// toggleVisibility(){
//   document.getElementById('Doctors').className = "hidden";
// }

  render() {

    // <div class="ui menu">
    //   <a class="active item">FEMALE</a>
    //   <a class="item">MALE</a>
    //   <a class="item">BOTH</a>
    // </div>

    //
    // const options = [
    //   { key: 'female', text: 'Female', value: 'female' },
    //   { key: 'male', text: 'Male', value: 'male' },
    //
    // ]
    //
    // const DropdownExampleMultipleSelection = () => (
    //   <Dropdown placeholder='Skills' fluid multiple selection options={options} />
    // )
    //
    // function gender(){
    //
    //
    // }

//     function gender(doctorCardList, options){
//
// for(let element of doctorCardList){
//     if(options=='female' && info.gender=== 'female'){
//       return <DoctorCard firstName={info.first_name} key={`id:${index}`} lastName={info.last_name} gender={info.gender} bio ={info.bio}
//         picture={info.image_url} onClick={gender}/>
//       }
// }
      // {DropdownExampleMultipleSelection()}
    // }

    let doctorCardList = this.props.doctors.map((element, index) =>{
      let info = element.profile;


      return <DoctorCard firstName={info.first_name} key={`id:${index}`} lastName={info.last_name} gender={info.gender} bio ={info.bio}
        picture={info.image_url} />
    });
    console.log(doctorCardList);
    return (
      <div>
        <div className="title">
          <h1>Based on Your Insurance, Here are the Highest Rated Pediatricians in Miami: </h1>
        </div>
        
      <div className="directory">
        <div className="Doctor" id="Doctors">
          {doctorCardList}
      </div>

          <img className="map" src={map} alt="map of miami"/>
          </div>
    </div>
    );

  }
}

export default DoctorList;
