import React, { Component } from 'react';
import axios from 'axios';



function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))

}

class App extends Component {


async fetchData(){
  let api_key = '32693030a396d661b1acb7b1699c8760';


   let data1 = await axios.get("https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=" + api_key).catch(this.awaitErrorHandler);
   await sleep(3000);
   let data2 = await axios.get("https://api.betterdoctor.com/2016-03-01/practices?location=37.773,-122.413,10&skip=2&limit=10&user_key=" + api_key).catch(this.awaitErrorHandler);
   console.log(data1.data);
   console.log(data2.data);
}
 awaitErrorHandler(err) {
 console.log(err);
}

   render() {


this.fetchData();


    return (
      <div className="App">
        <p>New App</p>
      </div>
    );
  }
}

export default App;