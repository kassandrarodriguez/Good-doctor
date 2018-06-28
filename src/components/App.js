import React, { Component } from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import Home from "./Home";
import '../CSS/HomeContent.css';
import About from "./About";
import Doctor from "./Doctor";
import Contact from "./Contact";

export default class App extends Component {

  render() {
    return (
      <div>
        <Header />
				<Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
         <Route path ="/doctor" component={Doctor}/>
        <Route path ="/contact" component={Contact}/>
      </div>
    );
  }
}
// <Route path="/contact" component={Contact} />
// <Footer />
