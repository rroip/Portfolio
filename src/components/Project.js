import React from "react"

function Project({ project }) {

  const { name, description, link, repo, image } = project;

  return (
    <div key={name}>
      <img
        src={require(`../assets/images/${image}`)}
        alt={(name)}
        className=""
      />
      <div>
        <a href={link} target="_blank" rel="noreferrer">{name}</a>
        <a href={repo} target="_blank" rel="noreferrer">Repo</a>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Project;
