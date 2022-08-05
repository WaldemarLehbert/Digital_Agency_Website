import React from "react";

const Portfolio = () => {
    return (
      <div>
          <h2>Our Awesome Portfolio</h2>
          <div className="img-container">
              <img src={require("../Images/image 29.png")} alt="img"/>
              <img src={require("../Images/image 28.png")} alt="img"/>
              <img src={require("../Images/image 30.png")} alt="img"/>
          </div>
      </div>
    );
}

export default Portfolio;