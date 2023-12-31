import React from "react";
// import { DownloadIcon } from "@/public/custom-icons/custom-icons";
import "./HomePage.css"

const HomePage = () => {
  return (
    <div style={{marginTop: 20}}>
      <div className="content-container">
        <div className="content">
          <div className="myname">HI, I'M A WEB DEVELOPER</div>
          <div className="job">My name is Duong Thanh Toan</div>
          <div className="major">"I have 3 years of experience in coding, with a focus on frontend web development as my major."</div>
          <div className="cv-button">
            <div>
              <span className="prefix">{/* <DownloadIcon /> */}</span>
              <span className="button-label"> MY CV</span>
            </div>
          </div>
        </div>
        <div className="image-box">
          <div className="image-container">
            {/* <img alt="" src="/images/duongpay.jpg" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
