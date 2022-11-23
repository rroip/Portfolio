import React from "react";
import Navigation from "./Navigation";

function Header({ setCurrentPage }){
    return (
        <header className="bg-success">
             <h1>Stan Sitnitski</h1>
             <Navigation setCurrentPage={setCurrentPage}/> 
        </header>
    )
}

export default Header;