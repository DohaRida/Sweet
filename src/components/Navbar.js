import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "../styles/navbar.css";

export default function Navbar() {
return (
<nav className="navbar">
<div className="navbar-logo">
<img src={logo} alt="Sweet & Sip logo" className="logo-img" />
<span className="brand-name">Sweet & Sip</span>
</div>

  <ul className="navbar-links">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/sweets">Sweets</NavLink></li>
    <li><NavLink to="/drinks">Drinks</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/contact">Contact</NavLink></li>
    
  </ul>
</nav>
);
}