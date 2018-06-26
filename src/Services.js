// import React, { Component } from 'react';
// import axios from 'axios';
// import Doctors from './components/Doctors';
//
// // const key = require('./config.js');
//
// 
//
// // function sleep(ms){
// //   return new Promise(resolve => setTimeout(resolve, ms))
// //
// // }
//
// class Services extends Component {
//
//
// async fetchData(){
//
//
//
//
//   const api_key="32693030a396d661b1acb7b1699c8760";
//   	// const api_key = key;
//
//
//    let data1 = await axios.get('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=pediatrician&location=25.761681%2C%20-80.191788%2C100&user_location=25.761681%2C%20-80.191788&skip=0&limit=100&user_key=' + api_key).catch(this.awaitErrorHandler);
//    // console.log(data1.data);
//    //  await sleep(2000);
//    // let data2 = await axios.get('https://api.betterdoctor.com/2016-03-01/doctors?location=25.790654%2C%20-80.1300455%2C%20400&user_location=25.790654%2C%20-80.1300455&skip=0&limit=100&user_key=' + api_key).catch(this.awaitErrorHandler);
//
// let profile=[];
// let doctors=[];
// let insurance=[];
//
//    for(let element of data1.data.data){
//
//      doctors.push(element);
//      profile.push(element.profile);
//      insurance.push(element.insurances)
//
//
//
// }
//
// // console.log(doctors);
// // console.log(insurance);
// // console.log(profile);
//
//
// //
// // for(let element of data1.data.data){
// //   if(element.specialties[0]) {
// //     // console.log(element.specialties[0].name);
// //     let doctor=element.specialties[0].name;
// //     if(doctor.includes("Plastic")){
// //      console.log(element);
// //     }
// //   }
// // }
//
//
//
//
//
//
// }
//
//   awaitErrorHandler(err) {
//   console.log(err);
//  }
//
//
//
//
//
//    render() {
//
// this.fetchData()
//
// return(
// <Doctors  />
//
// )
//
//
//   }
//
// }
// export default Services;
