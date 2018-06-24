import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './CSS/index.css';
import {render} from "react-dom";
import Home from './components/Home';
import Doctors from './components/Doctors';
import About from './components/About';
import Buttons from './components/Buttons';
import {BrowserRouter, Route} from "react-router-dom"


// import registerServiceWorker from './registerServiceWorker';

const Root=()=>{

  return(
  <nav>
    <BrowserRouter>
      <div>
      <Route path ='/' component={Home}/>
      <Route exact path ='/doctors' component={Doctors}/>
      <Route exact path = '/about' component={About}/>
      </div>
    </BrowserRouter>
  </nav>
  )

}


ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
