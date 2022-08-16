import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
      <div id="service" className="service-container">
        <h2>The Service We Provide For You</h2>
        <div className="service-grid">
            <ServiceCard img={"code_purple.png"}
                         title={"Development"}
                         desc={"Create a platform with the best and coolest quality from us."}
            />
            <ServiceCard img={"layer.png"}
                         title={"UI/UX Designer"}
                         desc={"We provide UI/UX Design services, and of course with the best quality"}
            />
            <ServiceCard img={"code_yellow.png"}
                         title={"Graphic Designer"}
                         desc={"We provide Graphic Design services, with the best designers."}
            />
            <ServiceCard img={"align-vertically.png"}
                         title={"Motion Graphic"}
                         desc={"Create a platform with the best and coolest quality from us."}
            />
            <ServiceCard img={"camera.png"}
                         title={"Photography"}
                         desc={"Create a platform with the best and coolest quality from us."}
            />
            <ServiceCard img={"video-play.png"}
                         title={"Videography"}
                         desc={"Create a platform with the best and coolest quality from us."}
            />
        </div>
      </div>
    );
}

export default Services;