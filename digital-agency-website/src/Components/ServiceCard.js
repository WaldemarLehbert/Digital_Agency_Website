import React from "react";

const ServiceCard = (props) => {
    return (
        <div className="service--item">
            <img src={require(`../Images/${props.img}`)} alt="ico"/>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    );
};

export default ServiceCard;