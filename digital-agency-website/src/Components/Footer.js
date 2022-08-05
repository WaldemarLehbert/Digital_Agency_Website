import React from "react";

const Footer = () => {
    return (
        <footer>
            <img src={require("../Images/logo_enver.png")} alt="Ico"/>
            <p>Enver</p>
            <div className="navbar">
                <p>Support</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p><span>&copy;</span> 2020 Enver, All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;