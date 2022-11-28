import React from "react";

function About() {
    return (
        <section className="about">
            <div className="aboutbox">
                
                <div className="photobox">
                    <img src={require("./Portfolio/assets/Stan_Profile_Photo.png")} className="stan_image"></img>
                </div>
                </div>
                <div className="abouttext">
                    <h1>Hi, I'm Stan Sitnitski,</h1>
                    <p>a full stack web developer, designer and photographer, based in Los Angeles, California, with intention on building beautiful applications and excellent user experience. </p>
                </div>
            
        </section>
    );
}

export default About;