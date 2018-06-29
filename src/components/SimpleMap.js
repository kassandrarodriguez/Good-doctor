import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from "react";
import API_KEY from '../config'



const API_K = API_KEY
export class SimpleMap extends Component {

  // state = {
  //   locations: [
  //     { name: "Night and Day Pediatrics", location: {lat: 25.786360, lng: -80.211282} },
  //     { name: "All Kids Pediatrics", location: {lat: 25.786360, lng: -80.211282} },
  //   ]
  // }

  // const style = {
  //   width: '90vw',
  //   height: '75vh'
  // };

  render() {
    return (
    
          // <div style={{ height: '50vh', width: '10vw' }}>
      <Map google={this.props.google} zoom={14} initialCenter={{lat: 25.7617 , lng: -80.1918}}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1></h1>
            </div>
        </InfoWindow>
      </Map>
    // </div>
    );
  }
}


// render() {
//   const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
//     width: '90vw', // 90vw basically means take up 90% of the width screen. px also works.
//     height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
//   }

export default GoogleApiWrapper({
  apiKey: API_K
})(SimpleMap)
