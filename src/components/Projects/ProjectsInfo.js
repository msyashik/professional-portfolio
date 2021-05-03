import React from "react";
import "./ProjectInfo.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const ProjectsInfo = (props) => {
  const {
    title,
    description,
    tools,
    liveLink,
    clientSideRepository,
    image,
  } = props.projectData;
  return (
    <div className="col mt-3">
      <div className="card w-100 h-100">
        <img src={image} className="w-100 h-100" alt="..." />
        <div className="card-body h-25" style={{ color: "black" }}>
          <h5 className="card-title">{title}</h5>
          <p>{description}</p>
        </div>
        <div className="card-footer  w-100" style={{ borderStyle: "none" }}>
          <div className="d-flex justify-content-between">
            <a
              href={liveLink}
              style={{ backgroundColor: "rgb(0,38,66)" }}
              class="btn btn-primary px-4"
            >
              <FontAwesomeIcon icon={faLink} /> Live
            </a>
            <a
              href={clientSideRepository}
              style={{ backgroundColor: "rgb(0,38,66)" }}
              class="btn btn-primary px-"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsInfo;
