import React from "react";

const Header = () => {
    return (
        <div>
            <img src={require("../Images/logo_enver.png")} alt="Ico"/>
            <p>Enver</p>
            <nav className="navbar">
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