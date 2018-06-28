import React, { Component } from "react";
import '../CSS/Doctor.css';
import doctor from '../Images/doctor.jpg'



export default class Doctor extends Component {
    render(){
      return(

        <div id='container'>
            <aside>
            <img class="ui fluid image" src={doctor}/>
                <h3>the doctor</h3>
                <ul>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                  <li>lorem</li>
                </ul>
            </aside>

            <section id='main'>
                <h2>lorem</h2>
                <p>
              lorem
                </p>

                <p>
              lorem
                </p>
            </section>



        </div>

      );
    }
}
