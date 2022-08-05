import React from "react";

const Header = () => {
    return (
        <div className="header-container">
            <div className="header--logo">
                <img src={require("../Images/logo_enver.png")} alt="Ico"/>
                <p>Enver</p>
            </div>
            <nav className="header--navbar">
                <p>Home</p>
                <p>Services</p>
                <p>Our Project</p>
                <p>About us</p>
            </nav>
            <button className="contact-button">Contact us</button>
        </div>
    );
}

export default Header;