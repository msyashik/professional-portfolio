import React from "react";

const EducationInfo = ({ education }) => {
  return (
    <div className="row mx-1 mt-2">
      <div class="card w-100" style={{ width: "18rem" }}>
        <div class="card-body" style={{ color: "black" }}>
          <h5 class="card-title">{education.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{education.year}</h6>
          <p class="card-text">{education.degree}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;
