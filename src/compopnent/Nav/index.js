import React from "react";
// import { TSignIcon } from "@/public/custom-icons/custom-icons";
import './Nav.css'
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
          <div className="active">Home</div>
        </span>
        <span className="page-route">
          <div href="#">Projects</div>
        </span>
        <span className="page-route">
          <div href="#">Stories</div>
        </span>
        <span className="page-route">
          <div href="#">About me</div>
        </span>
      </div>
    </div>
  );
};

export default Nav;
