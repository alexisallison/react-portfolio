import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

 function Navbar(){
    return(
        <nav>
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