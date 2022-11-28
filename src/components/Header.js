import React from "react";
import Navigation from "./Navigation";

function Header({ setCurrentPage }) {
    return (
        <header className="header">

            <Navigation
                setCurrentPage={setCurrentPage}
            />
            
        </header>
    )
}

export default Header;