import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import '../CSS/DoctorCard.css';


const DoctorCard = (props) => (

<div className="container">
  <a class="ui fluid card" href="http://www.dog.com">
    <div class="content">
      <div class="header">{props.lastName}, {props.firstName}</div>
      <div class="meta">
        <span class="category">Gender-{props.gender}</span>
      </div>
      <div class="description">
        <p>{props.bio}</p>
      </div>
    </div>
    <div class="extra content">
      <div class="right floated author">
        <img class="ui avatar image" src={props.picture}/>
      </div>
    </div>
  </a>
</div>



)

export default DoctorCard
