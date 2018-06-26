import React, { Component } from 'react';
import {Button} from 'semantic-ui-react';
import '../CSS/Home.css';

class Home extends React.Component{

  render(){
    return(
<div>
  <div class="ui buttons">
    <button class="ui button" role="button"onClick={e => this.props.history.push("/")}>Home</button>
      <button class="ui button" role="button"onClick={e => this.props.history.push("/doctors")}>Services</button>
      <button class="ui button" role="button"onClick={e => this.props.history.push("/about")}>About</button>

  </div>
  <body>
      <section className="hero">
          <div className="hero-inner">
            <h1>Get as Good as it Gets!</h1>
            <p>The Easiest Way to Locate <br /> Highly Rated Pediatricians in Miami.</p>
            <img className="logo" src="../Images/GOODr_Logo.png" alt="Pediatrician and Child"/>
          </div>

          <div className="bottom">
              <form className="search" action="#" method="post">
                  <input type="text" name="insurance" value placeholder="Insurance Provider"/>
                  <input type="button" name="submit" value="SEARCH"/>
              </form>
          </div>

      </section>
  </body>
</div>
    )

  }

}
  export default Home;
