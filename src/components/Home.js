import React, { Component } from "react";
import Search from "./Search";
import HomeContent from "./HomeContent";
import '../CSS/HomeContent.css';
import "../Images/GOODr_Logo.png";


export default class Home extends Component {
  render() {
    // if (this.props.doctors.length > 0) {
    //   return <DoctorList />;
    // } else {
    //   return (
    //     <section className="hero">
    //
    //       <Search fetchData={this.props.fetchData} />
    //     </section>
    // //   );
    // }
    return(

      <HomeContent />


    )
  }
}
