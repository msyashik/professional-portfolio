import React from "react";
import "./EducationAndExperience.css";
import EducationInfo from "./EducationInfo";
import ExperienceInfo from "./ExperienceInfo";

const educationInfo = [
  {
    name: "International Islamic University Chittagong",
    year: "2017 - 2021",
    degree: "BSc in Computer Science and Engineering",
    id: 1,
  },
  {
    name: "Govt. Hazi Mohammad Mohsin College",
    year: "2013 - 2015",
    degree: "Higher Secondary School Certificate(HSC)",
    id: 2,
  },
  {
    name: "Chittagong Govt. High School",
    year: "2009 - 2013",
    degree: "Secondary School Certificate(SSC)",
    id: 3,
  },
];

const experienceInfo = [
  {
    name: "Teaching Assistant",
    time: "Aug 2020 - Present",
    more:
      "I have been working as a Teaching Assistant under the supervision of Prof. Muhammad Shamsul Alam in both Data Structures and Competitive Programming I courses.",
    id: 1,
  },
  {
    name: "Competitive Programming Trainer",
    time: "Dec 2020 - Present",
    more:
      "As a trainer, I have to arrange Programming Camps for juniors and take classes on various data structures and algorithms. Besides that, I also guide the students towards Competitive Programming.",
    id: 2,
  },
];

const EducationAndExperience = () => {
  return (
    <div className="row eduAndExp-top">
      <div className="col-md-6">
        <h1 className="eduExpMobileView">Education</h1>
        <div className="educationAndExpSegmentMobileView">
          {educationInfo.map((education) => (
            <EducationInfo
              key={education.id}
              education={education}
            ></EducationInfo>
          ))}
        </div>
      </div>
      <div className="col-md-6 expDivMobileView">
        <h1 className="eduExpMobileView">Experience</h1>
        <div className="educationAndExpSegmentMobileView">
          {experienceInfo.map((experience) => (
            <ExperienceInfo
              experience={experience}
              key={experience.id}
            ></ExperienceInfo>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
