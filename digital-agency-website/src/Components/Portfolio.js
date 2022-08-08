import React from "react";

const Portfolio = () => {
    return (
      <div id="project" className="portfolio-container">
          <h2>Our Awesome Portfolio</h2>
          <div className="portfolio--images">
              <img className="img1" src={require("../Images/image 29.png")} alt="img"/>
              <img className="img2" src={require("../Images/image 28.png")} alt="img"/>
              <img className="img3" src={require("../Images/image 30.png")} alt="img"/>
          </div>
      </div>
    );
}

export default Portfolio;