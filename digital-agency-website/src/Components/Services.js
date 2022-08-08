import React from "react";

const Services = () => {
    return (
      <div id="service" className="service-container">
        <h2>The Service We Provide For You</h2>
        <div className="service-grid">
            <div className="service--item">
                <img src={require("../Images/code_purple.png")} alt="ico"/>
                <h3>Development</h3>
                <p>Create a platform with the best and coolest quality from us.</p>
            </div>
            <div className="service--item">
                <img src={require("../Images/layer.png")} alt="ico"/>
                <h3>UI/UX Designer</h3>
                <p>We provide UI/UX Design services, and of course with the best quality</p>
            </div>
            <div className="service--item">
                <img src={require("../Images/code_yellow.png")} alt="ico"/>
                <h3>Graphic Designer</h3>
                <p>We provide Graphic Design services, with the best designers.</p>
            </div>
            <div className="service--item">
                <img src={require("../Images/align-vertically.png")} alt="ico"/>
                <h3>Motion Graphic</h3>
                <p>Create a platform with the best and coolest quality from us.</p>
            </div>
            <div className="service--item">
                <img src={require("../Images/camera.png")} alt="ico"/>
                <h3>Photography</h3>
                <p>Create a platform with the best and coolest quality from us.</p>
            </div>
            <div className="service--item">
                <img src={require("../Images/video-play.png")} alt="ico"/>
                <h3>Videography</h3>
                <p>Create a platform with the best and coolest quality from us.</p>
            </div>
        </div>
      </div>
    );
}

export default Services;