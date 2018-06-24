import React, { Component } from 'react';
import axios from 'axios';



function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))

}

class Services extends Component {


async fetchData(){
  let api_key = '32693030a396d661b1acb7b1699c8760';


   let data1 = await axios.get('https://api.betterdoctor.com/2016-03-01/doctors?location=25.761681%2C%20-80.191788%2C%20400&user_location=25.761681%2C%20-80.191788&skip=0&limit=100&user_key=' + api_key).catch(this.awaitErrorHandler);
    await sleep(2000);
   let data2 = await axios.get('https://api.betterdoctor.com/2016-03-01/doctors?location=25.790654%2C%20-80.1300455%2C%20400&user_location=25.790654%2C%20-80.1300455&skip=0&limit=100&user_key=' + api_key).catch(this.awaitErrorHandler);


   for(let element of data1.data.data){
    console.log(element);
     // if(element.specialties[0]) {
     //   // console.log(element.specialties[0].name);
     //   let doctor=element.specialties[0].name;
     //   if(doctor.includes("Plastic")){
     //    console.log(element);
     //   }
     // }
}

   for(let element of data2.data.data){
console.log(element);
     // if(element.specialties[0]) {
     //   // console.log(element.specialties[0].name);
     //   let doctor=element.specialties[0].name;
     //   if(doctor.includes("Plastic")){
     //    console.log(element);
     //   }
     // }
}

//      for(let element of data2.data.data){
//
//        if(element.specialties[0]) {
//          // console.log(element.specialties[0].name);
//          let doctor2=element.specialties[0].name;
//          if(doctor.includes("Plastic")){
//           console.log(element);
//          }
//        }
// }



}

  awaitErrorHandler(err) {
  console.log(err);
 }







   render() {

this.fetchData();

return(
<p>This works</p>
)


  }

}
export default Services;
