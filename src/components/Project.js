import React from "react"

function Project({ data }) {

  // const { name, description, link, repo, image } = project;

  return (
    <div className="row">

       <div className="row"><img src={data.image} /></div> 
       <div className="row"> <h2>{data.name}</h2></div>
     
      
      <p>{data.description}</p>
      <a href={data.link} target="_blank">Learn More</a>

    </div>
  )
}

export default Project;
