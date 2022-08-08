import React from "react";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer--logo">
                <img src={require("../Images/logo_enver.png")} alt="Ico"/>
                <p>Enver</p>
            </div>
            <div className="footer--navbar">
                <p>Support</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
            </div>
            <p className="footer--copy"><span>&copy;</span> 2020 Enver, All Rights Reserved</p>
        </footer>
    );
}

export default Footer;