import React from "react";

const ExperienceInfo = ({ experience }) => {
  return (
    <div className="row mx-1 mt-2">
      <div class="card w-100" style={{ width: "18rem" }}>
        <div class="card-body" style={{ color: "black" }}>
          <h5 class="card-title">{experience.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{experience.time}</h6>
          <p class="card-text">{experience.more}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceInfo;
