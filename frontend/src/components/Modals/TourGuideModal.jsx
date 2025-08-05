import React from "react";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import guidesData from "../../assets/data/tour_guides.json";

const TourGuideModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>Our Best Tour Guides</ModalHeader>
      <ModalBody>
        <Row>
          {guidesData.map((guide, index) => (
            <Col lg="4" md="6" sm="12" key={index} className="mb-3">
              <div className="guide-card">
                <img
                  src={guide.photo}
                  alt={guide.name}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <h5 className="mt-2">{guide.name}</h5>
                <p>Experience: {guide.experience}</p>
                <p>Languages: {guide.languages}</p>
                <p>Rating: ⭐ {guide.rating}</p>
              </div>
            </Col>
          ))}
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default TourGuideModal;
