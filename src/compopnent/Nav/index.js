import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="wrapper">
      <div className="icon-container">
        <div className="icon-content-box">
          <div className="content">Duong Pay</div>
        </div>
      </div>
      <div className="page-container">
        <span className="page-route">
          <Link to="/">
            Home
          </Link>
        </span>
        <span className="page-route">
          <Link to="/projects">
            Projects
          </Link>
        </span>
        <span className="page-route">
          <Link to="/stories">Stories</Link>
        </span>
        <span className="page-route">
          <Link to="/about">About me</Link>
        </span>
      </div>
    </div>
  );
};

export default Nav;
