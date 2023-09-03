import React from "react";
// import { TSignIcon } from "@/public/custom-icons/custom-icons";
import './Nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="wrapper">
      <div className="icon-container">
        <div className="icon-content-box">
          {/* <TSignIcon with="40" /> */}
          <div className="content">DuongTT</div>
        </div>
      </div>
      <div className="page-container">
        <span className="page-route">
          <Link to="/" className="active">
            Home
          </Link>
        </span>
        <span className="page-route">
          <Link to="/projects" href="#">
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
