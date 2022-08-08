import React from "react";

const Hero = () => {
    return (
        <div>
            <div className="hero-card">
                <div className="hero--description">
                    <h1>Build Your Awesome Platform</h1>
                    <p>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</p>
                    <button className="hero--service-button">
                        Our Services
                        <img src={require("../Images/arrow.png")} alt="ico"/>
                    </button>
                </div>
                <div className="hero--img">
                    <img src={require("../Images/person.png")} alt="person"/>
                </div>
            </div>
            <div className="hero-intro">
                <h2>Why Enver Is The Best Choice?</h2>
                <p>Watch this one minute video so you understand why you should use our services!</p>
            </div>
            <img className="hero-video" src={require("../Images/image 4.png")} alt="vid here"/>
        </div>
    );
}

export default Hero;