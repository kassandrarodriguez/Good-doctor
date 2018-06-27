import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import '../CSS/DoctorCard.css';


const DoctorCard = (props) => (

  // <Card.Group>
  //   <Card fluid>
  //     <Card.Content>
  //       <Image floated='right'  src={props.picture} />
  //       <Card.Header>{ props.lastName}, {props.firstName}</Card.Header>
  //       <Card.Meta>Gender -{props.gender}</Card.Meta>
  //       <Card.Description>
  //       {props.bio}
  //       </Card.Description>
  //     </Card.Content>
  //     <Card.Content extra>
  //
  //     </Card.Content>
  //   </Card>
  //
  // </Card.Group>
  <a class="ui card" href="http://www.dog.com">
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

)

export default DoctorCard
