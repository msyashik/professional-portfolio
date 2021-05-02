import "./App.css";
import React from "react";
import NavHead from "./components/Header/NavHead/NavHead";
import HeaderMain from "./components/Header/HeaderMain/HeaderMain";
import AboutMe from "./components/AboutMe/AboutMe";
import EducationAndExperience from "./components/EducationAndExperience/EducationAndExperience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="background-img">
      <div className="container" style={{ color: "white" }}>
        <NavHead></NavHead>
        <HeaderMain></HeaderMain>
        <AboutMe></AboutMe>
        <EducationAndExperience></EducationAndExperience>
        <Skills></Skills>
        <Projects></Projects>
        <Blogs></Blogs>
        <ContactMe></ContactMe>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
