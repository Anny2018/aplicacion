import React from "react";
import {Dropdown, DropdownButton,ButtonToolbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
  return (
    <nav className="nav-weapper grey">
      <div className="container">
        <div className="row">
        <ul className="ContenedorBotones">
        <ButtonToolbar>
        <DropdownButton id="dropdown-basic-button" className="Boton1" title=" ">
        <Dropdown.Item><Link to="/Login" className="link">Login</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/Create" className="link">Create</Link></Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" className="Boton2" title=" ">
        <Dropdown.Item><Link to="/Paises" className="link">Paises</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/Option2" className="link">Option2</Link></Dropdown.Item>
        </DropdownButton>
        </ButtonToolbar>
      </ul>
      </div>
      </div>
    </nav>
  );
};
export default Navbar;
