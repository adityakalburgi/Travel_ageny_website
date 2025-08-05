import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import { WiDaySunny } from "react-icons/wi";
import { FaUserTie } from "react-icons/fa";
import { MdBuild } from "react-icons/md";

const servicesData = [
  {
    icon: <WiDaySunny size={40} color="#faa835" />,
    title: "Calculate Weather",
    desc: "Check weather forecasts and plan your trips smarter.",
  },
  {
    icon: <FaUserTie size={35} color="#faa835" />,
    title: "Best Tour Guide",
    desc: "Connect with professional tour guides for amazing experiences.",
  },
  {
    icon: <MdBuild size={35} color="#faa835" />,
    title: "Customization",
    desc: "Personalize your tour packages as per your preferences.",
  },
];

const ServiceList = () => {
  const navigate = useNavigate();

  const handleCardClick = (title) => {
    if (title === "Best Tour Guide") {
      navigate("/tour-guides");
    }
  };

  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <div
            onClick={() => handleCardClick(item.title)}
            style={{
              cursor: item.title === "Best Tour Guide" ? "pointer" : "default",
            }}
          >
            <ServiceCard item={item} />
          </div>
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
