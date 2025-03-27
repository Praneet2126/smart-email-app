import React from "react";
import "./HomeNavbar.css";
import { Link } from "react-router-dom";

function HomeNavbar() {
  return (
    <>
      <div className="container">
        <div className="brand">
          <Link to="/" className="flex items-center">
            <div className="logo">
              <img src="/Images/Logo.png" alt="logo" />
            </div>
            <div>
              <h2 className="logo-title">NEUROMAIL</h2>
            </div>
          </Link>
        </div>
        <div className="nav-section">
          <div>
            <Link to="/about" className="about">
              About
            </Link>
          </div>
          <div>
            <Link to="/working" className="works">
              How it works
            </Link>
          </div>
          <div>
            <Link to="/home" className="dashboard">
              Dashboard
            </Link>
          </div>
          <div>
            <Link to="/contact" className="contact">
              Contact
            </Link>
          </div>
        </div>

        <div className="profile">
          <i className="fa-solid fa-user user-icon"></i>
        </div>
      </div>
    </>
  );
}

export default HomeNavbar;
