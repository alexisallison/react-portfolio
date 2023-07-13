import React from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";
import "./styles/Navbar.css";

 function Navbar(){
    return(
        <nav className="Navbar container">
<img src={Logo} alt="Logo" className="logo" />
            <ul>
                <li>
                    <Link to="/Home" className="navlink">Home</Link>
                </li>
                <li>
                    <Link to="/About" className="navlink">About</Link>
                </li>
                <li>
                    <Link to="/Work" className="navlink">Work</Link>
                </li>
                <li>
                    <Link to="/Contact" className="navlink">Contact</Link>
                </li>
            </ul>
        </nav>
    );
} 
export default Navbar;