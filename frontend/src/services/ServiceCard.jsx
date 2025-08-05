import React from "react";
import "./service-card.css";

const ServiceCard = ({ item }) => {
  return (
    <div className="service__item">
      <div className="service__icon">{item.icon}</div>
      <h6>{item.title}</h6>
      <p>{item.desc}</p>
    </div>
  );
};

export default ServiceCard;
