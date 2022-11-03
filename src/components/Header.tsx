import React from "react";
import Nav from "./Nav";
import '../styles/general.scss'

function Header() {
    return (<>
    <div className="header-container">
        <h1>
            <span>Hi,</span> I'm Gaute 
        </h1>
        <h2>Frontend Developer, Crypto Enthusiast, Photographer</h2>
    </div>
    <Nav />
    </>
    )
}

export default Header