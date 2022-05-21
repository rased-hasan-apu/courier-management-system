import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navegation.css'

const Navegation = () => {
    return (
        <div >
           <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <NavLink className="nav-link" to="/home"><h1 className="nav-link logo" > <span>Courier Manag</span>ement System</h1></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <ul className="navbar-nav me-auto mb-3 mb-lg-0  ms-lg-5">
        <li className="nav-item ">
        <NavLink className="nav" to="/home">Home</NavLink>
        </li>
        <li className="nav-item ">
        <NavLink className="nav" to="/branches">Branches</NavLink>
        </li>
        <li className="nav-item ">
        <NavLink className="nav" to="/bookings">Bookings</NavLink>
        </li>
        <li className="nav-item ">
        <NavLink className="nav" to="/loding">Loding</NavLink>
        </li>
        <li className="nav-item ">
        <NavLink className="nav" to="/deliveries">Deliveries</NavLink>
        </li>
        <li className="nav-item ">
        <NavLink className="nav" to="/recivers">Recivers</NavLink>
        </li>
        <li className="nav-item ">
        <NavLink className="nav" to="/loding">Reports</NavLink>
        </li>
        <li className="nav-item ">
        <NavLink className="nav" to="/adminpalel">Admin panel</NavLink>
        </li>
        <li className="nav-item ">
        <NavLink className="nav" to="/login">Login</NavLink>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navegation;