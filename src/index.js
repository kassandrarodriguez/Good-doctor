import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './CSS/index.css';
import {render} from "react-dom";
import Home from './components/Home';
import About from './components/About';
import Buttons from './components/Buttons';
import {BrowserRouter, Route} from "react-router-dom"
import Services from './Services';

// import Form from './components/Form';


// <Route exact path="/" component={ Form } />

// import registerServiceWorker from './registerServiceWorker';

const Root=()=>{

  return(
  <nav>
    <BrowserRouter>
      <div>
      <Route exact path ='/' component={Home}/>
      <Route exact path = '/about' component={About}/>
      <Route exact path ='/doctors' component={Services}/>
      </div>
    </BrowserRouter>
 </nav>
  )

}


ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
