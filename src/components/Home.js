import React, { Component } from "react";
import HomeContent from "./HomeContent";
import '../CSS/HomeContent.css';
import "../Images/GOODr_Logo.png";
import DoctorList from "./DoctorList"
import axios from "axios";


export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      doctors: []
		};

		this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    const api_key = "32693030a396d661b1acb7b1699c8760";
    const url =
      "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=pediatrician&location=25.761681%2C%20-80.191788%2C100&user_location=25.761681%2C%20-80.191788&skip=0&limit=15&user_key=" +
      api_key;

		let data = await axios.get(url).catch(err => console.log(err));
    this.setState({
      doctors: data.data.data
    })
  }

async componentDidMount(){
;
}

  render() {

    if (this.state.doctors.length > 0) {
      return <DoctorList doctors={this.state.doctors}/>;
    } else {
      return (
        <section>
        <HomeContent fetchData={this.fetchData} />
        </section>
      )
    }

  }
}
