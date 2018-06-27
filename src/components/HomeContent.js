import React, { Component } from "react";
import '../CSS/HomeContent.css';
import "../Images/GOODr_Logo.png";
import Search from "./Search";

export default class HomeContent extends Component {
    render(){
      return(
    <div className="hero-inner">
      <h1>Get as Good as it Gets!</h1>
      <p>
        The Easiest Way to Locate <br /> Highly Rated Pediatricians in Miami.
      </p>
      <img
        className="logo"
        src="../Images/GOODr_Logo.png"
        alt="Pediatrician and Child"
      />
       <Search fetchData={this.props.fetchData} />

    </div>
  );
}
}
