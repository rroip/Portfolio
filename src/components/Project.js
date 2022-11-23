import React from "react"

function Project( {project} ){
    const = {name, description, image}
    return (
    <img
        src={require(`../../assets/projects/${image}.jpg`).default}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
    )
}

export default Project;
