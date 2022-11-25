import React, { useState } from "react";
import Project from '../Project';


function Portfolio() {
  const [projects] = useState([
    {
      name: 'surf-report',
      description: 'MERN Stack',
      link: "https://google.com",
      repo: "https://github.com",
      image: "FitCal_screenshot.jpg"
    },
    {
      name: 'pastel-puzzels',
      description: 'MERN Stack',
      link: "https://github.com",
      repo: "https://github.com",
      image: ""
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com",
      image: ""
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com",
      image: ""
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com",
      image: ""
    }
  ]);

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      
      <div className="">
        {projects.map((project, i) => {
              <Project project={project} key={"project" + i}/>
      })}
      </div>

    </section>
  )
}

export default Portfolio;