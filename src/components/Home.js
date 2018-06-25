import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import '../CSS/Home.css';

class Home extends React.Component{

  render(){
    return(

  <div class="ui buttons">
    <button class="ui button" role="button"onClick={e => this.props.history.push("/")}>Home</button>
    <button class="ui button" role="button"onClick={e => this.props.history.push("/doctors")}>Doctors</button>
    <button class="ui button" role="button"onClick={e => this.props.history.push("/about")}>About</button>

  </div>
    )

  }

}
  export default Home;
