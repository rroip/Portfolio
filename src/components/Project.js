import React from "react"
// import { Container } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function Project({ data }) {




  return (

    <Container>
      <Row>
        <img src={data.image}/>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <a href={data.link} target="_blank">Learn More</a>
        
      </Row>


    </Container>
  )
}

export default Project;
