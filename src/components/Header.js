import React from "react";
import Navigation from "./Navigation";

function Header({ setCurrentPage }) {
    return (
        <header className="header">

            <Navigation
                setCurrentPage={setCurrentPage}
            />
            <h1>Stan Sitnitski</h1>
        </header>
    )
}

export default Header;