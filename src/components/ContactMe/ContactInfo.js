import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  return (
    <div className="mt-3">
      <div className="mt-2 d-flex justify-content-center align-items-center">
        <div
          style={{
            textAlign: "end",
            borderRight: "1px solid red",
            paddingRight: "5px",
            width: "300px",
          }}
        >
          <p style={{ margin: "0px" }}>Phone</p>
          <p>+8801861278008</p>
        </div>
        <div
          style={{
            paddingLeft: "5px",
            marginTop: "2%",
          }}
        >
          <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faPhone} />
        </div>
      </div>
      <div className="mt-2 d-flex justify-content-center align-items-center">
        <div
          style={{
            textAlign: "end",
            borderRight: "1px solid red",
            paddingRight: "5px",
            width: "300px",
          }}
        >
          <p style={{ margin: "0px" }}>Email</p>
          <p>mdshahariaryounusashik@gmail.com</p>
        </div>
        <div
          style={{
            paddingLeft: "5px",
            marginTop: "2%",
          }}
        >
          <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faEnvelope} />
        </div>
      </div>
      <div className="mt-2 d-flex justify-content-center align-items-center">
        <div
          style={{
            textAlign: "end",
            borderRight: "1px solid red",
            paddingRight: "5px",
            width: "300px",
          }}
        >
          <p style={{ margin: "0px" }}>Address</p>
          <p>Chittagong, Bangladesh</p>
        </div>
        <div
          style={{
            paddingLeft: "5px",
            marginTop: "2%",
          }}
        >
          <FontAwesomeIcon style={{ fontSize: "25px" }} icon={faMapMarker} />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
