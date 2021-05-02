import React from "react";
import ProjectsInfo from "./ProjectsInfo";

const projectsData = [
  {
    id: "1",
    title: "BuildBetter",
    description: "",
    tools: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth.",
    ],
    liveLink: "https://buildbetter-c96ba.web.app/",
    clientSideRepository: "https://github.com/msyashik/buildbetter-client",
    image:
      "https://i.ibb.co/nkwH3kk/screencapture-buildbetter-c96ba-web-app-2021-05-01-22-34-34.png",
  },
  {
    id: "2",
    title: "RichDeals",
    description: "",
    tools: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth.",
    ],
    liveLink: "https://bengal-ride.web.app/",
    clientSideRepository: "https://github.com/msyashik/bengal-ride-client",
    image:
      "https://i.ibb.co/bgmVVj3/screencapture-bengal-ride-web-app-2021-05-01-23-36-42.png",
  },
  {
    id: "3",
    title: "BengalRide",
    description: "",
    tools: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "React",
      "Firebase Auth",
      "Google Maps",
    ],
    liveLink: "https://inspiring-lamport-26010f.netlify.app/",
    clientSideRepository: "https://github.com/msyashik/bengalride",
    image:
      "https://i.ibb.co/1s3PgZS/screencapture-inspiring-lamport-26010f-netlify-app-2021-05-01-23-38-08.png",
  },
];

const Projects = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center">Projects</h1>
      <div className="mt-5 row row-cols-1 row-cols-md-3">
        {projectsData.map((projectData) => (
          <ProjectsInfo
            key={projectData.id}
            projectData={projectData}
          ></ProjectsInfo>
        ))}
      </div>
    </div>
  );
};

export default Projects;
