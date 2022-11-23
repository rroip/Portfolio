import React, { useState } from "react";
function Portfolio(){
    const [projects] = useState([
        {
          name: 'surf-report',
          description: 'MERN Stack',
          link: "https://google.com",  //testing
          repo: "https://github.com",
          image: "DSC_4190.jpg"
        },
        {
          name: 'pastel-puzzels',
          description: 'MERN Stack',
          link: "https://github.com",
          repo: "https://github.com"
        },
        {
          name: 'run-buddy',
          description: 'HTML/CSS',
          link: "https://github.com",
          repo: "https://github.com"
        },
        {
          name: 'led-wall',
          description: 'Node/IoT',
          link: "https://github.com",
          repo: "https://github.com"
        },
        {
          name: 'calculator',
          description: 'React/JavaScript/CSS',
          link: "https://github.com",
          repo: "https://github.com"
        },
      ]);
    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            <p>My portfolio goes here <code>.map()</code></p>
        </section>
    )
}

export default Portfolio;