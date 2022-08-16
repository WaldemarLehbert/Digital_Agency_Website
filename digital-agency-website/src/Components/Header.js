import React from "react";

const Header = (props) => {
    return (
        <div id="home" className="header-container">
            <div className="header--logo">
                <img src={require("../Images/logo_enver.png")} alt="Ico"/>
                <p>Enver</p>
            </div>
            <ul className="header--navbar">
                <li>
                    <a href="#home">{props.navItem1}</a>
                </li>
                <li>
                    <a href="#service">{props.navItem2}</a>
                </li>
                <li>
                    <a href="#project">{props.navItem3}</a>
                </li>
                <li>
                    <a href="#about">{props.navItem4}</a>
                </li>
            </ul>
            <button className="header--contact-button">Contact us</button>
        </div>
    );
};

export default Header;