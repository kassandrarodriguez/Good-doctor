import React, { Component } from 'react';
import '../CSS/Doctors.css';
import Doctor from './Doctor';

class Doctors extends Component {
  render() {
    return (

      <div id="Doctors">
          <Doctor />
        <p></p>
      </div>
    );
  }
}

export default Doctors;
