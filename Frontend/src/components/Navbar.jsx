import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container">
        <div className="brand">
          <div className="logo">
            <img src="/Images/Logo.png" alt="logo" />
          </div>
          <div>
            <h2 className="logo-title">NEUROMAIL</h2>
          </div>
        </div>
        <div className="nav-section">
          <div><Link className="about">About</Link></div>
          <div><Link className="works">How it works</Link></div>
          <div><Link to="/home" className="dashboard">
            Dashboard
          </Link></div>
          <div><Link className="contact">Contact</Link></div>
        </div>

        <div className="btns">
          <button className="nav-btn btn-1">Signup</button>
          <button className="nav-btn btn-2">Login</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
