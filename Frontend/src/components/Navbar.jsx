import React from "react";
import "./Navbar.css";

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
          <div className="about">About</div>
          <div className="works">How it works</div>
          <div className="dashboard">Dashboard</div>
          <div className="contact">Contact</div>
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
