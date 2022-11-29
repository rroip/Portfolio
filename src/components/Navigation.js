import React from "react";
function Navigation({ setCurrentPage }) {

    return (
        <nav className="d-flex justify-content-evenly ">

            <a href="" onClick={(event) => {
                event.preventDefault();
                setCurrentPage("about");
            }}>About Me</a>{" "}

            <a href="" onClick={(event) => {
                event.preventDefault();
                setCurrentPage("portfolio");
            }}>Portfolio</a>{" "}

            <a href="" onClick={(event) => {
                event.preventDefault();
                setCurrentPage("contact");
            }}>Contact</a>{" "}
            
            <a href="" onClick={(event) => {
                event.preventDefault();
                setCurrentPage("resume");
            }}>Resume</a>{" "}

        </nav>
    )
}

export default Navigation;