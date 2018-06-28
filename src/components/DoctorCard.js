import React from 'react'
import { Rating } from 'semantic-ui-react'
import { Button, Card, Image } from 'semantic-ui-react'
import '../CSS/DoctorCard.css';
import Doctor from './Doctor';
import doctor from '../Images/starRating.png';

const DoctorCard = (props) => (

<div className="container">
  <a class="ui fluid card" href="./Doctor">
    <div class="content">
        <div class="name">{props.lastName}, {props.firstName}</div>
        
        <div class="rating">
          <img className="stars" src={require('../Images/starRating.png')} alt="five star rating"/>
        </div>

        <div class="meta">
          <span class="category">Gender- {props.gender}</span>
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
