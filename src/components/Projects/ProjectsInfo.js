import React from "react";
import "./ProjectInfo.css";

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
        <div className="card-body h-25">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="card-footer btn-group dropup w-100">
          <button
            type="button"
            class="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Details
          </button>
          <div className="dropdown-menu dropdownTextCenter">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            molestiae quis aperiam ipsa fugiat eveniet hic, quae asperiores
            dignissimos earum quas, ea dolor repellat facilis deleniti magnam
            accusantium sequi quisquam quam nobis voluptas aut neque dolore!
            Debitis laborum animi quo, consectetur accusamus tempora, unde minus
            fuga itaque doloremque, vel delectus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsInfo;
