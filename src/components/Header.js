import React from "react";
import { Menu } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import "../Images/GOODr_Logo.png";
import '../CSS/Header.css';

export default function Header(props) {
  return (
    <Menu>
       <img
            className="logo"
            src={require('../Images/GOODr_Logo.png')} 
            alt="GOODr. Logo"
        />
      <Menu.Item name="home">
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item name="about">
        <Link to="/about">About</Link>
      </Menu.Item>

      <Menu.Item name="Contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
       
     </Menu>
  );
}
