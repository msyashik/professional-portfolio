import React from "react";
import ReactDOM from "react-dom";
import Typist from "react-text-typist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <div className="row">
      <div className="header-main-top text-center">
        <div>
          <p style={{ fontSize: "25px" }}>Hello I'm</p>
          <h1>Md Shahariar Younus Ashik</h1>
          <h4>
            <Typist
              sentences={["Competitive Programmer", "Web Developer"]}
              loop={true}
            />
          </h4>
        </div>
        <div>
          <a
            href="https://www.github.com/msyashik"
            style={{ textDecoration: "none", color: "white" }}
            target="blank"
          >
            <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/msyashik"
            style={{
              textDecoration: "none",
              color: "white",
              marginLeft: "15px",
            }}
            target="blank"
          >
            <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
