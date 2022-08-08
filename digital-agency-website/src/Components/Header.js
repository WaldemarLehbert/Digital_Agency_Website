import React from "react";

const Header = () => {
    return (
        <div id="home" className="header-container">
            <div className="header--logo">
                <img src={require("../Images/logo_enver.png")} alt="Ico"/>
                <p>Enver</p>
            </div>
            <ul className="header--navbar">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#service">Services</a>
                </li>
                <li>
                    <a href="#project">Our Project</a>
                </li>
                <li>
                    <a href="#about">About us</a>
                </li>
            </ul>
            <button className="header--contact-button">
                <p>Contact us</p>
            </button>
        </div>
    );
}

export default Header;