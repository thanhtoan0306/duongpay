import React from "react";
import "./ProjectsPage.css"
import PaymentGateway from "../PaymentGateway";

const ProjectsPage = () => {
  return (
    <div style={{padding: 20}}>
      <PaymentGateway />
      <a href="https://www.example.com" class="link">Visit Example Website</a>
      <a href="https://www.example.com" class="link">Bunjs react</a>
    </div>
  );
};

export default ProjectsPage;
