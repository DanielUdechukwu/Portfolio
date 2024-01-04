import React from "react";
import { data } from "../utils/projectData.js";
import Nav from "../components/Nav.jsx";

const Projects = () => {
  return (
    <>
      <Nav />
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <h2 className="project-title">
          My <span>Projects</span>
        </h2>
        <div className="d- grid-column">
          {data.map((item) => (
            <div className="grid-item">
              <div className="xx">
                <img src={item.img} alt="" />
              </div>
              <p>{item.description}</p>
              <a href={item.link} target="_blank">
                <button className="view-project">View Project</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
