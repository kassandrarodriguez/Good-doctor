import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import '../CSS/DoctorCard.css';

const DoctorCard = (props) => (

  <Card.Group>
    <Card>
      <Card.Content>
        <Image floated='right'  src={props.picture} />
        <Card.Header>{ props.firstName}</Card.Header>
        <Card.Meta>Gender -{props.gender}</Card.Meta>
        <Card.Description>
        {props.bio}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>

      </Card.Content>
    </Card>

  </Card.Group>
)

export default DoctorCard
