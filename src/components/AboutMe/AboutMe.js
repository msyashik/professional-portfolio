import React from "react";
import "./AboutMe.css";
import portfolio from "../../Images/portfolioImage.png";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="aboutMe-top">
      <h1 className="text-center">About Me</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex justify-content-center align-items-center">
            <img src={portfolio} className="w-75" alt="" />
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <p>
            Hi, I'm Ashik. Currently, I'm in my fourth year of studies towards a
            bachelor's in Computer Science and Engineering. I love to spend most
            of my time doing Competitive Programming. Besides that, I have been
            spending some of my time in learning Machine Learning since May
            2020. I have some experience in Web Developing too.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
